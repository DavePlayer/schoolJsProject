import { Iproducts } from './products'
import * as _ from 'lodash'

export const productsInTrolley = (state:Array<Iproducts> = [], action:any) => {
    switch(action.type){
        case "LOAD_TROLLEY_FROM_LOCALSTORAGE":
            console.log('loading trolley')
            localStorage.getItem('trolley')!=null?
            state = JSON.parse(localStorage.getItem('trolley'))
            :
            null
            return state
        case "REMOVE_FROM_TROLLEY":
            state.map((o, i) => {
                return o.id = i
            })
            console.log('usuwanie z koszyka')
            state = _.remove(state, (i) => {
                console.log(i)
                return i.id !== action.id
            })
            state.map((o, i) => {
                return o.id = i
            })
            console.log(action.id)
            localStorage.setItem("trolley", JSON.stringify(state))
            return state
        case "MOVE_TO_TROLLEY":
            console.log("moving to trolley: ", action.payload)
            console.log(state)
            state = [...state, action.payload]
            state.map((o, i) => {
                return o.id = i
            })
            console.log(state)
            localStorage.setItem("trolley", JSON.stringify(state))
            return state
        default:
            return state
    }
}