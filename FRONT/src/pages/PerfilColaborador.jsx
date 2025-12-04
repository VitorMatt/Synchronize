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
import footer from "../assets/Footer.svg"

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
              <strong>Credencial Plena</strong>
              <p className="tagP">Trabalhador Comercial</p>
            </div>
            <div className="Cidade-info">
              <p>Santa Catarina</p>
              <p>0666-092754-0</p>
              <img className="codBarras-cod" src={barras} alt="" />
            </div>
          </div>
        </div>

        <div className="info-container">
          <div className="funcoes">
            <div className="funcoes-detalhe">
              <img className="casinhaa" src={home} alt="" />
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
                  <input placeholder="Ex:12345678.." className="inpu-dupla" type="password" />
                </div>
                <div className="campo">
                  <p>Confirmar senha</p>
                  <input placeholder="Ex:12345678.." className="inpu-dupla" type="password" />
                </div>
              </div>

              <div className="inputsSozinhos">
                <div className="input1">
                  <p >E-mail</p> <input  placeholder="seunome.empresa@gmail.com" className="inpu-sozinho" type="text" />
                </div>
                <div>
                  <p >Empresa</p> <input  placeholder="Softplan LTDA" className="inpu-sozinho1" type="text" />
                </div>
              </div>
            </div>

            <div className="botões-dados">
              <button className="botaoSair"><img className="imgsair" src={sair} alt="" /> Sair</button>
              <button className="botaoEditar"><img className="imgEditar" src={editar} alt="" /> Editar </button>
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
