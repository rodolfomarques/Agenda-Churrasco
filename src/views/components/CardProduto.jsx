import * as React from 'react';
import peopleIcon from '../../images/icon_people.png'
import moneyIcon from '../../images/icon_money.png'

const CardProduto = ({churrasco}) => {

    let styleCard = {

        flex: '1 1',
        backgroundColor: "#fff",
        padding: '20px 40px',
        borderRadius: '2px',
        boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.06)',

    }
    
    return (
        <article style={styleCard}>
            <h2 style={{margin: '5px 0px'}}>01/02</h2>
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