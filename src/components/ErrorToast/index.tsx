import { useEffect, useRef, useState } from "react";
import "./style.css";

type ErrorToastType = {
  message: string;
  duration?: number;
  onClose: () => void;
};

const ErrorToast = ({ message, duration = 5000, onClose }: ErrorToastType) => {
  const [visible, setVisible] = useState(true);
  const [remainingTime, setRemainingTime] = useState(duration);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  const startTimer = () => {
    timerRef.current = setTimeout(() => {
      setVisible(false);
      onClose();
    }, remainingTime);
  };

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      const elapsedTime = Date.now() - startTimeRef.current;
      setRemainingTime((prev) => prev - elapsedTime);
    }
  };

  useEffect(() => {
    startTimer();
    return () => clearTimer();
  }, []);

  const handleMouseEnter = () => {
    clearTimer();
  };

  const handleMouseLeave = () => {
    startTimeRef.current = Date.now();
    startTimer();
  };

  return (
    <div
      className={`error-toast__container ${!visible ? "hide" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="error-toast__close-btn"
        onClick={() => {
          setVisible(false);
          onClose();
        }}
      >
        X
      </button>
      <span className="error-toast__message">{message}</span>
    </div>
  );
};

export default ErrorToast;
