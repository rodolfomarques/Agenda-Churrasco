import bbqIcon from '../../images/icon_bbq.png'

const AdicionarChurrasco = ({churrasco}) => {

    let styleCard = {

        flex: '1 1',
        backgroundColor: "#F1F1F1",
        padding: '20px 40px',
        borderRadius: '2px',
        boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.06)',
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
    
    return (
        <article style={styleCard}>
            <div style={iconContainerStyle}>
                <img src={bbqIcon} alt='adicionar churrasco'/>
            </div>
            <h3 style={{margin: '5px 0px'}}>Adicionar Churrasco</h3> 
        </article>
    );
}


export default AdicionarChurrasco;