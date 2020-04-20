import * as React from 'react'
import './../main'
import { ProductsTable } from './productsTable'
import { AddProduct } from './AddProduct'
import { useSelector } from 'react-redux'
import { Istate } from './reducers/combined'
import { TrolleyTable } from './trolleyTable'
import { Nav } from './nav'
import { Footer } from './footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export const Shop:React.FC = () => {
    const isAddingProduct = useSelector((state:Istate) => state.isAdding)
    return (
        <main>
            <ProductsTable />
            <TrolleyTable />
            {
                isAddingProduct?
                <AddProduct />
                :
                null
            }
        </main>
    )
}