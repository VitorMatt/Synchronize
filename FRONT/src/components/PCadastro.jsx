
import "../pages/CSS/Cadastro_Login.css";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import ky from 'ky';

function PCadastro() {

  const [email_corporativo, set_email_corporativo] = useState('');
  const [senha, set_senha] = useState('');
  const [confirmar_senha, set_confirmar_senha] = useState('');
  const [empresa, set_empresa] = useState('');
  const [codigo_carteirinha, set_codigo_carteirinha] = useState('');
  const [message, set_message] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {

    const empresaUser = localStorage.getItem('empresa');

    if (!empresaUser) {

      return console.log('Erro ao carregar empresa do colaborador');
    };

    set_empresa(empresaUser);
  }, []);

  async function getUsers () {
    
    try {
      
      const response = await ky.get('http://localhost:3000/auth').json();

      if (response) {

        return response.data;
      } else {

        console.error('Usuários não encontrados!');
      }
    } catch (error) {
      
      console.error(error.message);
    };
  };

  async function sendUser () {

    try {
      
      const response = await ky.post('http://localhost:3000/cadastro', {
        json: {
          email_corporativo: email_corporativo,
          senha: senha,
          empresa: empresa,
          codigo_carteirinha: parseInt(codigo_carteirinha)
        }
      }).json();

      if (response) {

        console.log('Usuário cadastrado com sucesso');
        localStorage.setItem('id_user', response.data.id_colaborador);
        return navigate('/profissionais');
      } else {

        console.log('Erro na requisição');
      };
    } catch (error) {
      
      console.error(error.message);
    };
  };
  
  async function signUp() {

    if (!email_corporativo || !senha || !confirmar_senha) {
      
      set_message('Preencha os campos corretamente para se cadastrar no sistema.');
      return;
    } else if (!email_corporativo.includes('@')) {

      set_message('Preencha o campo de email corretamente!');
      return;
    } else if (senha !== confirmar_senha) {

      set_message('As senhas não coincidem');
      return;
    } else if (senha.length < 8 || senha.length > 10) {

      set_message('As senhas precisam ter entre 8 e 10 caracteres');
      return;
    } else if((await getUsers()).find((user) => user.email_corporativo === email_corporativo)) {

      set_message('Usuário já cadastrado!');
      return
    } else if (!empresa) {

      console.log('Selecione sua empresa!');
      return navigate('/');
    } else {
      
      set_message(null);
    };

    

      set_codigo_carteirinha(await gerarCodigoUnico());
      sendUser();
  };

  function gerarCodigoCarteirinha() {
    return Math.floor(1000000000 + Math.random() * 9000000000).toString();
  }

  async function gerarCodigoUnico() {
    const users = await getUsers();
    let codigo;

    do {
      codigo = gerarCodigoCarteirinha();
    } while (users.find((user) => user.codigo_carteirinha === codigo));

    return codigo;
  };


  return (
    <div className="form-container">
      <p className="form-title">É um prazer te receber!</p>
      <p className="form-subtitle">Preencha os dados abaixo para criar sua conta</p>
      
      <div className="form-group">
        <label className="form-label">Email corporativo</label>
        <input 
          type="email" 
          className="form-input" 
          placeholder="ex: marcio.azevedo@empresa.com" 
          value={email_corporativo}
          onChange={(e) => { set_email_corporativo(e.target.value) }}
        />
      </div>
      
      <div className="form-group">
        <label className="form-label">Crie sua senha</label>
        <input 
          type="password" 
          className="form-input" 
          placeholder="Digite sua senha" 
          value={senha}
          onChange={(e) => { set_senha(e.target.value) }}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Confirme sua senha</label>
        <input 
          type="password" 
          className="form-input" 
          placeholder="Confirme sua senha" 
           value={confirmar_senha}
          onChange={(e) => { set_confirmar_senha(e.target.value) }}
        />
      </div>
      
      <div className="form-alert" style={{ 
        fontSize: '15px', 
        color: '#da2c00ff', 
        marginTop: '-8px',
        marginBottom: '8px',
        fontWeight: '400',
        height: '30px'
      }}>
        {message}
      </div>
      
      <button className="form-button" onClick={signUp}>Cadastrar</button>
    </div>
  );
}

export default PCadastro;