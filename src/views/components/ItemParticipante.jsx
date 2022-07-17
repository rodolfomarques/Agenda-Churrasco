import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../../model/contextos';

const ItemParticipante = ({participante, setTotalArrecadado, index}) => {

    const [ hover, setHover ] = useState(false);
    const [ checked, setChecked ] = useState(false)
    const { dataDispatch } = useContext(DataContext);


    // useEffect(() => {

    //     if(participante.pagamentoRealizado) { 
    //         setChecked(true);
    //         // setTotalArrecadado(prevState => prevState + participante.contribuicao);
    //     } 
    //     else { setChecked(false) }

    // }, [participante])

    useEffect(() => {

        dataDispatch({type: 'avaliarContribuicao', payload: {id: participante.id, status: checked}})

    },[checked])

   
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
        backgroundColor: (hover || checked)? '#FFD836' :'#fff',
        borderRadius: '50%',
        border: '2px solid #998220',

    }

    const onMouseHover = () => { setHover(true) }
    const onMouseLeaves = () => { setHover(false) }
    const onClick = () => {
        setChecked(prevState => !prevState);
        dataDispatch({})
    }

    const handleCollaboration = (e) => {
        console.log(e.target.checked);
        if(e.target.checked) {
            setTotalArrecadado(prevState => prevState + participante.contribuicao)
        } else {
            setTotalArrecadado(prevState => prevState - participante.contribuicao)
        }
    }

    return (
        <>
            <li 
                style={itemStyle}
                onMouseEnter={onMouseHover}
                onMouseLeave={onMouseLeaves}
                // onClick={onClick}
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
                    // onClick={onClick}
                >
                    <input id={`participante-${index}`} style={checkStyle} type='checkbox' checked={participante.pagamentoRealizado} onChange={(e) => {handleCollaboration(e)}} />
                    <span style={customCheckbox}  onClick={onClick}></span>
                    <p style={paragraphStyle} 
                        // onClick={onClick}
                    >{participante.nome}</p>
                </label>
                <p style={{...paragraphStyle, textDecoration: checked? 'line-through': 'unset',}}>{participante.contribuicao.toLocaleString(`pt-br`, {style:'currency', currency:'BRL'})}</p>
            </li>
            <hr style={{margin: 0, border: '1px solid #E5C23155', }} />
        </>
    )

}

export default ItemParticipante;