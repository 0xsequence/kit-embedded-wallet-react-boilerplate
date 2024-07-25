import { useOpenConnectModal } from "@0xsequence/kit";
import { useDisconnect, useAccount } from "wagmi";

import "./Home.css";

const App = () => {
  const { setOpenConnectModal } = useOpenConnectModal();
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();

  const onClickConnect = () => {
    setOpenConnectModal(true);
  };

  const onClickDisconnect = () => {
    disconnect();
  };

  const Connected = () => (
    <>
      <p>Connected with address: {address}</p>
      <div className="card">
        <button onClick={onClickDisconnect}>Disconnect</button>
      </div>
    </>
  );

  const Disconnected = () => (
    <>
      <p>Not connected</p>
      <div className="card">
        <button onClick={onClickConnect}>Connect</button>
      </div>
    </>
  );

  return (
    <div>
      <h1>Sequence Kit Starter</h1>
      {isConnected ? <Connected /> : <Disconnected />}
      <footer>
        Want to learn more? Read the{" "}
        <a
          href={
            "https://docs.sequence.xyz/solutions/wallets/sequence-kit/overview/"
          }
          target="_blank"
          rel="noreferrer "
        >
          docs
        </a>
        !
      </footer>
    </div>
  );
};

export default App;
