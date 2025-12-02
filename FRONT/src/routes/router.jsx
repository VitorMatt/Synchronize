import { createBrowserRouter } from "react-router-dom";
import FiltroEmpresas from "../pages/FiltroEmpresas.jsx";
import Início from "../pages/Início.jsx";


const router = createBrowserRouter([
  {
    path: '/filtroEmpresas',
    element: <FiltroEmpresas/>
  },
  {
    path: '/inicio',
    element: <Início/>
  }
]);

export default router;