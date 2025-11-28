
interface ImportMetaEnv {
  readonly VITE_LINKEDIN_URL: string
  // tu peux ajouter d'autres variables d'environnement ici
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}