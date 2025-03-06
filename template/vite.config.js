import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	root: "src/",
	publicDir: "../public",
	base: "/",
	build: {
		outDir: "../dist",
		emptyOutDir: true
	},
	server: {
		port: 54320
	},
	preview: {
		port: 54320
	}
})
