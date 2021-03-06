import * as React from 'react';
import { deleteProduct } from './actions/deleteProduct';
import { moveToTrolley } from './actions/moveToTrolley';
import { useDispatch } from 'react-redux'

interface Iprops {
    toggleSummary(): void,
    price: number,
    state: string,
    name: string,
    id: number,
    imgAdress: string
    seller: string;
    type: string;
    desc: string
}

export const Summary = (props:Iprops) => {
    const dispatch = useDispatch()
    const trolley = () => {
        dispatch(deleteProduct(props.id))
        dispatch(moveToTrolley({id:props.id, name:props.name, price:props.price, state:props.state, imgAdress:props.imgAdress, seller:props.seller, type: props.type, desc: props.desc}))
        props.toggleSummary()
    }

    return (
        <div className="wrapper">
            <div className="box summary">
                <figure><img src={props.imgAdress} alt="ERR 404 Nie ma"/></figure>
                <div className='info'>
                    <h1>{props.name}</h1>
                    <p>Cena: {props.price}zł</p>
                    <p>Stan: {props.state}</p>
                    <button onClick={() => trolley()}>Dodaj do koszyka</button>
                    <button onClick={() => props.toggleSummary()}>Anuluj</button>
                </div>
            </div>
        </div>
    )
}