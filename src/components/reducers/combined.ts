import { combineReducers } from 'redux'
import { example } from './example'
import { products } from './products'
import { Iproducts } from './products'

export interface Istate{
    example?:any
    products: Array<Iproducts>,
}

export const rootReducer = combineReducers({
    example,
    products,
})