import { useDisconnect } from "wagmi";

const Disconnector = () => {
  const { disconnect } = useDisconnect();
  return (
    <div className="card">
      <button onClick={() => disconnect()}>Disconnect</button>
    </div>
  );
};

export default Disconnector;
