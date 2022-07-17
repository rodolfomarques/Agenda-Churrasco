import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from '../componentesLayout/Header';


const Layout = ({children}) => {

    const [ abrir, setAbrir ] = useState(false);

    let mainStyle = {
        width: '100%', 
        minHeight: '70vh',
        backgroundColor: '#eee',
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