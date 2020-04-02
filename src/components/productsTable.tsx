import * as React from 'react'
import { useSelector } from 'react-redux'
import { Istate } from './reducers/combined'
import { Product } from './product'

export const ProductsTable: React.FC = () => {
    const products = useSelector((state:Istate) => state.products)
    console.log(products)
    return (
       <>
            {products.map(obj => {
                return <Product />
            })}
       </>
    )
}