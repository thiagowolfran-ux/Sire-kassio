import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve os arquivos estáticos gerados pelo Vite na pasta 'dist'
app.use(express.static(path.join(__dirname, 'dist')));

// Roteamento de fallback para SPA (Single Page Application)
// Qualquer rota não encontrada vai retornar o index.html do React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
