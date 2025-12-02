const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config(); // 🔥 ADICIONE ESTA LINHA

const app = express();
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));

app.use(express.json());
const PORT = process.env.PORT || 3000;

app.post('/cadastro', async (req, res) => {
  try {
    const {email_corporativo, senha} = req.body;
    
    const result = await pool.query(
      'INSERT INTO colaboradores ( email, senha) VALUES ($1, $2) RETURNING *',
      [ email_corporativo, senha]
    );

    res.status(200).json('cadastro concluido!')
    
  } catch (error) {
    res.status(500).json({ erro: 'Erro no cadastro' });
  }
});

app.get('/', async (req, res) => {});

app.get('/rota1', async (req, res) => {});

app.put('/rota1', async (req, res) => {});

app.get('/rota2', async (req, res) => {});
app.post('/rota2', async (req, res) => {});
app.put('/rota2', async (req, res) => {});
app.delete('/rota2/:id', async (req, res) => {});

app.post('/rota3', async (req, res) => {});
app.get('/rota3', async (req, res) => {});

app.get('/rota4', async (req, res) => {});
app.get('/rota4/:id', async (req, res) => {});

app.post('/rota5', async (req, res) => {});
app.get('/rota5', async (req, res) => {});
app.get('/rota5/:id', async (req, res) => {});
app.get('/rota5/usuario/:id', async (req, res) => {});
app.get('/rota5/detalhe/:id', async (req, res) => {});
app.delete('/rota5/:id', async (req, res) => {});

app.get('/rota6', async (req, res) => {});
app.post('/rota6', async (req, res) => {});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Ambiente: ${process.env.NODE_ENV}`);
});