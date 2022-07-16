import { useContext } from "react";
import { DataContext }  from '../model/contextos';
import { Box } from '@mui/material';
import CardProduto from "./components/CardProduto";

const Home = () => {

    const { dataState } = useContext(DataContext);

    return (
        <Box component='section' sx={{width: '100%'}}>
            <Box component='section' sx={{display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'space-between'}}>
                {
                    dataState.produtos.map((produto, i) => {
                        return (
                            <CardProduto produto={produto} key={`produto-${i}`} />
                        )
                    })
                }
            </Box>
        </Box>
    )

}

export default Home;