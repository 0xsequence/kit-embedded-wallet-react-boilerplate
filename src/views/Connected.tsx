import { useAccount, useDisconnect } from "wagmi";

import "./Home.css";

const Connected = () => {
  const { disconnect } = useDisconnect();
  const { address } = useAccount();

  const onClickDisconnect = () => {
    disconnect();
  };

  return (
    <>
      <p>Connected with address: {address}</p>
      <div className="card">
        <button onClick={onClickDisconnect}>Disconnect</button>
      </div>
    </>
  );
};

export default Connected;
