import * as React from 'react'
import { Iproducts } from './reducers/products'
import { useHistory } from 'react-router-dom'

interface Iprops {
    data?: Iproducts,
}

export const ProposedProducts:React.FC<Iprops> = (props:Iprops) => {
    const history = useHistory();
    const handleClick = () => {
        history.push(`/schoolJsProject/shop/${props.data.id}`)
    }
    return(
        <article onClick={() => handleClick()} className="proposition">
            <figure><img src={props.data.imgAdress} alt="product"/></figure>
            <p className="price">{props.data.price} zł</p>
            <p className="productName">{props.data.name.slice(0, 32)}...</p>
            <p className="unknown">{props.data.price + Math.floor(Math.random()*24)+13} z dostawą</p>
            <p className="unknown">kupiło {Math.floor((Math.random()*14)+17)}</p>
        </article>
    )
}