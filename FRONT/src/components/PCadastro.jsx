import { useState } from "react";
import "../pages/CSS/Cadastro_Login.css";
import ky from 'ky';

function PCadastro() {

  const [email_corporativo, set_email_corporativo] = useState('');
  const [senha, set_senha] = useState('');
  const [confirmar_senha, set_confirmar_senha] = useState('')

  const sendUser = async () => {

    try {
      
      const response = ky.post('http://localhost:3000/auth', {
        json: {
          email_corporativo: email_corporativo,
          senha: senha
        }
      }).json();
    } catch (error) {
      
      console.error(error.message);
    };
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
        />
      </div>
      
      <div className="form-alert" style={{ 
        fontSize: '13px', 
        color: '#6b7280', 
        marginTop: '-8px',
        marginBottom: '8px',
        fontWeight: '400'
      }}>
        A senha deve conter até 8 dígitos e pelo menos 2 caracteres especiais.
      </div>
      
      <button className="form-button">Cadastrar</button>
    </div>
  );
}

export default PCadastro;