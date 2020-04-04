import { Action } from "redux"
import * as _ from 'lodash'


export interface Iproducts{
        id:number
        name:string
        price:number
        state:string
}

export const products = (state:Array<Iproducts> = [], action:any) => {
    switch(action.type){
        case "LOAD_FROM_LOCALSTORAGE":
            console.log('loading products')
            localStorage.getItem('products')!=null?
            state = JSON.parse(localStorage.getItem('products'))
            :
            null
            return state
        case "ADD_NEW_PRODUCT":
            state.push(action.payload)
            localStorage.setItem("products", JSON.stringify(state))
            return state
        case "DELETE_PRODUCT":
            console.log(state)
            state.map((o, i) => {
                return o.id = i
            })
            state = _.remove(state, (i) => {
                console.log(i)
                return i.id !== action.id
            })
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