import presetWind from '@unocss/preset-wind'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app:{
        head:{
            link:[
                {
                    rel:'stylesheet',
                    href:'https://rsms.me/inter/inter.css',
                }
            ]
        },
        // body attributes
    },
    css:[
        '@unocss/reset/tailwind.css'
    ],
    modules: [
        '@unocss/nuxt',
    ],
    unocss: {
        // presets
        uno: true, // enabled `@unocss/preset-uno`
        icons: true, // enabled `@unocss/preset-icons`
        attributify: true, // enabled `@unocss/preset-attributify`,
        rules: [],
        // default font-family
        wind:true,
        webFonts:{
            provider:'google',
            fonts:{
                sans:['Inter', 'sans-serif'],
            }
        }   
    },
})
