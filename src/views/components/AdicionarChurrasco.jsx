import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bbqIcon from '../../images/icon_bbq.png'

const AdicionarChurrasco = ({}) => {

    const navigate = useNavigate();
    const [ hover, setHover ] = useState(false);

    let styleCard = {

        flex: '1 1',
        backgroundColor: "#F1F1F1",
        padding: '20px 40px',
        borderRadius: '2px',
        boxShadow: hover? '1px 1px 16px rgba(0, 0, 0, 0.3)':'0px 0px 16px rgba(0, 0, 0, 0.06)',
        cursor: hover? 'pointer': `default`,
        transition: `box-shadow .4s`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'

    }

    let iconContainerStyle = { 

        width: '90px', 
        height: '90px', 
        borderRadius: '50%', 
        backgroundColor: '#FFD836',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    }

    const onMouseHover = () => { setHover(true) };
    const onMouseLeaves = () => { setHover(false) };
    
    return (
        <article style={styleCard} onMouseEnter={onMouseHover} onMouseLeave={onMouseLeaves} onClick={() => {navigate(`/novochurrasco`)}}>
            <div style={iconContainerStyle}>
                <img src={bbqIcon} alt='adicionar churrasco'/>
            </div>
            <h3 style={{margin: '5px 0px'}}>Adicionar Churrasco</h3> 
        </article>
    );
}


export default AdicionarChurrasco;