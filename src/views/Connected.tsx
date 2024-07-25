import { useDisconnect } from "wagmi";

import "./Home.css";

const Connected = (props: { address: `0x${string}` | undefined }) => {
  const { disconnect } = useDisconnect();

  const onClickDisconnect = () => {
    disconnect();
  };

  return (
    <>
      <p>Connected with address: {props.address}</p>
      <div className="card">
        <button onClick={onClickDisconnect}>Disconnect</button>
      </div>
    </>
  );
};

export default Connected;
