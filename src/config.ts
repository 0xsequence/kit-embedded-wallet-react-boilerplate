import { SequenceConnect, createConfig } from '@0xsequence/connect'
import { chainIdFromString, chainIdsFromString } from "./utils/chainIdUtils";

const projectAccessKey = import.meta.env.VITE_PROJECT_ACCESS_KEY;
const waasConfigKey = import.meta.env.VITE_WAAS_CONFIG_KEY;
const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const appleClientId = import.meta.env.VITE_APPLE_CLIENT_ID;
const appleRedirectURI = window.location.origin + window.location.pathname;
const walletConnectId = import.meta.env.VITE_WALLET_CONNECT_ID;
const chainIds = chainIdsFromString(import.meta.env.VITE_CHAINS);
const defaultChainId = chainIdFromString(import.meta.env.VITE_DEFAULT_CHAIN);

if (defaultChainId && !chainIds.includes(defaultChainId)) {
  console.warn(
    `Your preferred default chain ${defaultChainId} is not on your list of supported chains (${import.meta.env.VITE_DEFAULT_CHAIN})`,
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
 export function App() {
    const projectAccessKey = "AQAAAAAAAJbd_5JOcE50AqglZCtvu51YlGI"
    const waasConfigKey = "eyJwcm9qZWN0SWQiOjM4NjIxLCJycGNTZXJ2ZXIiOiJodHRwczovL3dhYXMuc2VxdWVuY2UuYXBwIn0=" // Pass in your waasConfigKey
    const enableConfirmationModal = true // change to your preference
    const googleClientId = 'YOUR_GOOGLE_CLIENT_ID' // Google Client ID
    const appleClientId = 'YOUR_APPLE_CLIENT_ID' // Apple Client ID
    const appleRedirectURI = 'YOUR_APP_SCHEME://auth' // Apple Redirect URI
    const walletConnectProjectId = 'walletConnectProjectId' // Pass in your WalletConnect Project ID
    
    const config = createConfig('waas', {
      projectAccessKey,
      position: "center",
      defaultTheme: "dark",
      signIn: {
        projectName: "web3-game",
      },
      defaultChainId: 1,
      chainIds: [137,1,8453,11155111,1101,84532,43114,43113,10,11155420,42161,42170,421614,56,19011,40875,97,100,81457,1482601649,660279,33139,8333,7668,6283,1868,1284,41,40,1287,1946,1993,7672,33111,62850,80002,21000000,37084624,168587773,37714555429,42793,128123,50312,10143],
      appName: "web3-game",
      email: true,
      waasConfigKey,
      google: { 
        clientId: googleClientId 
      },
      apple: { 
        clientId: appleClientId, 
        redirectURI: appleRedirectURI 
      },
      walletConnect: { 
        projectId: walletConnectProjectId 
      },
      coinbase: true,
      metaMask: true,
      wagmiConfig: {
        multiInjectedProviderDiscovery: true,
      },
      enableConfirmationModal
    })

    return (
      <SequenceConnect config={config}>
        <MyPage />
      </SequenceConnect>
    );
}
