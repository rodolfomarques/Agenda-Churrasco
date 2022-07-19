import { useContext } from "react";
import { DataContext }  from '../model/contextos';
import { useNavigate } from 'react-router-dom';
import TextField from "./components/TextField";
import CustomButton from "./components/CustomButton";

const CadastroChurasco = () => {

    const { adicionarChurrasco } = useContext(DataContext);
    const navigate = useNavigate()

    let style = {

        width: '100%',
        marginTop: '-40px',
        padding: '30px 50px',
        backgroundColor: '#eeecec',
        boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.06)',
        borderRadius: '2px',

    }

    const onSubmit = (e) => {

        e.preventDefault();

        let form = document.forms.cadastroChurrasco;
        let nome = form.nome.value;
        let descricao = form.descricao.value;
        let data = form.data.value;
        let valorCarnes = +form.valorCarnes.value;
        let valorBebidas = +form.valorBebidas.value;

        adicionarChurrasco({nome, descricao, data, valorCarnes, valorBebidas})
        navigate(`/`);

    }


    return (
        <article style={style}>
            <h2 style={{margin: '0px 0px 20px 0px', fontWeight: 600, textAlign:'center'}}>Cadastrar Churrasco</h2>
            <form nome='cadastroChurrasco' id='cadastroChurrasco' style={{display: 'flex', flexDirection: 'column'}} onSubmit={(e) => {onSubmit(e)}} >
                <TextField label='Nome' type="text" inputProps={{id: 'nome'}}  />
                <TextField label='Descrição' type="text" inputProps={{id: 'descricao'}}/>
                <TextField label='Data' type='date' inputProps={{id: 'data'}}/>
                <TextField label='Valor Carnes' type='number' inputProps={{id:'valorCarnes', min: 1, step:.01 }} />
                <TextField label='Valor Bebidas' type='number' inputProps={{id:'valorBebidas', min: 1, step:.01 }} />
                <CustomButton label='Cadastrar' />
            </form>
        </article>
    )

}


export default CadastroChurasco;