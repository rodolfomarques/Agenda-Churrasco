import { useContext } from 'react';
import { AuthContext } from '../model/contextos';
import { Outlet } from 'react-router-dom';
import Header from '../componentesLayout/Header';


const Layout = ({children}) => {

    const { autenticado } = useContext(AuthContext);

    let mainStyle = {
        width: '100%', 
        minHeight: '70vh',
        backgroundColor: autenticado? '#eee': '#FFD836',
        display: 'grid',
        gridTemplateColumns: '1fr minmax(280px, 600px) 1fr',
        gridTemplateRows: '1fr',
        justifyContent: 'space-around',
        gap: 2,
    }


    return (
        <section>
            <Header title='Agenda de Churras'/>
            <main style={mainStyle}>
                <div style={{gridColumn: '2/3'}}>
                    <Outlet />
                </div>
            </main>
        </section>
    )

}

export default Layout;