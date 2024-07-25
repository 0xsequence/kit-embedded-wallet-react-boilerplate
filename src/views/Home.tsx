import { useAccount } from "wagmi";

import "./Home.css";
import Connected from "./Connected";
import NotConnected from "./components/NotConnected";

const Home = () => {
  const { address, isConnected } = useAccount();

  return (
    <div>
      <h1>Sequence Kit Starter</h1>
      {isConnected ? <Connected address={address} /> : <NotConnected />}
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

export default Home;
