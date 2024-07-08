/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_APP_TITLE: string
  readonly VITE_KIT_ACCESS_KEY: string
  readonly VITE_WAAS_CONFIG_KEY: string
  readonly VITE_GOOGLE_CLIENT_ID: string
  readonly VITE_APPLE_CLIENT_ID: string
  
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}