try {
    require('dotenv').config();
} catch (error) {}

module.exports = {
    env: {
        API_HOST: process.env.API_HOST || 'http://94.130.100.207:3001'
    },
    head: {
        title: 'Identification Rumble',
        titleTemplate: '%s | Identification Rumble',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            }
        ],
        link: [
            {
                rel: 'icon',
                href: '/favicon.png',
                sizes: '64x64',
                type: 'image/png'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
            }
        ],
        script: [{ src: '/instascan.min.js', async: true }]
    },
    css: ['bootstrap/dist/css/bootstrap.css'],
    router: {
        linkActiveClass: 'active'
    }
};
