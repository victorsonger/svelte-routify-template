import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        port: 8089,
        proxy: {
            // 转发到本地的app服务（express）
            '/app': {
                target: 'http://localhost:5008',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/app/, '/')
              }, 
        }
    },
    
    plugins: [svelte()],
});
