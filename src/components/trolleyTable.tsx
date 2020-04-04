import * as React from 'react'
import { useSelector } from 'react-redux'
import { Istate } from './reducers/combined'
import { Product } from './product'
import { useState, useEffect } from 'react'

export const TrolleyTable:React.FC = () => {
    const trolley = useSelector((state:Istate) => state.productsInTrolley)
    const [summary, setSummary] = useState(0)

    useEffect(() => {
        setSummary(0)
        trolley.map(o => {
            setSummary(sum => sum+=o.price)
        })
    }, [trolley.length])
    
    console.log("trolley", trolley)
    return (
        <>
            <h3 className="trolley">Koszyk</h3>
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
                    {trolley.length > 0 ?
                        trolley.map( (obj, index) => {
                            return <Product inTrolley={true} key={index} index={index} data={obj} />
                        })
                        :
                        <></>
                    }
                        <tr className="tableHeader">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Łącznie: {summary.toFixed(2) + ' zł'}</td>
                        </tr>                    
                </tbody>
            </table>
        </>
    )
}