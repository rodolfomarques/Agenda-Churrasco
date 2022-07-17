

const CustomButton = (props) => {

    let style = {
        padding: '10px 20px',
        backgroundColor: '#000',
        borderRadius: '18px',
        color: '#FFF',
        fontWeight: 600,
        fontSize: '16px',
        width: '100%'
    }

    return (
        <button style={style} {...props.buttonProps}>
            {props.label}
        </button>
    )



}

export default CustomButton;