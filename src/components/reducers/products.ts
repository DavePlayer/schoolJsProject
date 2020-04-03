import { Action } from "redux"
import * as _ from 'lodash'


export interface Iproducts{
        id:number
        name:string
        price:number
        state:string
}

export const products = (state:Array<Iproducts> = [{id: 0, name:'żelki', price:2,state:'nieprzeterminowane'},{id: 1, name:'Hentai doujinshi', price:200, state:'nieużywane'}, {id: 2, name:'Plaża', price:5900, state:'Stare'}, {id: 3, name:'Gumisiowy soczek', price:20, state:'Bezalkocholowy'}], action:any) => {
    switch(action.type){
        case "LOAD_FROM_LOCALSTORAGE":
            state = JSON.parse(localStorage.getItem('products'))
            return state
        case "ADD_NEW_PRODUCT":
            state.push(action.payload)
            localStorage.setItem("products", JSON.stringify(state))
            return state
        case "EDIT_PRODUCT":
            state[action.index] = action.payload
            localStorage.setItem("products", JSON.stringify(state))
            return state
        default:
            return state
    }
}