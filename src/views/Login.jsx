import TextField from "./components/TextField";
import CustomButton from "./components/CustomButton";


const Login = () => {

    let sectionStyle = {

        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    }

    let formStyle = {

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'stretch',
        alignItems: 'center',

    }

    return (
        <section style={sectionStyle}>
            <form name='loginForm' id='loginForm' style={formStyle}>
                <TextField label='Login' type='text' inputProps={{placeholder: 'e-mail'}} />
                <TextField label='Senha' type='password' inputProps={{placeholder: 'senha'}} />
                <CustomButton label='Entrar' />
            </form>
        </section> 
    )

}


export default Login;