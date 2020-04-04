import * as React from 'react'
import './../main'
import { ProductsTable } from './productsTable'
import { AddProduct } from './AddProduct'
import { useSelector } from 'react-redux'
import { Istate } from './reducers/combined'
import { TrolleyTable } from './trolleyTable'
import { Header } from './header'
import { Footer } from './footer'

export const App:React.FC = () => {
    const isAddingProduct = useSelector((state:Istate) => state.isAdding)
    return (
        <>
            <Header />
            <main>
                <ProductsTable />
                <TrolleyTable />
            </main>
            {isAddingProduct? 
                <AddProduct />
                :
                <></>
            }
            <Footer />
        </>
    )
}