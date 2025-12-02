import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { useState } from "react";
import PLogin from "../components/PLogin";
import PCadastro from "../components/PCadastro";
import "./Cadastro_Login.css";

function Cadastro_Login() {
  const imagens = [
    "img_login.svg",
    "img_login_dois.svg",
    "img_login_tres.svg",
    "img_login_quatro.svg",
    "img_login_cinco.svg",
    "img_login_seis.svg",
    "img_login_sete.svg",
    "img_login.svg",
    "img_login_dois.svg",
    "img_login_tres.svg",
    "img_login_quatro.svg",
    "img_login_cinco.svg",
    "img_login_seis.svg",
    "img_login_sete.svg",
    "img_login.svg",
    "img_login_dois.svg",
    "img_login_tres.svg",
    "img_login_quatro.svg",
    "img_login_cinco.svg",
    "img_login_seis.svg",
    "img_login_sete.svg",
  ];

  const [abaAtiva, setAbaAtiva] = useState("cadastro");

  return (
    <div className="cadastro-login-container">
      <div className="cadastro-login-flex">
        <div className="cadastro-login-slider">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            rewind={true}
            slidesPerView={1}
            speed={800}
            className="cadastro-login-slider"
          >
            {imagens.map((src, i) => (
              <SwiperSlide className="cadastro-login-slider-slide" key={i}>
                <img
                  src={src}
                  alt={`Slide ${i}`}
                  className="cadastro-login-slider-img"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="cadastro-login-content">
          <div className="cadastro-login-tabs-container">
            <div className="cadastro-login-tabs">
              <button
                onClick={() => {
                  setAbaAtiva("cadastro");
                }}
                className={`cadastro-login-tab-button ${
                  abaAtiva === "cadastro" ? "active" : "inactive"
                }`}
              >
                Cadastro
              </button>

              <button
                onClick={() => {
                  setAbaAtiva("login");
                }}
                className={`cadastro-login-tab-button ${
                  abaAtiva === "login" ? "active" : "inactive"
                }`}
              >
                Login
              </button>
            </div>
          </div>
          <div className="cadastro-login-components">
            {abaAtiva === "login" && <PLogin />}
            {abaAtiva === "cadastro" && <PCadastro />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro_Login;