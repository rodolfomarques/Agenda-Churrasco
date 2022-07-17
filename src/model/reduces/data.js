export default function dataReducer(state, action) {

    switch(action.type) {
        case 'inserirProdutos':
            return {...state, churrascos: action.payload}
        case 'inserirImagensBanner': 
            return {...state, banner: action.payload}
        default:
            return state
    }
    
}