import { combineReducers } from 'redux'
import { example } from './example'
import { products } from './products'
import { Iproducts } from './products'
import { isAdding } from './isAdding'

export interface Istate{
    example?:any
    products: Array<Iproducts>,
    isAdding:boolean
}

export const rootReducer = combineReducers({
    example,
    products,
    isAdding,
})