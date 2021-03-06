try {
    require('dotenv').config();
} catch (error) {}

module.exports = {
    env: {
        API_HOST:
            process.env.API_HOST || 'https://api.identification-rumble.science'
    },
    head: {
        titleTemplate(titleChunk) {
            return titleChunk
                ? `${titleChunk} | Identification Rumble`
                : 'Identification Rumble';
        },
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
        script: [
            { src: '/instascan.min.js', async: true },
            { src: '/sha256.js' },
            { src: '/jphidgets22.1.0.0.min.js' }
        ]
    },
    css: [
        'bootstrap/dist/css/bootstrap.css',
        'flag-icon-css/css/flag-icon.css',
        'noty/lib/noty.css',
        'noty/lib/themes/bootstrap-v4.css',
        'chartist/dist/chartist.min.css'
    ],
    router: {
        linkActiveClass: 'active'
    },
    modules: [['@nuxtjs/google-analytics', { ua: 'UA-40279069-7' }]]
};
