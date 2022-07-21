import { useContext, useState, useEffect } from "react";
import { DataContext }  from '../model/contextos';
import { useNavigate, useParams } from 'react-router-dom';
import TextField from "./components/TextField";
import CustomButton from "./components/CustomButton";
import InputMask from "react-input-mask";

const CadastroParticipante = () => {

    const [ textoIncentivo, setTextoIncentivo ] = useState('Insira um valor de contribuição.')
    const [ valorSugerido, setValorSugerido ] = useState(0)
    const [ sugeridoBebidas, setSugeridoBebidas ] = useState(0)
    const { dataState, adicionarParticipante } = useContext(DataContext);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        let churrasco = dataState.churrascoSelecionado;
        let valorCarnes = Number(churrasco.valorCarnes);
        let valorBebidas = Number(churrasco.valorBebidas)
        console.log(churrasco);
        setValorSugerido(valorCarnes/10);
        setSugeridoBebidas((valorCarnes + valorBebidas)/10)

        
    }, [dataState.churrascoSelecionado])

    let style = {

        width: '100%',
        marginTop: '-40px',
        padding: '30px 50px',
        backgroundColor: '#eeecec',
        boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.06)',
        borderRadius: '2px',

    }

    let textStyle = {

        textAlign: 'center',
    }

    const incentivarParticipante = (valor) => {

        let valorTotal = dataState.churrascoSelecionado.valorTotal;
        if(valor < valorSugerido ) { setTextoIncentivo('🥺 Tá sem grana? Quer que a gente quebre essa para você?')}
        if(valorSugerido <= valor && valor < sugeridoBebidas) { setTextoIncentivo('🤗 Tranquilo! Sem bebidas para você.')}
        if(valor >= sugeridoBebidas) {setTextoIncentivo('🥳 Agora a festa vai ficar boa!!!')}
        if(valor > (sugeridoBebidas * 2)) {setTextoIncentivo(`🤑 R$${valor}?! O salário caiu e eu não to sabendo?`)}
        if(valor >= valorTotal) { setTextoIncentivo('💅 Tá de patrão, hein???')}
        if(valor > (valorTotal*3)) {setTextoIncentivo('😮 Perai! Tá querendo impressionar quem?')}

    }

    const onSubmit = (e) => {

        e.preventDefault();

        let form = document.forms.cadastroChurrasco;
        let nome = form.nome.value;
        let contribuicao = form.contribuicao.value;
        console.log(contribuicao);
        let valor = Number(contribuicao.slice(2).replace(/\./g, '').replace(',','.'))


        adicionarParticipante(id, {nome, contribuicao: valor})
        navigate(`/churrasco/${id}`);

    }

    return (
        <article style={style}>
            <h2 style={{margin: '0px 0px 20px 0px', fontWeight: 600, textAlign:'center'}}>Cadastrar Participante</h2>
            <form nome='cadastroChurrasco' id='cadastroChurrasco' style={{display: 'flex', flexDirection: 'column'}} onSubmit={(e) => {onSubmit(e)}} >
                <section style={{display: 'flex', gap: '10px'}}>
                    <TextField label='Nome' type="text" style={{flex:1}} inputProps={{id: 'nome'}}  />
                    <TextField 
                        label='Contribuição' 
                        type='valor' 
                        style={{flex:1}} 
                        inputProps={{
                            id:'contribuicao',
                            onChange: (e) => {
                                let valor = Number(e.target.value.slice(2).replace(/\./g, '').replace(',','.'))
                                incentivarParticipante(valor)
                            }
                        }} />
                </section>
                <section style={{display: 'flex', gap: '10px'}}>
                    <h3 style={{flex:1, textAlign: 'center',}} >Valor sugerido: {Number(valorSugerido).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</h3>
                    <h3 style={{flex:1, textAlign: 'center',}} >Sugestão + bebida: {Number(sugeridoBebidas).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} </h3>
                </section>
                <h3 style={textStyle} >{textoIncentivo}</h3>
                <CustomButton label='Cadastrar' />
            </form>
        </article>
    )

}


export default CadastroParticipante;