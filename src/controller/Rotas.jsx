import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../views/Home";
import Login from "../views/Login";
import DetalhesChurrasco from '../views/DetalhesChurrasco';

const Rotas = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<DetalhesChurrasco />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;