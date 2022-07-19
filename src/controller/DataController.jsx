import { useEffect, useReducer } from "react";
import { DataContext } from "../model/contextos";
import { dataReducer } from '../model/reduces'
import Axios from '../API/endpoints';
const axios = new Axios();

const inicialState = {
    churrascos: [],
    churrascoSelecionado: {}
}


const DataController = ({children}) => {

    const [ dataState, dataDispatch ] = useReducer(dataReducer, inicialState);

    useEffect(() => {
        
        axios.get('/churrascos')
        .then(resp => { dataDispatch({type: 'inserirProdutos', payload: resp.data}) })

    }, [])

    const totalArrecadado = (id_churrasco) => {

        let churrascos = dataState.churrascos;
        let valorArrecadado = 0;
        let indexChurrasco = churrascos.findIndex(churrasco => churrasco.id === +id_churrasco? true: false);

        churrascos[indexChurrasco].participantes.map(participante => {
            if(participante.pagamentoRealizado) { valorArrecadado = valorArrecadado + participante.contribuicao }
        })

        churrascos[indexChurrasco].valorArrecadado = valorArrecadado;
        dataDispatch({type: 'atualizarChurrascos' , payload: churrascos});

    }

    const gerenciarContribuicao = (id_churrasco, id_participante) => {

        let churrascos = dataState.churrascos;
        let indexChurrasco = churrascos.findIndex(churrasco => churrasco.id === id_churrasco? true: false);
        let indexParticipante = churrascos[indexChurrasco].participantes.findIndex(participante => +participante.id === +id_participante? true: false);
        let valorAtual = churrascos[indexChurrasco].participantes[indexParticipante].pagamentoRealizado;
        churrascos[indexChurrasco].participantes[indexParticipante].pagamentoRealizado = !valorAtual;
        dataDispatch({type: 'atualizarChurrascos' , payload: churrascos});
        totalArrecadado(id_churrasco);
    }

    const adicionarChurrasco = (dados) => {

        console.log(dados);
        let churrascos = dataState.churrascos;
        let ultimoId = churrascos.at(-1).id;
        let valorTotal = dados.valorBebidas + dados.valorCarnes;
        let novoChurrasco = {...dados, valorBebidas: Number(dados.valorBebidas), valorCarnes: Number(dados.valorCarnes), id: ultimoId + 1, valorTotal, participantes: []};
        churrascos.push(novoChurrasco);
        dataDispatch({type: 'atualizarChurrascos' , payload: churrascos});

    }

    const adicionarParticipante = (id_churrasco, dados) => {

        let churrascos = dataState.churrascos;
        let indexChurrasco = churrascos.findIndex(churrasco => churrasco.id === +id_churrasco? true: false);
        let ultimoId = churrascos[indexChurrasco].participantes.at(-1).id;
        churrascos[indexChurrasco].participantes.push({id: ultimoId + 1, ...dados, pagamentoRealizado: false});
        dataDispatch({type: 'atualizarChurrascos' , payload: churrascos});

    }

    const removerParticipante = (id_churrasco, id_participante) => {

        let churrascos = dataState.churrascos;
        let indexChurrasco = churrascos.findIndex(churrasco => churrasco.id === id_churrasco? true: false);
        
        let indexParticipante = churrascos[indexChurrasco].participantes.findIndex(participante => +participante.id === +id_participante? true: false);
        if(indexParticipante === null || indexParticipante !== undefined) {
            churrascos[indexChurrasco].participantes.splice(indexParticipante, 1)
            dataDispatch({type: 'atualizarChurrascos' , payload: churrascos})
        }
        totalArrecadado(id_churrasco);
    }   

    return (
        <DataContext.Provider value={{dataState, dataDispatch, adicionarChurrasco, totalArrecadado, gerenciarContribuicao, adicionarParticipante, removerParticipante}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataController;