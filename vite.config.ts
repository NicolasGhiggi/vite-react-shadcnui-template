import path from 'path'
import dotenv from 'dotenv'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

dotenv.config()

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: parseInt(process.env.APP_PORT || "3000") || 3000,
        open: true,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    define: {
        'process.env': process.env,
    },
})
