import {defineConfig} from 'vite'
import React from "@vitejs/plugin-react"
export default defineConfig({
    base: "/rajudeploy-github/",
    plugins:[React()],
})