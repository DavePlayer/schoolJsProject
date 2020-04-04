import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Istate } from './reducers/combined'
import { Product } from './product'
import { useEffect } from 'react'
import { loadTrolleyFromLocalStorage } from './actions/loadTrolleyFromLocalStorage'

export const TrolleyTable:React.FC = () => {
    const trolley = useSelector((state:Istate) => state.productsInTrolley)
    
    console.log("trolley", trolley)
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
                {trolley.length > 0?
                    trolley.map( (obj, index) => {
                        return <Product inTrolley={true} key={index} index={index} data={obj} />
                    })
                    :
                    <></>
                }
            </tbody>
        </table>
    )
}