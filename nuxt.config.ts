import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    nitro: {
        preset: 'server'
    },
    buildModules: [
        ["nuxt-mdx", {
            remarkPlugins: [
                require("remark-prism"),
            ],
            rehypePlugins: [
                require("rehype-slug"),
            ],
        }],
        "@nuxtjs/style-resources",
    ],
    css: ["~/assets/globals.scss"],
})
