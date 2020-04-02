import * as React from 'react'
import { useSelector } from 'react-redux'
import { Istate } from './reducers/combined'
import { Product } from './product'

export const ProductsTable: React.FC = () => {
    const products = useSelector((state:Istate) => state.products)
    console.log(products)
    return (
       <table>
           <tr>
               <th>LP.</th>
               <th>Nazwa</th>
               <th>Cena</th>
               <th>Stan</th>
               <th></th>
           </tr>
            {products.map( (obj, index) => {
                return <Product index={index} data={obj} />
            })}
       </table>
    )
}