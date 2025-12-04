import { createBrowserRouter } from "react-router-dom";
import FiltroEmpresas from "../pages/FiltroEmpresas.jsx";
import Início from "../pages/Início.jsx";
import Cadastro_Login from "../pages/Cadastro_Login.jsx";
import PerfilColaborador from "../pages/PerfilColaborador.jsx";
import ChatUI from "../components/ChatUI.jsx";


const router = createBrowserRouter([
  {
    path: '/',
    element: <FiltroEmpresas/>
  },
  {
    path: '/profissionais',
    element: <Início/>
  },
  {
    path: '/auth',
    element: <Cadastro_Login />
  },
  {
    path: '/perfil',
    element: <PerfilColaborador/>
  },
  {
    path: '/chat',
    element: <ChatUI />
  }
]);

export default router;