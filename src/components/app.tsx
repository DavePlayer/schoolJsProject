import * as React from 'react'
import './../main'
import { ProductsTable } from './productsTable'

export const App:React.FC = () => {
    return (
        <main>
            <ProductsTable />
        </main>
    )
}