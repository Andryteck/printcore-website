import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/account/',
          '/account/*',
          '/api/',
          '/cart/',
          '/checkout/',
          '/login/',
          '/register/',
          '/forgot-password/',
          '/payment/*',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/account/',
          '/api/',
          '/cart/',
          '/checkout/',
        ],
      },
      {
        userAgent: 'Yandex',
        allow: '/',
        disallow: [
          '/account/',
          '/api/',
          '/cart/',
          '/checkout/',
        ],
      },
    ],
    sitemap: 'https://printcore.by/sitemap.xml',
  }
}

