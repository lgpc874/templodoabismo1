# Templo do Abismo - Deploy Vercel

## 🚀 Como fazer deploy

### 1. Preparação dos arquivos:
- Use TODOS os arquivos da pasta `deploy-vercel/`
- Substitua o conteúdo do seu repositório por estes arquivos

### 2. Estrutura correta:
```
seu-repositorio/
├── src/
│   ├── components/Countdown.tsx
│   ├── pages/home/home.tsx
│   ├── lib/
│   ├── hooks/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── vite.config.ts
├── vercel.json
├── index.html
├── tailwind.config.ts
├── postcss.config.js
└── tsconfig.json
```

### 3. Deploy no Vercel:
1. Faça push para GitHub com esta estrutura
2. Vá no Vercel.com
3. Import do GitHub
4. As configurações são automáticas!

### 4. Configurações do Vercel:
- Framework: Vite (detectado automaticamente)
- Build Command: `npm run build`  
- Output Directory: `dist`
- Root Directory: `./` (deixe em branco)

## ✅ O que foi corrigido:
- Package.json simplificado só com dependências necessárias
- Vite.config.ts otimizado para build
- Vercel.json com configurações corretas
- Index.html na raiz
- Estrutura de pastas limpa

## 🎯 Resultado:
Seu site aparecerá corretamente renderizado, não mais código fonte!