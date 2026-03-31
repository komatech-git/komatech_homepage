// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/komatech-homepage/', // リポジトリ名をスラッシュで囲んで指定
})