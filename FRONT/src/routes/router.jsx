import { createBrowserRouter } from "react-router-dom";
import FiltroEmpresas from "../pages/FiltroEmpresas.jsx";


const router = createBrowserRouter([
  {
    path: '/filtroEmpresas',
    element: <FiltroEmpresas/>
  }
]);

export default router;