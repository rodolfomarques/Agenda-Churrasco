import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext }  from '../model/contextos';
import ItemParticipante from "./components/ItemParticipante";
import { format } from "date-fns";

//ícones
import peopleIcon from '../images/icon_people.png'
import moneyIcon from '../images/icon_money.png'


const DetalhesChurrasco = () => {

    const { dataState, dataDispatch } = useContext(DataContext);
    const [ churrasco, setChurrasco ] = useState({participantes: [], nome: '', valorTotal: 0,})
    const [ totalArrecadado, setTotalArrecadado ] = useState(0)
    const { id } = useParams();


    useEffect(() => { dataDispatch({type: 'selecionarChurrasco', payload: id}) }, [])
    useEffect(() => {
        if(dataState.churrascoSelecionado.id !== undefined) {
            setChurrasco(dataState.churrascoSelecionado)
        }
    }, [dataState])



    let style = {

        width: '100%',
        marginTop: '-40px',
        paddingBottom: '30px',
        backgroundColor: '#FFF',
        boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.06)',
        borderRadius: '2px',

    }

    let styleHeader = {

        backgroundColor: "#fff",
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between'

    }

    let paragraphStyle ={
        margin: 0,
        fontWeight: 600
    }

    return (
        <article style={style}>
            <section style={styleHeader}>
                <div>
                    <h3 style={{margin: '5px 0px', fontWeight: 600}}>{churrasco.data && format(new Date(churrasco.data), 'dd/MM' )}</h3>
                    <h2 style={{margin: '5px 0px', fontWeight: 600}}>{churrasco?.nome}</h2>
                </div>
                <section style={{fontWeight: 500, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                    <span style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                        <img src={peopleIcon} alt='participantes'/>
                        <p style={paragraphStyle}>{churrasco?.participantes.length}</p>
                    </span>
                    <span style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                        <img src={moneyIcon} alt='participantes'/>
                        <p style={{paragraphStyle}}>
                            {totalArrecadado}/{churrasco?.valorTotal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
                        </p>
                    </span>
                </section>
            </section>
            <ol style={{padding: '0px 35px'}}>
                {
                    churrasco.participantes.map((participante, i) => {
                        return (
                            <ItemParticipante participante={participante} setTotalArrecadado={setTotalArrecadado} index={i} />
                        )
                    })
                }
            </ol>
        </article>
    )

}


export default DetalhesChurrasco;