import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../views/Home";

const Rotas = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;