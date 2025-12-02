const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'database',
    password: 'sua_senha_aqui',
    port: 5432,
});

app.use(cors({
    origin: 'http://localhost:5173',
}));

app.use(express.json());

app.get('/', async (req, res) => {});

app.get('/rota1', async (req, res) => {});
app.post('/rota1', async (req, res) => {});
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

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});