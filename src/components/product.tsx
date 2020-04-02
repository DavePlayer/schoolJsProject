import * as React from 'react';
import { Iproducts } from './reducers/products'

interface Iprops{
    index:number
    data: Iproducts
}

export const Product:React.FC<Iprops> = props => {
    return (
        <tr>
            <td>{props.index+1}.</td>
            <td>{props.data.name}</td>
            <td>{props.data.price} zł</td>
            <td>{props.data.state}</td>
            <td>
                <span className="material-icons create">create</span>
                <span className="material-icons delete">delete</span>
                <span className="material-icons cart">shopping_cart</span>
            </td>
        </tr>
    )
}