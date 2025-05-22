import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

// Check environment variables
const isHttps = process.env.VITE_USE_HTTPS === 'true';
const baseUrl = process.env.VITE_APP_URL || '/';

export default defineConfig(() => {
    const commonConfig = {
        plugins: [
            laravel({
                input: [
                    'resources/css/app.css',
                    'resources/js/app.js',
                ],
                refresh: true,
            }),
        ],
    };

    if (isHttps) {
        return {
            ...commonConfig,
            base: baseUrl,
            server: {
                https: true,
            },
            build: {
                rollupOptions: {
                    output: {
                        assetFileNames: 'assets/[name].[hash][extname]',
                    },
                },
            },
        };
    } else {
        return {
            ...commonConfig,
            server: {
                https: false,
            },
        };
    }
});
