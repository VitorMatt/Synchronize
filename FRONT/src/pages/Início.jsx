import React from 'react'
import '../pages/CSS/inicio.css'
import logoInicio from '../assets/logoInicio.svg'
import iconSino from '../assets/iconSino.svg'
import iconCalen from '../assets/iconCalen.svg'
import iconUsu from '../assets/iconUsu.svg'
import seta from '../assets/seta.svg'
import lupa from '../assets/lupa.svg'

function Início() {
  return (
    <div className='container_maior'>
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
            <span className="label-text">Especialistas que se declaram como..</span>

            <div className="filters">
                <select className="filter white">
                    <option>LGBTQ+</option>
                </select>

                <select className="filter white">
                    <option>Etnia</option>
                </select>

                <select className="filter orange">
                    <option>Gênero</option>
                </select>
            </div>

            <div className="favorites">
                <span>Meus favoritos</span>
                <span className="heart">♡</span>
            </div>
        </div>
      </div>
      <div className='container2'>

      </div>
    </div>
  )
}

export default Início
