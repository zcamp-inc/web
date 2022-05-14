declare namespace NodeJS{
    export interface ProcessEnv{
        NEXTAUTH_URL: string
        NEXTAUTH_SECRET: string
        AUTH0_ID: string
        AUTH0_SECRET: string
    }
}