import Home from './views/Home'
import { KitProvider } from '@0xsequence/kit'
import { getDefaultWaasConnectors } from '@0xsequence/kit-connectors'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Transport } from 'viem'
import { createConfig, http, WagmiProvider } from 'wagmi'
import { mainnet, polygon, Chain } from 'wagmi/chains'

const queryClient = new QueryClient()

const App = () => {
  const chains = [mainnet, polygon] as [Chain, ...Chain[]]

  // Get your own keys on sequence.build
  const projectAccessKey = import.meta.env.VITE_ || 'AQAAAAAAAEGvyZiWA9FMslYeG_yayXaHnSI'
  const waasConfigKey = import.meta.env.VITE_WAAS_CONFIG_KEY || 'eyJwcm9qZWN0SWQiOjE2ODE1LCJlbWFpbFJlZ2lvbiI6ImNhLWNlbnRyYWwtMSIsImVtYWlsQ2xpZW50SWQiOiI2N2V2NXVvc3ZxMzVmcGI2OXI3NnJoYnVoIiwicnBjU2VydmVyIjoiaHR0cHM6Ly93YWFzLnNlcXVlbmNlLmFwcCJ9'
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || '970987756660-35a6tc48hvi8cev9cnknp0iugv9poa23.apps.googleusercontent.com'
  const appleClientId = import.meta.env.VITE_APPLE_CLIENT_ID || 'com.horizon.sequence.waas'
  const appleRedirectURI = window.location.origin + window.location.pathname
  const walletConnectId = import.meta.env.VITE_WALLET_CONNECT_ID || 'c65a6cb1aa83c4e24500130f23a437d8'


  const connectors = getDefaultWaasConnectors({
    walletConnectProjectId: walletConnectId,
    waasConfigKey,
    googleClientId,
    // Notice: Apple Login only works if deployed on https (to support Apple redirects)
    appleClientId,
    appleRedirectURI,
    defaultChainId: 137,
    appName: 'Kit Starter',
    projectAccessKey
  })

  const transports: { [key: number]: Transport } = {}

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