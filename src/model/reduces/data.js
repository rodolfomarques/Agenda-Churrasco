export default function dataReducer(state, action) {

    switch(action.type) {
        case 'inserirProdutos':
            return {...state, churrascos: action.payload}
        case 'selecionarChurrasco':
            let churrasco = state.churrascos.find(item => { if(item.id === +action.payload) {return true} else {return false}})
            return {...state, churrascoSelecionado: churrasco}
        case 'avaliarContribuicao':
    
            let id_churrasco = state.churrascoSelecionado.id;
            let id_participante = action.payload.id;
            let churIndex =  state.churrascos.findIndex(item => item.id === id_churrasco? true: false);
            let partIndex = state.churrascos[churIndex].participantes.findIndex(part => part.id === id_participante? true: false )
            state.churrascos[churIndex].participantes[partIndex].pagamentoRealizado = action.payload.status;

            return {churrascoSelecionado: state.churrascoSelecionado, churrascos: state.churrascos}
        default:
            return state
    }
    
}