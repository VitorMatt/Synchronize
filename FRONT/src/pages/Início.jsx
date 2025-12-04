import { useState } from 'react'
import '../pages/CSS/inicio.css'
import logoInicio from '../assets/logoInicio.svg'
import iconSino from '../assets/iconSino.svg'
import iconCalen from '../assets/iconCalen.svg'
import iconUsu from '../assets/iconUsu.svg'
import seta from '../assets/seta.svg'
import lupa from '../assets/lupa.svg'
import coracao from '../assets/coracao.svg'
// import certinho from '../assets/certinho.svg'
import logomenor from '../assets/logomenor.svg'
import casinha from '/casinha.svg'
import camera from '/camera.svg'
import pessoas from '/pessoas.svg'
import codigobarras from '../assets/codigobarras.svg'
import ChatUI from '../components/ChatUI'
import estrelas from '../assets/estrelas.svg'

function Início() {

    const [filters, setFilters] = useState({
    etnia: "",
    genero: ""
    });

    const handleChange = (e) => {
    setFilters({
        ...filters,
        [e.target.name]: e.target.value
    });
    };

  return (
    <div className='container_maior'>
        <ChatUI />
      <div className='container1'>
        <div className='textinho'>
            <p>Para tornar a terapia e o apoio psicológico mais acessíveis, nós oferecemos 35 BRL de DESCONTO na sua primeira compra: JORNADA35</p>
        </div>
        <div className='container1_1'>
            <div className='divLogo'>
                <img src={logoInicio} alt="" />
            </div>
            <div className='divLogos'>
                <div className='divNs'>
                    <img src={iconUsu} alt="" className='img3'/>
                    <p>Olá Manassés!</p>
                    <img src={seta} alt="" className='seta'/>
                </div>
                <div className='divN'>
                    <p>Sessões</p>
                    <img src={iconCalen} alt="" className='img1'/>
                </div>
                <img src={iconSino} alt="" className='img2'/>
            </div>
        </div>
        <div className="container1_2">
            <div className="search-box">
                <img src={lupa} alt="" className='lupa'/>
                <input
                    type="text"
                    placeholder="Procure por nome, especialista, motivo..."
                />
            </div>

            <button className="btn-search">Buscar</button>
        </div>
        <div className="container1_3">
            <div className='span'>
                <span className="label-text">Especialistas que se declaram como..</span>
            </div>

            <div className="filters">
                <select className="filterinfuncional">
                    <option>LGBTQ+</option>
                </select>

                <select
                    name="etnia"
                    value={filters.etnia}
                    onChange={handleChange}
                    className={`filter ${filters.etnia ? "orange" : "white"}`}
                >
                    <option value="">Etnia</option>
                    <option value="Branca">Branca</option>
                    <option value="Parda">Parda</option>
                    <option value="Preta">Preta</option>
                </select>

                <select
                    name="genero"
                    value={filters.genero}
                    onChange={handleChange}
                    className={`filter ${filters.genero ? "orange" : "white"}`}
                >
                    <option value="">Gênero</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Outro">Outro</option>
                </select>
            </div>

            <div className="favorites">
                <span>Meus favoritos</span>
                <img src={coracao} alt="" />
            </div>
        </div>
      </div>
      <div className='container2'>
        <div className='container2_1'>
            <p>Encontre o seu psicólogo</p>
        </div>
        <div className='container2_2'>
            <div className="divCards">
                {/* CARD 1 – MENU */}
                <div className="card1">
                    <div className="menuItem ativo">
                        <img src={casinha} alt="" />
                        <p>Início</p>
                    </div>

                    <div className="menuItem">
                        <img src={camera} alt="" />
                        <p>Chamada de vídeo</p>
                    </div>

                    <div className="menuItem">
                        <img src={pessoas} alt="" />
                        <p>Contatos</p>
                    </div>
                </div>

                {/* Textinho verde */}
                {/* <p className="status">Carteirinha atualizada! <img src={certinho} alt="" /></p> */}

                {/* CARD 2 – CARTEIRINHA */}
                <div className="card2">
                    <div className="topIcon">
                        <img src={logomenor} alt="" className='logomenor'/>
                        <img src={iconUsu} alt="" />
                        <h3 className="nome">Manassés Marcelino</h3>
                    </div>

                    <div className="credencialBox">
                        <p className="credencialTitulo">Credencial Plena</p>
                        <p className="credencialTipo">Trabalhador Comercio</p>
                    </div>

                    <div className='divtextos'>
                        <p className="estado">Santa Catarina</p>
                        <p className="codigo">0666–092754–0</p>
                    </div>

                    <div className="codigoBarra">
                        <img src={codigobarras} alt="" />
                    </div>
                </div>
            </div>
            <div className='divProfissionais'>
                <div className='divprof'>
                    <div className='divinformacoes'>
                        <div className='nomezinhos'>
                            <img src={iconUsu} alt="" />
                            <div className='nomestre'>
                                <p>Manassés Marcelino</p>
                                <img src={estrelas} alt="" />
                            </div>
                        </div>
                        <div className='crpfav'>
                            <p>CRP 08/29038</p>
                            <button>Favoritar <img src={coracao} alt="" /></button>
                        </div>
                        <div className='sobre'>
                            <p className='sobretitulo'>Sobre mim</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Totam earum adipisci cupiditate, alias modi nam illo assumenda, 
                                ipsa facilis quis, dolorum magni consequatur? Exercitationem, dolores! 
                                Necessitatibus beatae eveniet quia reiciendis?</p>
                        </div>
                        <div className='infofic'>
                            <div className='divinfo1'>
                                <p className='titulomaior'>759 Consultas</p>
                                <p>Realizadas</p>
                            </div>
                            <div className='divinfo2'>
                                <p className='titulomaior'>5 anos, e 3 meses</p>
                                <p>Na synchronize</p>
                            </div>
                        </div>
                    </div>
                    <div className='divcalendario'>
                        a
                    </div>
                </div>
                <div className='divprof'>
                    <div className='divinformacoes'>
                        <div className='nomezinhos'>
                            <img src={iconUsu} alt="" />
                            <div className='nomestre'>
                                <p>Manassés Marcelino</p>
                                <img src={estrelas} alt="" />
                            </div>
                        </div>
                        <div className='crpfav'>
                            <p>CRP 08/29038</p>
                            <button>Favoritar <img src={coracao} alt="" /></button>
                        </div>
                        <div className='sobre'>
                            <p className='sobretitulo'>Sobre mim</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Totam earum adipisci cupiditate, alias modi nam illo assumenda, 
                                ipsa facilis quis, dolorum magni consequatur? Exercitationem, dolores! 
                                Necessitatibus beatae eveniet quia reiciendis?</p>
                        </div>
                        <div className='infofic'>
                            <div className='divinfo1'>
                                <p className='titulomaior'>759 Consultas</p>
                                <p>Realizadas</p>
                            </div>
                            <div className='divinfo2'>
                                <p className='titulomaior'>5 anos, e 3 meses</p>
                                <p>Na synchronize</p>
                            </div>
                        </div>
                    </div>
                    <div className='divcalendario'>
                        a
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Início
