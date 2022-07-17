import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from "date-fns";
import peopleIcon from '../../images/icon_people.png'
import moneyIcon from '../../images/icon_money.png'

const CardProduto = ({churrasco}) => {

    const navigate = useNavigate();
    const [ hover, setHover ] = useState(false);


    let styleCard = {

        flex: '1 1',
        backgroundColor: "#fff",
        padding: '20px 40px',
        borderRadius: '2px',
        boxShadow: hover? '1px 1px 16px rgba(0, 0, 0, 0.3)':'0px 0px 16px rgba(0, 0, 0, 0.06)',
        cursor: hover? 'pointer': `default`,
        transition: `box-shadow .4s`,

    }

    const onMouseHover = () => { setHover(true) };
    const onMouseLeaves = () => { setHover(false) };

    return (
        <article style={styleCard} onClick={() => {navigate(`/churrasco/${churrasco.id}`)}} onMouseEnter={onMouseHover} onMouseLeave={onMouseLeaves}>
            <h2 style={{margin: '5px 0px'}}>{churrasco.data && format(new Date(churrasco.data), 'dd/MM' )}</h2>
            <h3 style={{margin: '5px 0px'}}>{churrasco.nome}</h3>
            <section style={{display: 'flex', justifyContent: 'space-between', fontWeight: 500, marginTop: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                    <img src={peopleIcon} alt='participantes'/>
                    <p>{churrasco.participantes.length}</p>
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                    <img src={moneyIcon} alt='participantes'/>
                    <p>{churrasco.valorTotal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>
                </span>
            </section>
        </article>
    );
}


export default CardProduto;