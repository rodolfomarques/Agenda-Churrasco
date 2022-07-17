

const TextField = (props) => {

    return (
        <div style={{
            width: '200px',
            marginBottom: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItens: 'flex-start',
            justifyContent: 'flex-start',
        }}>
            <label style={{fontWeight: 600, marginBottom: '10px'}}>{props.label}</label>
            <input 
                style={{
                    fontSize: '16px',
                    fontStyle: 'italic',
                    padding: '10px',
                    border: 'unset',
                    borderRadius: '2px',
                    boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.06)',
                }} 
                type={props.type} 
                {...props.inputProps}
            />
        </div>
    )

}

export default TextField