/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PROJECT_ACCESS_KEY: string;
  readonly VITE_WAAS_CONFIG_KEY: string;
  readonly VITE_GOOGLE_CLIENT_ID: string;
  readonly VITE_APPLE_CLIENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
