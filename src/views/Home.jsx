import { useContext, useEffect } from "react";
import { DataContext }  from '../model/contextos';
import CardProduto from "./components/CardProduto";
import AdicionarChurrasco from "./components/AdicionarChurrasco";

const Home = () => {

    const { dataState } = useContext(DataContext);

    useEffect(() => {
        console.log(dataState);
    }, [])

    let homeStyle = {

        width: '100%',
        marginTop: '-40px',
        display: 'flex', 
        gap: '20px', 
        flexWrap: 'wrap', 
        justifyContent: 'space-between',

    }

    return (
        <section style={homeStyle}>
            {
                dataState.churrascos.map((churrasco, i) => {
                    return (
                        <CardProduto churrasco={churrasco} key={`churrasco-${i}`} />
                    )
                })
            }
            <AdicionarChurrasco />
    </section>
    )

}

export default Home;