import { Action } from "redux"
import * as _ from 'lodash'


export interface Iproducts{
        id:number
        name:string
        price:number | null
        state:string
        imgAdress:string
        seller: string
        type: string
        desc: string
}

export const products = (state:Array<Iproducts> = [], action:any) => {
    switch(action.type){
        case "LOAD_PRODUCTS_FROM_LOCALSTORAGE":
            console.log('loading products')
            localStorage.getItem('products')!=null?
            state = JSON.parse(localStorage.getItem('products'))
            :
            null
            return state
        case "ADD_NEW_PRODUCT":
            state = [...state, action.payload]
            state.map((o, i) => {
                return o.id = i
            })
            localStorage.setItem("products", JSON.stringify(state))
            console.log("ZXDDDDDDDDDDDDDDDDD: ", state)
            return state
        case "DELETE_PRODUCT":
            console.log('deleting', state)
            state.map((o, i) => {
                return o.id = i
            })
            console.log('przefiltrowqano przed susnieciem')
            state = _.remove(state, (i) => {
                return i.id !== action.id
            })
            state.map((o, i) => {
                return o.id = i
            })
            console.log(action.id)
            console.log(action.id)
            console.log(action.id)
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