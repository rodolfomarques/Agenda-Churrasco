import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../../model/contextos';

const ItemParticipante = ({idChurrasco, participante, index, habilitarDeletar}) => {

    const [ hover, setHover ] = useState(false);
    const { dataDispatch, gerenciarContribuicao, removerParticipante } = useContext(DataContext);

    useEffect(() => {
        console.log();
    }, [])

   
    let itemStyle = {

        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',

    }

    let paragraphStyle = {

        margin: '5px 0px',
        fontWeight: 700,
        fontSize: '14px',
    }

    let checkStyle = {
        
        position: 'absolute',
        opacity: 0,
        cursor: 'pointer',
        height: 0,
        width: 0,
    }

    let customCheckbox = {
        height: '10px',
        width: '10px',
        backgroundColor: (hover || participante.pagamentoRealizado)? '#FFD836' :'#fff',
        borderRadius: '50%',
        border: '2px solid #998220',

    }

    const onMouseHover = () => { setHover(true) }
    const onMouseLeaves = () => { setHover(false) }
    const onClick = () => {
        gerenciarContribuicao(idChurrasco, participante.id)
    }

    return (
        <>
            <li 
                style={itemStyle}
                onMouseEnter={onMouseHover}
                onMouseLeave={onMouseLeaves}
            >
                <label 
                    style={
                        {
                            display: 'flex', 
                            gap: '10px', 
                            alignItems: 'center', 
                            '&:hover input ~ span': {backgroundColor:'#ccc',}
                        }
                    }
                >
                    <input id={`participante-${index}`} style={checkStyle} type='checkbox' checked={participante.pagamentoRealizado} />
                    <span style={customCheckbox}  onClick={onClick}></span>
                    <p style={paragraphStyle} 
                        onClick={onClick}
                    >{participante.nome}</p>
                </label>
                <div style={{display: 'flex', gap: 10}}>
                    <p style={{...paragraphStyle, textDecoration: participante.pagamentoRealizado? 'line-through': 'unset',}}>{participante.contribuicao.toLocaleString(`pt-br`, {style:'currency', currency:'BRL'})}</p>
                    {habilitarDeletar && <button style={{color: '#fff', border: 'unset', borderRadius: '5px', backgroundColor: '#a02e2e'}} onClick={() => removerParticipante(idChurrasco, participante.id)}>remover</button>}
                </div>
            </li>
            <hr style={{margin: 0, border: '1px solid #E5C23155', }} />
        </>
    )

}

export default ItemParticipante;