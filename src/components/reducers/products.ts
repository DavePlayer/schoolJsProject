import { Action } from "redux";


export interface Iproducts{
        name:string
        price:number
        state:string
}

export const products = (state:Array<Iproducts> = [{name:'żelki', price:2,state:'nieprzeterminowane'},{name:'Hentai doujinshi', price:200, state:'nieużywane'}], action:Action) => {
    switch(action.type){
        case "LOAD_FROM_LOCALSTORAGE":
            return state
        case "ADD_NEW_PRODUCT":
            return state
        default:
            return state
    }
}