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
  const [selecionada, setSelecionada] = useState(null);

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
                  selecionada === index ? "ativa" : ""
                }`}
                onClick={() => setSelecionada(index)}
              >
                <span>{empresa}</span>
                <span className="icone">
                  {selecionada === index ? "✔" : "+"}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="botao-div">
          <button className="botao-detalhe">Vamos lá!</button>
        </div>
      </div>
    </div>
  );
}

export default FiltroEmpresas;
