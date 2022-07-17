import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../model/contextos";
import Layout from "./Layout";
import Home from "../views/Home";
import Login from "../views/Login";
import DetalhesChurrasco from '../views/DetalhesChurrasco';
import CadastroChurasco from "../views/CadastroChurasco";

const Rotas = () => {

    const { autenticado } = useContext(AuthContext);
    
    return (
        <BrowserRouter>
            <Routes>
                {
                    !autenticado && (
                        <Route path="/" element={<Layout />} >
                            <Route index element={<Login />} />
                        </Route>
                    )
                }
                {
                    autenticado && (
                        <Route path="/" element={<Layout />} >
                            <Route index element={<Home />} />
                            <Route path="novochurrasco" element={<CadastroChurasco />} />
                            <Route path="churrasco/:id" element={<DetalhesChurrasco />} />
                        </Route>

                    )
                }
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;