import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from '../componentesLayout/Header';


const Layout = ({children}) => {

    const [ abrir, setAbrir ] = useState(false);


    return (
        <Box>
            <Header open={abrir} />
            <Box component="main" sx={{ p: 3, backgroundColor: '#eee', width: '100%', minHeight: '100vh' }}>
                <Outlet />
            </Box>
        </Box>
    )

}

export default Layout;