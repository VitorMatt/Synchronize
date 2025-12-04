import { useState } from 'react'
import '../pages/CSS/inicio.css'
import logoInicio from '../assets/logoInicio.svg'
import iconSino from '../assets/iconSino.svg'
import iconCalen from '../assets/iconCalen.svg'
import iconUsu from '../assets/iconUsu.svg'
import seta from '../assets/seta.svg'
import lupa from '../assets/lupa.svg'
import coracao from '../assets/coracao.svg'
import certinho from '../assets/certinho.svg'
import logomenor from '../assets/logomenor.svg'
import casinha from '/casinha.svg'
import camera from '/camera.svg'
import pessoas from '/pessoas.svg'
import codigobarras from '../assets/codigobarras.svg'
import ChatUI from '../components/ChatUI'
import estrelas from '../assets/estrelas.svg'
import { Link } from 'react-router-dom'
import setaesquerda from '../assets/setaesquerda.svg'
import setadireita from '../assets/setadireita.svg'
import checklaranja from '../assets/checklaranja.svg'

function Início() {

    const [filters, setFilters] = useState({
    genero: ""
    });

    const handleChange = (e) => {
    setFilters({
        ...filters,
        [e.target.name]: e.target.value
    });
    };

    const [selecionado, setSelecionado] = useState(null);
    const [showModalSucesso, setShowModalSucesso] = useState(false); // Novo estado
    const [showModal, setShowModal] = useState(false); // Estado para controlar o modal

    const horarios = ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30"];

    function formatarData(d) {
    const dia = d.getDate();
    const mes = d
        .toLocaleDateString("pt-BR", { month: "short" })
        .replace(".", "");

    return `${dia} ${mes}`;
    }

    // Função para formatar data para o modal (DD/MM/AA)
    const formatarDataParaModal = (dataString) => {
      if (!dataString) return '';
      
      const [dia, mesAbreviado] = dataString.split(' ');
      
      const meses = {
        'jan': '01', 'fev': '02', 'mar': '03', 'abr': '04',
        'mai': '05', 'jun': '06', 'jul': '07', 'ago': '08',
        'set': '09', 'out': '10', 'nov': '11', 'dez': '12'
      };
      
      const mesNumero = meses[mesAbreviado.toLowerCase()] || '01';
      const ano = new Date().getFullYear().toString().slice(-2);
      const diaFormatado = dia.padStart(2, '0');
      
      return `${diaFormatado}/${mesNumero}/${ano}`;
    };

    const nomes = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];

    const hoje = new Date();

    const dias = [...Array(5)].map((_, i) => {
    const d = new Date(hoje);
    d.setDate(d.getDate() + i);

    const nome = nomes[d.getDay()];
    const data = formatarData(d);

    const disponiveis =
        nome === "sáb" || nome === "dom" ? [] : [...horarios];

    return { nome, data, disponiveis };
    });

    // No seu componente React:
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleDays = 3; // Fixo em 3 colunas

    // Funções para navegação - atualizadas para 3 colunas
    const handlePrev = () => {
    if (currentIndex > 0) {
        setCurrentIndex(Math.max(0, currentIndex - 1));
    }
    };

    const handleNext = () => {
    if (currentIndex < dias.length - 3) {
        setCurrentIndex(currentIndex + 1);
    }
    };

    // Função para agendar
    const handleAgendar = () => {
      if (selecionado) {
        setShowModal(true);
      }
    };

    // Função para confirmar agendamento
const handleConfirmarAgendamento = () => {
  // Aqui você pode adicionar a lógica para enviar para o backend
  console.log('Agendamento confirmado:', selecionado);
  
  // Fecha o modal de confirmação
  setShowModal(false);
  
  // Mostra o modal de sucesso
  setShowModalSucesso(true);
  
  // Limpa a seleção (opcional)
  setSelecionado(null);
  
  // Aqui você pode adicionar chamada API
  // exemplo: await api.agendarConsulta(selecionado);
};

// Função para fechar o modal de sucesso
const handleFecharModalSucesso = () => {
  setShowModalSucesso(false);
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
                <Link to="/perfil" className='divNs'>
                    <img src={iconUsu} alt="" className='img3'/>
                    <p>Olá Manassés!</p>
                    <img src={seta} alt="" className='seta'/>
                </Link>
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
                <p className="status">Carteirinha atualizada! <img src={certinho} alt="" /></p>

                {/* CARD 2 – CARTEIRINHA */}
                <div className="card2">
                    <Link to="/Perfil" className="topIcon">
                        <img src={logomenor} alt="" className='logomenor'/>
                        <img src={iconUsu} alt="" />
                        <h3 className="nome">Manassés Marcelino</h3>
                    </Link>

                    <Link to="/Perfil" className="credencialBox">
                        <p className="credencialTitulo">Credencial Plena</p>
                        <p className="credencialTipo">Trabalhador Comercio</p>
                    </Link>

                    <Link to="/Perfil" className='divtextos'>
                        <p className="estado">Santa Catarina</p>
                        <p className="codigo">0666–092754–0</p>
                    </Link>

                    <Link to="/Perfil" className="codigoBarra">
                        <img src={codigobarras} alt="" />
                    </Link>
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
                    <div className="calendar-wrapper">
                        
                        {/* Contêiner principal com setas ao lado dos dias */}
                        <div className="calendar-container">
                        
                        {/* Seta esquerda */}
                        <button 
                            className="calendar-nav-arrow left"
                            onClick={handlePrev} 
                            disabled={currentIndex === 0}
                        >
                            <img src={setaesquerda} alt="anterior" />
                        </button>

                        {/* Contêiner dos dias visíveis - APENAS 3 COLUNAS */}
                        <div className="calendar-days-container">
                            {dias
                            .slice(currentIndex, currentIndex + 3) // Sempre mostra 3 dias
                            .map((dia, index) => (
                                <div key={index} className="coluna-dia">
                                <p className="cal-dia">{dia.nome}</p>
                                <p className="cal-data">{dia.data}</p>

                                <div className="horarios-coluna">
                                    {horarios.map((h, i) => {
                                    const disponivel = dia.disponiveis.includes(h);
                                    return (
                                        <div
                                        key={i}
                                        className={`hora-item ${disponivel ? "livre" : "ocupado"} ${
                                            selecionado?.dia === dia.data && selecionado?.hora === h
                                            ? "selecionado"
                                            : ""
                                        }`}
                                        onClick={() =>
                                            disponivel && setSelecionado({ dia: dia.data, hora: h })
                                        }
                                        >
                                        {h}
                                        </div>
                                    );
                                    })}
                                </div>
                                </div>
                            ))}
                        </div>

                        {/* Seta direita */}
                        <button 
                            className="calendar-nav-arrow right"
                            onClick={handleNext} 
                            disabled={currentIndex >= dias.length - 3} // Ajuste para 3 colunas
                        >
                            <img src={setadireita} alt="proximo" />
                        </button>
                        
                        </div>

                        <button
                          className={`btn-agendar ${selecionado ? "ativado" : ""}`}
                          disabled={!selecionado}
                          onClick={handleAgendar}
                        >
                          Agendar
                        </button>
                    </div>
                 </div>
                </div>
            </div>
        </div>
      </div>

      {/* MODAL DE CONFIRMAÇÃO DE AGENDAMENTO */}
{showModal && selecionado && (
  <div className="modal-overlay" onClick={() => setShowModal(false)}>
    <div className="modal-container" onClick={(e) => e.stopPropagation()}>
      
      <div className="modal-header">
        <h2 className="modal-title">Resumo</h2>
        <div className='divm'>
            <p className="modal-subtitle">Consultas</p>
            <p className="modal-subtitle2">Sem custo</p>
        </div>
      </div>

      <hr className="modal-divider" />

        <span className="modal-badge">
          Sem custo — convênio válido <img src={certinho} alt="" />
        </span>

      <hr className="modal-divider2" />

      <div className="modal-body">
        <div className='divm'>
            <h3 className="modal-section-title">Agendamentos</h3>
            <p className="consultas-info">1 de 1</p>
        </div>
        
        <div className="consulta-item">
          <div className="consulta-avatar">
            <img src={iconUsu} alt="" />
          </div>
          <div className="consulta-details">
            <h4 className="consulta-name">Beatriz Guimarães</h4>
            <p className="consulta-crp">CRP 08/29038</p>
            <p className="consulta-type">Atendimento Online</p>
          </div>
        </div>

        {/* LAYOUT SIMPLES COM DATA E HORÁRIO EM LINHAS */}
        <div className="linha-detalhe">
          <div className="linha">
            <span className="label">Data</span>
            <span className="valor">{formatarDataParaModal(selecionado.dia)}</span>
          </div>
          <div className="linha">
            <span className="label">Horário</span>
            <span className="valor">{selecionado.hora}</span>
          </div>
          
          {/* BOTÕES DE AÇÃO - CORRIGIDOS */}
          <button 
            className="confirm-btn"
            onClick={handleConfirmarAgendamento}
          >
            Confirmar
          </button>
          <button 
            className="cancel-btn" 
            onClick={() => setShowModal(false)}
          >
            Cancelar
          </button>
        </div>

      </div>

    </div>
  </div>
)}

{/* MODAL DE SUCESSO - CONSULTA MARCADA */}
{showModalSucesso && (
  <div className="modal-sucesso-overlay" onClick={handleFecharModalSucesso}>
    <div className="modal-sucesso-container" onClick={(e) => e.stopPropagation()}>
      
      {/* CABEÇALHO DO MODAL */}
      <div className="modal-sucesso-header">
        {/* Ícone de sucesso */}
        <div className="modal-sucesso-icon">
            <img src={checklaranja} alt="" />
        </div>
        
        <h2 className="modal-sucesso-title">Consulta marcada!</h2>
        
        <p className="modal-sucesso-mensagem">
          Tudo certo! Sua consulta foi agendada com sucesso.
        </p>
      </div>

      {/* RODAPÉ DO MODAL */}
      <div className="modal-sucesso-footer">
        <button 
          className="btn-sucesso"
          onClick={handleFecharModalSucesso}
        >
          OK
        </button>
      </div>

    </div>
  </div>
)}

    </div>
  )
}

export default Início