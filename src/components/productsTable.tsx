import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadFromLocalStorage } from './actions/loadFromLocalStorage'
import { useEffect } from 'react'
import { Istate } from './reducers/combined'
import { Product } from './product'
import { isAdding } from './actions/isAdding'

export const ProductsTable: React.FC = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadFromLocalStorage())
    }, [])

    const products = useSelector((state:Istate) => state.products)
    console.log('products: ',products)

    return (
        <>
        <table>
            <tr className="tableHeader">
                <th>LP.</th>
                <th>Nazwa</th>
                <th>Cena</th>
                <th>Stan</th>
                <th></th>
            </tr>
                {products.map( (obj, index) => {
                    return <Product key={index} index={index} data={obj} />
                })}
        </table>
        <button onClick={() => dispatch(isAdding())} className="addProduct">Dodaj produkt</button>
        </>
    )
}