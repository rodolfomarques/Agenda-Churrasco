export default function dataReducer(state, action) {

    let id_participante, id_churrasco, churIndex, partIndex;

    switch(action.type) {
        case 'inserirProdutos':
            return {...state, churrascos: action.payload}
        case 'selecionarChurrasco':
            let churrasco = state.churrascos.find(item => { if(item.id === +action.payload) {return true} else {return false}})
            return {...state, churrascoSelecionado: churrasco}
        case 'avaliarContribuicao':
    
            id_churrasco = state.churrascoSelecionado.id;
            id_participante = action.payload.id;
            churIndex =  state.churrascos.findIndex(item => item.id === id_churrasco? true: false);
            partIndex = state.churrascos[churIndex].participantes.findIndex(part => part.id === id_participante? true: false )
            state.churrascos[churIndex].participantes[partIndex].pagamentoRealizado = action.payload.status;

            return {churrascoSelecionado: state.churrascoSelecionado, churrascos: state.churrascos}

        case 'novoChurrasco':

            let novoChurrasco = action.payload;
            let valorTotal = novoChurrasco.valorBebidas + novoChurrasco.valorCarnes;
            let novoId = state.churrascos.at(-1).id + 1;
            state.churrascos = [...state.churrascos, {...novoChurrasco, participantes: [], valorTotal, id: novoId }]

            return {...state}

        case 'removerParticipante':
            let novoState = state;
            id_churrasco = +action.payload.id_churrasco;
            id_participante = +action.payload.id_participante;

            let participanteNaLista = novoState.churrascoSelecionado.participantes.find(item => item.id === id_participante? true: false)
            if(participanteNaLista) {
                partIndex = novoState.churrascoSelecionado.participantes.findIndex(item => item.id === id_participante? true: false);
                novoState.churrascoSelecionado.participantes.splice(partIndex, 1);
            }

            churIndex = novoState.churrascos.findIndex(item => item.id === id_churrasco? true: false);
            participanteNaLista = novoState.churrascos[churIndex].participantes.find(item => item.id === id_participante? true: false)

            if(participanteNaLista) {
                partIndex = novoState.churrascos[churIndex].participantes.findIndex(item => item.id === id_participante? true: false)
                novoState.churrascos[churIndex].participantes.splice(partIndex, 0)
            }

            return {...novoState}
        default:
            return state
    }
    
}