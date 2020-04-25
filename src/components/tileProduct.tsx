import * as React from 'react'
import { Iproducts } from './reducers/products'
import { useDispatch } from 'react-redux'
import { moveToTrolley } from './actions/moveToTrolley'
import { useState } from 'react'
import { deleteProduct } from './actions/deleteProduct'


export const TileProduct:React.FC<Iproducts> = (props:Iproducts) => {
    const ch = Math.floor(Math.random()*4)+1
    const arr = [1,2,3,4,5]
    const dispatch = useDispatch()
    const [added, changeAdded] = useState(false)
    const trolley = () => {
        dispatch(moveToTrolley({id:props.id, name:props.name, price:props.price, state:props.state, imgAdress:props.imgAdress, seller:props.seller, type: props.type, desc: props.desc}))
        changeAdded(true)
        dispatch(deleteProduct(props.id))
    }

    return(
    <article className="tile">
        <figure><img src={props.imgAdress} alt="product image"/></figure>
        <section className="info">
            <p className="productName">{props.name}</p>
            <p>Sprzedawca: {props.seller}</p>
            <p className="showOffs">
                    <span className="material-icons yellow">grade</span>
                    <span className="material-icons yellow">grade</span>
                    <span className="material-icons">grade</span>
                    <span className="material-icons">grade</span>
                    <span className="material-icons">grade</span>
                <span>kupiono {Math.floor((Math.random()*144)+3)} sztuk</span>
            </p>
            <ul>
                <li>stan: {props.state}</li>
                <li>typ: {props.type}</li>
            </ul>
        </section>
        <section className="importants">
            <p className="price">Cena: {props.price}</p>
            <p>U ciebie za <span className="red">{Math.floor((Math.random()*14)+17)} dni</span></p>
            <p><span className="blue">{Math.floor(Math.random()*4)+1} oferty</span> od {props.price -Math.floor(Math.random()*24)+13} zł</p>
            {added==false? 
            <button onClick={() => trolley()}>Dodaj do koszyka</button>
            :
            null    
        }
        </section>
    </article>
    )
}