import { createBrowserRouter } from "react-router-dom";
import FiltroEmpresas from "../pages/FiltroEmpresas.jsx";
import Início from "../pages/Início.jsx";
import Cadastro_Login from "../pages/Cadastro_Login.jsx";


const router = createBrowserRouter([
  {
    path: '/filtroEmpresas',
    element: <FiltroEmpresas/>
  },
  {
    path: '/inicio',
    element: <Início/>
  },
  {
    path: '/auth',
    element: <Cadastro_Login />
  }
]);

export default router;