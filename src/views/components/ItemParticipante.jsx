import { useState } from 'react';

const ItemParticipante = () => {

    const [ hover, setHover ] = useState(false);
    const [ checked, setChecked ] = useState(false)

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
    const onClick = () => { setChecked(prevState =>  !prevState) }

    return (
        <>
            <li 
                style={itemStyle}
                onMouseEnter={onMouseHover}
                onMouseLeave={onMouseLeaves}
                onClick={onClick}
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
                    onClick={onClick}
                >
                    <input style={checkStyle} type='checkbox' checked={checked} onChange={() => {}} />
                    <span style={customCheckbox} onClick={onClick}></span>
                    <p style={paragraphStyle} onClick={onClick}>Pedro</p>
                </label>
                <p style={{...paragraphStyle, textDecoration: checked? 'line-through': 'unset',}}>R$ 20,00</p>
            </li>
            <hr style={{margin: 0, border: '1px solid #E5C23155', }} />
        </>
    )

}

export default ItemParticipante;