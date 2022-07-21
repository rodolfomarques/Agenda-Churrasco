function mascaraMoeda(event) {
    const onlyDigits = event.target.value
      .split("")
      .filter(s => /\d/.test(s))
      .join("")
      .padStart(3, "0")
    const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2)
    event.target.value = maskCurrency(digitsFloat)
  }
  
  function maskCurrency(valor, locale = 'pt-BR', currency = 'BRL') {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency
    }).format(valor)
  }

const TextField = (props) => {

    return (
        <div style={{
            marginBottom: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItens: 'flex-start',
            justifyContent: 'flex-start',
            ...props.style
        }}>
            <label style={{fontWeight: 600, marginBottom: '10px'}}>{props.label}</label>
            {
                props.type === 'valor' && 
                <input 
                    required
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
                    onInput={e => mascaraMoeda(e)}
                />
            
            }
            {
                props.type !== 'valor' && 
                <input 
                    required
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
            }
        </div>
    )

}

export default TextField