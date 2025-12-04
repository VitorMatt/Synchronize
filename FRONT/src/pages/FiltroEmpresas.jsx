import { useNavigate } from "react-router-dom";
import fotoMulher from "../assets/foto.svg";
import "./CSS/FiltroEmpresas.css";
import { useState } from "react";


const lista = [
  "Softplan planejamento de sistemas",
  "Dígitro Tecnologia",
  "Nexxera Tecnologia e Serviços",
  "HarboR Inteligência Industrial",
  "ATMC Automação e Comunicação",
  "HarboR Inteligência Industrial",
  "ATMC Automação e Comunicação",
];

function FiltroEmpresas() {

  const [erro, setErro] = useState("");

  const navigate = useNavigate()
  const [selecionada, setSelecionada] = useState({
    index: null,
    nome: null
  });

const confirmar_empresa = () => {
  if (selecionada.nome == null) {
    setErro("Selecione uma empresa antes de continuar.");
    return;
  }

  setErro(""); // limpa erro
  localStorage.setItem("empresa", selecionada.nome);
  navigate("/auth");
};


const selecionarEmpresa = (index) => {
  setSelecionada({
    index: index,
    nome: lista[index],
  });
  setErro(""); 
};


  return (
    <div className="j">
      <div className="lado-esquerdo">
        <img className="foto" src={fotoMulher} alt="" />
      </div>

      <div className="lado-direito">
        <div className="titulo">
          <p className="detalheG">
            Olá! É um prazer receber você na
            <span className="detalheP"> Synk!</span>
          </p>
        </div>
        <div>
          <p className="subtitulo">
            Primeiro, selecione sua empresa para prosseguir com o seu plano.
          </p>
        </div>

        <div className="container-empresas">
          <div className="lista-empresas">
            {lista.map((empresa, index) => (
              <div
                key={index}
                className={`card-empresa ${
                  selecionada.index === index ? "ativa" : ""
                }`}
                onClick={() => selecionarEmpresa(index)}
              >
                <span>{empresa}</span>
                <span className="icone">
                  {selecionada.index === index ? "✔" : "+"}
                </span>
              </div>
            ))}
          </div>
        </div>

<div className="botao-div">
  <div className={`erro-validacao ${erro ? "ativo" : ""}`}>
    {erro}
  </div>

  <button 
    className="botao-detalhe" 
    onClick={confirmar_empresa}
  >
    Vamos lá!
  </button>
</div>

      </div>
    </div>
  );
}

export default FiltroEmpresas;