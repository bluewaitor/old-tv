import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    proxy: {
        '/video': 'https://live2.kxm.xmtv.cn/dongdmt/playlist.m3u8',
        // '/video': 'http://zhibo.hkstv.tv/livestream/mutfysrq/playlist.m3u8',
        "/api": {
            target: "https://live2.kxm.xmtv.cn/dongdmt/playlist.m3u8",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ""),
          },
    }
  }
})
