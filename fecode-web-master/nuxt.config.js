const path = require('path');
module.exports = {
    router: {
        extendRoutes(routes, resolve) {
            routes.push({
                path: '/',
                name: 'index',
                children: [{
                    path: 'home',
                    name: 'home',
                    component: resolve(__dirname, 'src/pages/product/home.vue')

                }, {
                    path: 'productrequest',
                    name: 'productrequest',
                    component: resolve(__dirname, 'src/pages/product/productrequest')

                }, {
                    path: 'limitcollection',
                    name: 'limitcollection',
                    component: resolve(__dirname, 'src/pages/product/limitcollection.vue')

                }, {
                    path: 'contactus',
                    name: 'contactus',
                    component: resolve(__dirname, 'src/pages/product/contactus.vue')

                }, {
                    path: 'aboutus',
                    name: 'aboutus',
                    component: resolve(__dirname, 'src/pages/product/aboutus.vue')

                }],
                component: resolve(__dirname, 'src/pages/index.vue')
            })
        }
    },
    srcDir: 'src/',
    head: {
        title: '灵刃前端框架',
        link: [
            { rel: 'stylesheet', href: '/base.css' },
            { rel: 'stylesheet', href: '/script/lib/weui/weui.min.css' },
            { rel: 'favicon', href: 'favicon.ico' }
        ],
        script: [
            { src: '/base.js', defer: 'defer' },
            { src: '/response.js', defer: 'defer' },
            { src: '/common.js', defer: 'defer' },
            { src: '/xui.js', defer: 'defer' },
            { src: '/script/lib/jquery.min.js', defer: 'defer' },
            { src: '/script/lib/weui/weui.min.js', defer: 'defer' },
        ],
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ],
    },
    plugins: [
        '~/plugins/global.js',
        '~/plugins/vue-inject.js',
        '~/plugins/ctx-inject.js'
    ],
    modules: [
        '@nuxtjs/axios',
    ],
    axios: {
        proxy: true
    },
    proxy: {
        '/api/': 'http://api.example.com',
        '/api2/': 'http://api.another-website.com'
    },
    build: {
        extend(config, { isDev, isClient }) {
            Object.assign(config.resolve.alias, {
                'U': path.resolve('src/common/utils'),
            });
        }
    }
};