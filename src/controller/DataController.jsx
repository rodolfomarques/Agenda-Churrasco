import { useEffect, useReducer } from "react";
import { DataContext } from "../model/contextos";
import { dataReducer } from '../model/reduces'
import Axios from '../API/endpoints';
const axios = new Axios();

const inicialState = {
    churrascos: [],
    banner: []
}


const DataController = ({children}) => {

    const [ dataState, dataDispatch ] = useReducer(dataReducer, inicialState);

    useEffect(() => {
        
        axios.get('/churrascos')
        .then(resp => { dataDispatch({type: 'inserirProdutos', payload: resp.data}) })

    }, [])

    return (
        <DataContext.Provider value={{dataState, dataDispatch}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataController;