import logoNav from "../assets/logoNav.svg";
import "./CSS/Perfil.css";
import coracao from "../assets/coracao.svg";
import users from "../assets/users.svg";
import calendario from "../assets/iconCalen.svg";
import sino from "../assets/iconSino.svg";
import miniLogo from "../assets/miniLogo.svg";
import barras from "../assets/CodBarras.svg";
import home from "../assets/casinha.svg";
import videoIcon from "../assets/video.svg";
import emergencyIcon from "../assets/emergencia.svg";
import sair from "../assets/sair.svg";
import editar from "../assets/editar.svg";
import footer from "../assets/Footer.svg";
import homeLaranja from "../assets/home.svg";
import videoLaranja from "../assets/videoLaranja.svg";
import emergencyLaranja from "../assets/usersLaranja.svg";
import ky from 'ky';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PerfilColaborador() {

  const [email_corporativo, set_email_corporativo] = useState('');
  const [senha, set_senha] = useState('');
  const [confirmar_senha, set_confirmar_senha] = useState('');
  const [codigo_carteirinha, set_codigo_carteirinha] = useState('');
  const [empresa, set_empresa] = useState('');
  const [message, set_message] = useState(null);
  

  const navigate = useNavigate();
  const id = localStorage.getItem('id_user');

  async function getUserData() {

    try {

      const response = await ky.get(`http://localhost:3000/perfil/${id}`).json();

      if (response.status !== 404) {

        const data = response.data;
        set_email_corporativo(data.email_corporativo);
        set_senha(data.senha);
        set_empresa(data.empresa);
        set_codigo_carteirinha(data.codigo_carteirinha);
        return data;
      } else {

        return console.log(`Erro ao encontrar dados com o usuário id ${id}`);
      };
    } catch (error) {

      return console.error(error.message);
    };
  };

  async function updateUserPassword() {

    try {

      const response = await ky.put(`http://localhost:3000/perfil/${id}`, {
        searchParams: {
          senha: senha
        }
      }).json();

      if (response.status !== 404) {

        set_message('Senha alterada com sucesso');
        await getUserData();
        return console.log('Senha alterada com sucesso!');
      } else {

        return console.log(`Erro ao encontrar dados com o usuário id ${id}`);
      };
    } catch (error) {

      return console.error(error.message);
    };
  };

  async function updatePassword() {

    if (!senha || !confirmar_senha) {

      set_message('Preeencha os campos antes de confirmar');
      return;
    } else if (senha !== confirmar_senha) {

      set_message('As senhas não coincidem');
      return;
    } else if (senha.length < 8 || senha.length > 10) {

      set_message('Sua senha deve ter entre 8 e 10 caracteres');
      return;
    } else if (senha === (await getUserData()).senha) {

      set_message('A sua nova senha não pode ser igual à anterior');
      return;
    } else {

      set_message(null);
    };

    await updateUserPassword();
  };

  function logOut() {

    localStorage.removeItem('id_user');
    navigate('/');
    
  };
  function goToInicio() {
  navigate("/profissionais");
}

  useEffect(() => {

    getUserData();
  }, []);

  return (
    <div>
      <div className="textinho">
        <p>
          Para tornar a terapia e o apoio psicológico mais acessíveis, nós
          oferecemos <strong>35 BRL</strong> de DESCONTO na sua primeira compra:{" "}
          <strong>JORNADA35</strong>
        </p>
      </div>

      <div className="navbar">
        <div className="logo-container">
          <img src={logoNav} alt="Logo" className="logo" />
        </div>
        <div className="favoritos-container">
          <span className="favoritos-text">Meus Favoritos</span>
          <img src={coracao} alt="Favoritos" className="coracao-icone" />
        </div>
        <div className="spacer"></div>
        <div className="usuario-container">
          <img src={users} alt="Usuário" className="usuario-icone" />
          <div className="usuario-info">
            <span className="usuario-nome">Olá, {email_corporativo.split(' ')[0]}!</span>
          </div>
        </div>
        <div className="acoes-container">
          <div className="sessoes-container">
            <span className="sessoes-text">Sessões</span>
            <img src={calendario} alt="Sessões" className="calendario-icone" />
          </div>

          <div className="notificacao-container">
            <img src={sino} alt="Notificações" className="sino-icone" />
          </div>
        </div>
        <div className="right-spacer"></div>
      </div>

      <div className="Lado-Abaixo">
        <div className="Perfil-Container">
          <div className="Perfil">
            <img className="logoMini" src={miniLogo} alt="" />
            <img className="user-icon-info" src={users} alt="" />
            <p>{email_corporativo.split('.')[0]}</p>
            <div className="Credencial">
              <strong>Credencial Plena</strong>
              <p className="tagP">Trabalhador Comercial</p>
            </div>
            <div className="Cidade-info">
              <p>Santa Catarina</p>
              <p>{codigo_carteirinha}</p>
              <img className="codBarras-cod" src={barras} alt="" />
            </div>
          </div>
        </div>

        <div className="info-container">
          <div className="funcoes">
            <div className="funcoes-detalhe" onClick={goToInicio}>
              <div className="icone-duplo">
                <img src={home} alt="" className="icon normal" />
                <img src={homeLaranja} alt="" className="icon hover" />
              </div>
              <p>Início</p>
            </div>
            <div className="funcoes-detalhe">
              <div className="icone-duplo">
                <img src={videoIcon} alt="" className="icon normal" />
                <img src={videoLaranja} alt="" className="icon hover" />
              </div>
              <p>Video Chamada</p>
            </div>

            <div className="funcoes-detalhe">
              <div className="icone-duplo">
                <img src={emergencyIcon} alt="" className="icon normal" />
                <img  src={emergencyLaranja} alt="" className="icon hover" />
              </div>
              <p>Contatos</p>
            </div>

          </div>
        </div>

        <div className="meus-dados-float">
          <div className="meus-dados-card">
            <h3>Meus dados</h3>
          </div>

          <div className="inputs-dados">
            <div>
              <p className="dadospessoais-tag">Dados Pessoais</p>
              <div className="inputs-lado-a-lado">
                <div className="campo">
                  <p className="">Senha</p>
                  <input placeholder="Ex:12345678.." className="inpu-dupla" type="password"
                    value={senha}
                    onChange={(e) => set_senha(e.target.value)}
                  />
                </div>
                <div className="campo">
                  <p>Confirmar senha</p>
                  <input placeholder="Ex:12345678.." className="inpu-dupla" type="password"
                    value={confirmar_senha}
                    onChange={(e) => set_confirmar_senha(e.target.value)}
                  />
                </div>
              </div>

              <div className="inputsSozinhos">
                <div className="input1">
                  <p >E-mail</p> <input placeholder="seunome.empresa@gmail.com" className="inpu-sozinho" type="text"
                    value={email_corporativo}
                    disabled
                  />
                </div>
                <div>
                  <p >Empresa</p> <input placeholder="Softplan LTDA" className="inpu-sozinho1" type="text"
                    value={empresa}
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="form-alert" style={{
              fontSize: '15px',
              color: '#da2c00ff',
              marginTop: '8px',
              fontWeight: '400',
              height: '30px'
            }}>
              {message}
            </div>
            <div className="botões-dados">
              <button onClick={logOut} className="botaoSair"><img className="imgsair" src={sair} alt="" /> Sair</button>
              <button onClick={updatePassword} className="botaoEditar"><img className="imgEditar" src={editar} alt="" /> Editar </button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-div">
        <img className="footer-img" src={footer} alt="" />
      </div>
    </div>
  );
}

export default PerfilColaborador;
