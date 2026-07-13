# MATRIX — Landing Telegram

Landing page única (estilo Matrix) com botão para o Telegram. Next.js, sem Tailwind, leve.

## Trocar o link do Telegram

Abra `app/page.tsx` e troque a constante no topo:

```ts
const TELEGRAM_URL = "https://t.me/SEU_CANAL"
```

## Rodar local

```bash
npm install
npm run dev      # http://localhost:3000
```

## Deploy no EasyPanel

1. Suba este repositório no GitHub.
2. No EasyPanel, crie um **App novo** apontando para o repositório.
3. Build: `npm install && npm run build`  •  Start: `npm run start`
4. Porta: **3000**.
5. Adicione o domínio na aba **Domains** e ative o **SSL**.
