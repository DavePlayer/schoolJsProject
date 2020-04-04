import * as React from 'react'
//import { useSelector, useDispatch } from 'react-redux'
//import { Istate } from './reducers/combined'
import { Product } from './product'

export const TrolleyTable:React.FC = () => {
    return (
        <table className="trolley">
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

            </tbody>
        </table>
    )
}