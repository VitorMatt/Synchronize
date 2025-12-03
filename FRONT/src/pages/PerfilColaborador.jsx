import logoNav from "../assets/logoNav.svg";
import "./CSS/Perfil.css";
import coracao from "../assets/coracao.svg";
import users from "../assets/users.svg";
import calendario from "../assets/iconCalen.svg";
import sino from "../assets/iconSino.svg";
import miniLogo from "../assets/miniLogo.svg";
import barras from "../assets/CodBarras.svg";
import home from "../assets/home.svg"
import videoIcon from "../assets/video.svg";
import emergencyIcon from "../assets/emergencia.svg";
import logoutIcon from "../assets/sair.svg";
import editIcon from "../assets/editar.svg";

function PerfilColaborador() {
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
            <span className="usuario-nome">Olá, Manassés!</span>
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
            <p>Manasses Marcelino</p>
            <div className="Credencial">
              <p>Credencial Plena</p>
              <p>Trabalhador Comercial</p>
            </div>
            <div className="Cidade-info">
              <p>Santa Catarina</p>
              <p>0666-092754-0</p>
              <img src={barras} alt="" />
            </div>
          </div>
        </div>

        <div className="info-container">
            <div className="funcoes">
                <div className="funcoes-detalhe">
                    <img src={home} alt="" />
                    <p>Início</p>
                </div>
                <div className="funcoes-detalhe">
                    <img src={videoIcon} alt="" />
                    <p>Video Chamada</p>
                </div>
                <div className="funcoes-detalhe">
                    <img src={emergencyIcon} alt="" />
                    <p>Emergencia</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}

export default PerfilColaborador;
