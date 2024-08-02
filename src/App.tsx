import Home from "./views/Home";
import { KitProvider } from "@0xsequence/kit";
import { getDefaultWaasConnectors } from "@0xsequence/kit-connectors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createConfig, http, WagmiProvider } from "wagmi";
import chains from "./utils/chains";
const queryClient = new QueryClient();

const App = () => {
  // Get your own keys on sequence.build
  const projectAccessKey =
    import.meta.env.VITE_PROJECT_ACCESS_KEY ||
    "AQAAAAAAADVH8R2AGuQhwQ1y8NaEf1T7PJM";
  const waasConfigKey =
    import.meta.env.VITE_WAAS_CONFIG_KEY ||
    "eyJwcm9qZWN0SWQiOjEzNjM5LCJycGNTZXJ2ZXIiOiJodHRwczovL3dhYXMuc2VxdWVuY2UuYXBwIn0=";
  const googleClientId =
    import.meta.env.VITE_GOOGLE_CLIENT_ID ||
    "970987756660-35a6tc48hvi8cev9cnknp0iugv9poa23.apps.googleusercontent.com";
  const appleClientId =
    import.meta.env.VITE_APPLE_CLIENT_ID || "com.horizon.sequence.waas";
  const appleRedirectURI = window.location.origin + window.location.pathname;
  const walletConnectId =
    import.meta.env.VITE_WALLET_CONNECT_ID ||
    "c65a6cb1aa83c4e24500130f23a437d8";

  const connectors = getDefaultWaasConnectors({
    walletConnectProjectId: walletConnectId,
    waasConfigKey,
    googleClientId,
    // Notice: Apple Login only works if deployed on https (to support Apple redirects)
    appleClientId,
    appleRedirectURI,
    /* Arbitrum sepolia chainId */
    defaultChainId: 421614,
    appName: "Kit Starter",
    projectAccessKey,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const transports: { [key: number]: any } = {};

  chains.forEach((chain) => {
    transports[chain.id] = http();
  });

  const config = createConfig({
    transports,
    connectors,
    chains,
  });

  const kitConfig = {
    projectAccessKey,
  };

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <KitProvider config={kitConfig}>
          <Home />
        </KitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
