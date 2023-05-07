import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import svg from 'vite-plugin-svg'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), svg()],
})
