# 🚀 Развертывание PrintCore Website

## Варианты развертывания

### 1. Vercel (Рекомендуется) ⭐

**Преимущества:**
- Автоматическое развертывание из Git
- Бесплатный SSL
- CDN по всему миру
- Zero-config для Next.js

**Шаги:**

1. Зарегистрируйтесь на [vercel.com](https://vercel.com)

2. Подключите репозиторий:
   ```bash
   # Инициализируйте git (если еще не сделано)
   git init
   git add .
   git commit -m "Initial commit"
   
   # Создайте репозиторий на GitHub
   # Затем:
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

3. В Vercel:
   - New Project → Import Git Repository
   - Выберите репозиторий
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. Deploy! 🎉

**Переменные окружения (если нужны):**
```env
NEXT_PUBLIC_API_URL=https://api.printcore.by
NEXT_PUBLIC_SITE_URL=https://printcore.by
```

---

### 2. Netlify

**Шаги:**

1. Зарегистрируйтесь на [netlify.com](https://netlify.com)

2. Создайте `netlify.toml`:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

3. В Netlify:
   - New site from Git
   - Выберите репозиторий
   - Build settings автоматически определятся

4. Deploy!

---

### 3. Docker

**Создайте Dockerfile:**

```dockerfile
# Dockerfile
FROM node:20-alpine AS base

# Установка зависимостей
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

# Сборка приложения
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
```

**docker-compose.yml:**

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

**Запуск:**
```bash
docker-compose up -d
```

---

### 4. VPS (Ubuntu/Debian)

**1. Установка Node.js:**
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**2. Клонирование проекта:**
```bash
git clone YOUR_REPO_URL
cd printcore_website
npm install
npm run build
```

**3. PM2 для запуска:**
```bash
# Установка PM2
sudo npm install -g pm2

# Запуск приложения
pm2 start npm --name "printcore" -- start

# Автозапуск при перезагрузке
pm2 startup
pm2 save
```

**4. Nginx (проксирование):**
```nginx
# /etc/nginx/sites-available/printcore
server {
    listen 80;
    server_name printcore.by www.printcore.by;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Активация конфигурации
sudo ln -s /etc/nginx/sites-available/printcore /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

**5. SSL (Let's Encrypt):**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d printcore.by -d www.printcore.by
```

---

### 5. Railway

**Шаги:**

1. Зарегистрируйтесь на [railway.app](https://railway.app)

2. Создайте `railway.json`:
   ```json
   {
     "build": {
       "builder": "NIXPACKS",
       "buildCommand": "npm run build"
     },
     "deploy": {
       "startCommand": "npm start",
       "healthcheckPath": "/",
       "restartPolicyType": "ON_FAILURE",
       "restartPolicyMaxRetries": 10
     }
   }
   ```

3. В Railway:
   - New Project → Deploy from GitHub repo
   - Выберите репозиторий
   - Railway автоматически определит Next.js

4. Deploy!

---

## 🔧 Оптимизация для Production

### 1. Environment Variables

Создайте `.env.production`:
```env
NEXT_PUBLIC_API_URL=https://api.printcore.by
NEXT_PUBLIC_SITE_URL=https://printcore.by
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 2. Next.js Config

Обновите `next.config.ts`:
```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Оптимизация изображений
  images: {
    domains: ['printcore.by', 'static.printcore.by'],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Сжатие
  compress: true,
  
  // Standalone для Docker
  output: 'standalone',
  
  // Отключение telemetry
  telemetry: false,
};

export default nextConfig;
```

### 3. Анализ bundle

```bash
# Установка
npm install -D @next/bundle-analyzer

# Анализ
ANALYZE=true npm run build
```

### 4. Performance

**Lazy loading компонентов:**
```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('@/components/Heavy'), {
  loading: () => <div>Загрузка...</div>,
  ssr: false
});
```

**Image optimization:**
```tsx
import Image from 'next/image';

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  priority
  placeholder="blur"
/>
```

---

## 📊 Мониторинг

### Vercel Analytics

В `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Google Analytics

```tsx
// components/GoogleAnalytics.tsx
'use client';

import Script from 'next/script';

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
    </>
  );
}
```

---

## 🔒 Безопасность

### 1. Security Headers

В `next.config.ts`:
```typescript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};
```

### 2. HTTPS только

Редирект в `middleware.ts`:
```typescript
export function middleware(request: NextRequest) {
  if (request.headers.get('x-forwarded-proto') !== 'https') {
    return NextResponse.redirect(
      `https://${request.headers.get('host')}${request.nextUrl.pathname}`,
      301
    );
  }
}
```

---

## ✅ Чеклист перед деплоем

- [ ] Все зависимости установлены
- [ ] `npm run build` успешно выполняется
- [ ] Переменные окружения настроены
- [ ] SEO meta-теги добавлены
- [ ] Favicon и Open Graph изображения
- [ ] Analytics подключен
- [ ] SSL настроен
- [ ] Редиректы настроены
- [ ] 404 страница создана
- [ ] robots.txt настроен
- [ ] sitemap.xml создан

---

## 🚀 CI/CD (GitHub Actions)

Создайте `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

---

## 📞 Поддержка

Если возникли проблемы:
1. Проверьте логи: `npm run build`
2. Проверьте переменные окружения
3. Проверьте версию Node.js (≥ 20)
4. Очистите кэш: `rm -rf .next node_modules && npm install`

---

**Успешного развертывания! 🚀**

PrintCore Website - Next.js 15 + Redux Toolkit

