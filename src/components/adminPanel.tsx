import * as React from 'react'
import './../main'
import { ProductsTable } from './productsTable'
import { AddProduct } from './AddProduct'
import { useSelector } from 'react-redux'
import { Istate } from './reducers/combined'
import { TrolleyTable } from './trolleyTable'

export const AdminPanel:React.FC = () => {
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