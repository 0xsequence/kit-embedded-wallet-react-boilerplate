import { useOpenConnectModal } from "@0xsequence/kit";

const Connector = () => {
  const { setOpenConnectModal } = useOpenConnectModal();

  return (
    <>
      <p>Not connected</p>
      <div className="card">
        <button onClick={() => setOpenConnectModal(true)}>Connect</button>
      </div>
    </>
  );
};

export default Connector;
