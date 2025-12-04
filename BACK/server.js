const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

require('dotenv').config();

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
    const {email_corporativo, senha, empresa, codigo_carteirinha} = req.body;
    
    const result = await pool.query(
      'INSERT INTO colaboradores (email_corporativo, senha, empresa, codigo_carteirinha) VALUES ($1, $2, $3, $4) RETURNING *',
      [ email_corporativo, senha, empresa, codigo_carteirinha]
    );

    res.status(200).json('cadastro concluido!')
    
  } catch (error) {
    
    console.log(error);
    res.status(500).json({ erro: 'Erro no cadastro' });
  }
});

app.get('/login', async (req, res) => {

  try {
    const {email_usuario, senha} = req.query;
   

    const result = await pool.query(
      'SELECT * FROM colaboradores WHERE email_corporativo = $1',
      [email_usuario]
    );

    
    if( result.rows[0].email_corporativo == email_usuario && result.rows[0].senha == senha){
    
      res.status(200).json({message:"usuario autenticado com sucesso", data: result.rows[0]})
    }else{
      res.status(400).json('senha incorreta!')
    }

  } catch (error) {
    res.status(500).json('usuario não está cadastrado!');
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

app.put('/perfil/:id', async (req, res) => {

  try {

    const { id } = req.params;
    const { senha } = req.query;

    const response = await pool.query('UPDATE colaboradores SET senha=$1 WHERE id_colaborador = $2', [senha, id]);

    if (response.rows.length > 0) {

      return res.status(200).json({ message: 'Senha alterada com sucesso!' });
    } else {

      return res.status(404).json({ message: 'Não foi possível alterar a senha - usuário não encontrado no banco'});
    };
  } catch (error) {

    res.status(500).json({ message: 'Erro no servidor', error: error});    
  };
});

app.get('/perfil/:id', async (req, res) => {

  try {

    const { id } = req.params;

    const response = await pool.query('SELECT * FROM colaboradores WHERE id_colaborador = $1', [id]);

    if (response.rows.length > 0) {

      return res.status(200).json({ message: 'Dados retornados com sucesso', data: response.rows});
    } else {

      return res.status(404).json({ message: 'Dados não encontrados'});
    };
  } catch (error) {
    
    res.status(500).json({ message: 'Erro no servidor', error: error});
  };
});

app.get('/auth', async (req, res) => {

  try {
    
    const response = await pool.query('SELECT * FROM colaboradores');

    if (response.rows.length > 0) {

      res.status(200).json({ message: 'Colaboradores retornados com sucesso!', data: response.rows});
    } else {

      res.status(404).json({ message: 'Erro ao encontrar os colaboradores'});
    }
  } catch (error) {
    
    res.status(500).json({ message: 'Erro no servidor', error: error});
  }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Ambiente: ${process.env.NODE_ENV}`);
});