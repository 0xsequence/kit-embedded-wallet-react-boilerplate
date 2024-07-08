import Home from './views/Home'
import { KitProvider } from '@0xsequence/kit'
import { getDefaultWaasConnectors } from '@0xsequence/kit-connectors'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createConfig, http, WagmiProvider } from 'wagmi'
import { mainnet, polygon, Chain } from 'wagmi/chains'

const queryClient = new QueryClient()

const App = () => {
  const chains = [mainnet, polygon] as [Chain, ...Chain[]]

  // Get your own keys on sequence.build
  const projectAccessKey = import.meta.env.VITE_KIT_ACCESS_KEY
  const waasConfigKey = import.meta.env.VITE_WAAS_CONFIG_KEY
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
  const appleClientId = import.meta.env.VITE_APPLE_CLIENT_ID
  const appleRedirectURI = window.location.origin + window.location.pathname

  const connectors = getDefaultWaasConnectors({
    walletConnectProjectId: 'wallet-connect-id',
    waasConfigKey,
    googleClientId,
    appleClientId,
    appleRedirectURI,
    defaultChainId: 137,
    appName: 'Kit Starter',
    projectAccessKey
  })

  const transports: { [key: number]: any } = {}

  chains.forEach(chain => {
    transports[chain.id] = http()
  })

  const config = createConfig({
    transports,
    connectors,
    chains
  })

  const kitConfig = {
    projectAccessKey
  }

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <KitProvider config={kitConfig}>
          <Home />
        </KitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App