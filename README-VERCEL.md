# Deploy no Vercel - Templo do Abismo

## Arquivos que você precisa fazer upload:

### 1. Estrutura de pastas para Vercel:
```
templo-do-abismo/
├── src/
│   ├── components/
│   │   └── Countdown.tsx
│   ├── pages/
│   │   └── home/
│   │       └── home.tsx
│   ├── lib/
│   │   ├── utils.ts
│   │   └── queryClient.ts
│   ├── hooks/
│   │   ├── use-toast.ts
│   │   └── use-mobile.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── package.json (modificado)
├── vite.config.ts (modificado)
├── vercel.json
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
└── index.html
```

### 2. Passos para fazer deploy:

1. **Criar novo projeto no Vercel**
   - Vá em vercel.com
   - Clique em "New Project"
   - Importe do GitHub ou faça upload manual

2. **Configurações no Vercel:**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Variables de ambiente (se necessário):**
   - Adicione no painel do Vercel se usar Supabase ou outras APIs

### 3. Package.json simplificado para Vercel:

```json
{
  "name": "templo-do-abismo",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tanstack/react-query": "^5.60.5",
    "clsx": "^2.1.1",
    "framer-motion": "^11.13.1",
    "lucide-react": "^0.453.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "tailwind-merge": "^2.5.4",
    "wouter": "^3.3.6"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.5.1",
    "tailwindcss": "^3.5.3",
    "typescript": "^5.7.2",
    "vite": "^6.0.3"
  }
}
```

### 4. Vite.config.ts para Vercel:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

### 5. Deploy automático:
- Conecte seu repositório GitHub ao Vercel
- Cada push na branch main fará deploy automático
- URL será algo como: `https://templo-do-abismo.vercel.app`

## Diferenças da versão Replit:
- ❌ Removido: Backend Express.js e banco de dados
- ❌ Removido: Autenticação e storage
- ✅ Mantido: Frontend React completo
- ✅ Mantido: Countdown timer
- ✅ Mantido: Tema místico e animações
- ✅ Mantido: Responsividade completa