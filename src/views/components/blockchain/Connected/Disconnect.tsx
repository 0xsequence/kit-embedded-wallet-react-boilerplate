import { useDisconnect } from "wagmi";

const Disconnect = () => {
  const { disconnect } = useDisconnect();
  const onClickDisconnect = () => {
    disconnect();
  };

  return (
    <div className="card">
      <button onClick={onClickDisconnect}>Disconnect</button>
    </div>
  );
};

export default Disconnect;
