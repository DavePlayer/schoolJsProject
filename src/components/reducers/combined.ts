import { combineReducers } from 'redux'
import { example } from './example'
import { products } from './products'
import { Iproducts } from './products'
import { isAdding } from './isAdding'
import { productsInTrolley } from './inTrolley'

export interface Istate{
    example?:any
    products: Array<Iproducts>,
    isAdding:boolean,
    productsInTrolley: Array<Iproducts>,
}

export const rootReducer = combineReducers({
    example,
    products,
    isAdding,
    productsInTrolley,
})