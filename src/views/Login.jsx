import { useContext } from 'react';
import { AuthContext } from '../model/contextos';
import Axios from '../API/endpoints';
import TextField from "./components/TextField";
import CustomButton from "./components/CustomButton";

const axios = new Axios();

const Login = () => {

    const { authDispatch } = useContext(AuthContext);

    let sectionStyle = {

        width: '100%',
        height: '100%',
        marginTop: '-60px',
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

    const onSubmitHandler = (e) => {
        
        e.preventDefault();
        
        let form = document.forms.loginForm;

        let login = form.login.value;
        let senha = form.senha.value;

        axios.post('/login', {login, senha})
        .then(resp => { authDispatch({type: 'inserirDadosUsuario', payload: resp.data}) })


    }

    return (
        <section style={sectionStyle}>
            <form name='loginForm' id='loginForm' style={formStyle} onSubmit={(e) => {onSubmitHandler(e)}}>
                <TextField label='Login' type='text' inputProps={{placeholder: 'e-mail', id:'login'}} />
                <TextField label='Senha' type='password' inputProps={{placeholder: 'senha', id:'senha'}} />
                <CustomButton label='Entrar' />
            </form>
        </section> 
    )

}


export default Login;