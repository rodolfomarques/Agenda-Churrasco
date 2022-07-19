export default function dataReducer(state, action) {

    switch(action.type) {
        case 'inserirProdutos':
            return {...state, churrascos: action.payload}
        case 'selecionarChurrasco':
            let churrasco = state.churrascos.find(item => { if(item.id === +action.payload) {return true} else {return false}})
            return {...state, churrascoSelecionado: churrasco}
        case 'atualizarChurrascos':
            return {...state, churrascos: action.payload}
        default:
            return state
    }
    
}