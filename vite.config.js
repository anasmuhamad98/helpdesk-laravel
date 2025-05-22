import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

// Get the base URL from environment variables (you can set this in your .env file)
const baseUrl = process.env.VITE_APP_URL || '/';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    base: baseUrl,  // Ensuring assets are generated with the correct base URL
    server: {
        https: true, // Use HTTPS for the development server
    },
    build: {
        // Ensures assets are built with the correct public path
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name].[hash][extname]',
            },
        },
    },
});


// import { defineConfig } from 'vite';
// import laravel from 'laravel-vite-plugin';

// export default defineConfig({
//     plugins: [
//         laravel({
//             input: [
//                 'resources/css/app.css',
//                 'resources/js/app.js',
//             ],
//             refresh: true,
//         }),
//     ],
// });
