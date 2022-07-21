import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../model/contextos';
import bgPattern from '../images/bg-pattern.png'

const Header = ({title}) => {

    const { autenticado, authState } = useContext(AuthContext);

    let headerStyle = {
        minHeight: '30vh',
        backgroundColor: '#FFD836',
        backgroundImage: `url(${bgPattern})`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }

    let h1Style = {
        fontSize: '32px',
        fontWeight: 800,
    }
    
    return (
        <header style={headerStyle}>
            <Link to='/' style={{color: '#000'}}>
                <h1 style={h1Style}>{title}</h1>
            </Link>
        </header>
    )
}

export default Header;