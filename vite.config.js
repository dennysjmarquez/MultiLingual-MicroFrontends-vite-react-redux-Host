import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import { resolve } from 'path'

// eslint-disable-next-line no-undef
const projectRootDir = resolve(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': resolve(projectRootDir, `src`)
		}
	},
	plugins: [
		react(),
		federation({
			name: 'app',
			remotes: {
				remoteMovieList1: 'http://localhost:5174/assets/remoteEntry.js',
				remoteMovieList2: 'http://localhost:5175/assets/remoteEntry.js'
			},
			shared: ['react', 'react-dom', 'react-redux', '@reduxjs/toolkit']
		})
	],
	build: {
		modulePreload: false,
		target: 'esnext',
		minify: false,
		cssCodeSplit: false
	}
})
