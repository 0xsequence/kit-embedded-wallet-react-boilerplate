import { SequenceConnect, SequenceConnectInlineProvider, createConfig } from '@0xsequence/connect'

export function App() {
  const projectAccessKey = import.meta.env.VITE_PROJECT_ACCESS_KEY
  const waasConfigKey = import.meta.env.VITE_WAAS_CONFIG_KEY
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
  const appleClientId = import.meta.env.VITE_APPLE_CLIENT_ID
  const appleRedirectURI = window.location.origin + window.location.pathname
  const xClientId = import.meta.env.VITE_X_CLIENT_ID
  const xRedirectURI = window.location.origin + "/auth-callback-X"
  const epicAuthUrl = import.meta.env.VITE_EPIC_AUTH_URL
  const walletConnectProjectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID

  const config = createConfig('waas', {
    projectAccessKey,
    waasConfigKey,
    position: "center",
    defaultTheme: "dark",
    signIn: {
      projectName: "Sign in",
    },
    defaultChainId: 137,
    chainIds: [1, 11155111, 42170, 421614, 137, 1101, 80002, 8453, 84532, 10, 11155420, 43114, 43113, 19011, 40875, 56, 97, 660279, 37714555429, 1993, 81457, 168587773, 33111, 100, 37084624, 1946, 21000000, 8333, 33139, 13371, 13473, 1482601649, 1868, 40, 41, 1284, 1287, 42793, 128123, 5031, 50312, 28802, 6252, 10143, 5042002],
    appName: "Sign in",
    email: true,
    google: {
      clientId: googleClientId
    },
    apple: {
      clientId: appleClientId,
      redirectURI: appleRedirectURI
    },
    X: {
      clientId: xClientId,
      redirectURI: xRedirectURI
    },
    epic: {
      authUrl: epicAuthUrl
    },
    guest: true,
    twitch: true,
    walletConnect: {
      projectId: walletConnectProjectId
    },
    coinbase: true,
    metaMask: true,
    wagmiConfig: {
      multiInjectedProviderDiscovery: true,
    },
    enableConfirmationModal: true,
    renderInline: true,
    onConnectSuccess: (address: string) => {
      console.log('Connected with address:', address)
    },
  })

  return (
    <SequenceConnect config={config}>
      <SequenceConnectInlineProvider config={config} />
    </SequenceConnect>
  )
}
