import * as React from 'react'
import './../main'
import { ProductsTable } from './productsTable'
import { AddProduct } from './AddProduct'
import { useSelector } from 'react-redux'
import { Istate } from './reducers/combined'

export const App:React.FC = () => {
    const isAddingProduct = useSelector((state:Istate) => state.isAdding)
    return (
        <>
            <main>
                <ProductsTable />
            </main>
            {isAddingProduct? 
                <AddProduct />
                :
                <></>
            }
        </>
    )
}