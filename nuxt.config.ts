// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Added | Digital Solutions Built for Humans',
      titleTemplate: '%s | Added',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Added creates fast, modern websites and digital experiences that help ambitious brands grow online.' },
        { name: 'author', content: 'Added' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'keywords', content: 'web design, web development, digital experiences, branding, frontend development' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Added' },
        { property: 'og:title', content: 'Added | Digital Solutions Built for Humans' },
        { property: 'og:description', content: 'Added creates fast, modern websites and digital experiences that help ambitious brands grow online.' },
        { property: 'og:url', content: 'https://addeddigital.com/' },
        { property: 'og:image', content: 'https://addeddigital.com/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Added brand preview with branding messaging' },
        { property: 'og:locale', content: 'en_US' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@added' },
        { name: 'twitter:title', content: 'Added | Digital Solutions Built for Humans' },
        { name: 'twitter:description', content: 'Added creates fast, modern websites and digital experiences that help ambitious brands grow online.' },
        { name: 'twitter:image', content: 'https://addeddigital.com/og-image.png' },
        { name: 'twitter:image:alt', content: 'Added brand preview with branding messaging' },
        { name: 'theme-color', content: '#058182' }
      ],
      link: [
        { rel: 'canonical', href: 'https://addeddigital.com/' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&display=swap' }
      ]
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  // css: [
  //   '@/assets/css/glide.scss'
  // ]
})
