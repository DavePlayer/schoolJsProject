import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadFromLocalStorage } from './actions/loadFromLocalStorage'
import { useEffect, useState } from 'react'
import { Istate } from './reducers/combined'
import { Product } from './product'
import { isAdding } from './actions/isAdding'

export const ProductsTable: React.FC = () => {
    const dispatch = useDispatch()
    const products = useSelector((state:Istate) => state.products)
    
    useEffect(() => {
        dispatch(loadFromLocalStorage())
    }, [])

    console.log('products: ',products)

    return (
        <>
        <table>
            <thead>
            <tr className="tableHeader">
                <th>LP.</th>
                <th>Nazwa</th>
                <th>Cena</th>
                <th>Stan</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                {products.length > 0?
                    products.map( (obj, index) => {
                        return <Product key={index} index={index} data={obj} />
                    })
                    :
                    <></>
                }
            </tbody>
        </table>
        <button onClick={() => dispatch(isAdding())} className="addProduct">Dodaj produkt</button>
        </>
    )
}