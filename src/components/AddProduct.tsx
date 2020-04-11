import * as React from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isAdding } from './actions/isAdding'
import { addProduct } from './actions/addProduct'
import { Istate } from './reducers/combined'

export const AddProduct = () => {
    const dispatch = useDispatch()
    const length = useSelector((state:Istate) => state.products.length)
    const [name, changeName] = useState(``)
    const [price, changePrice] = useState(0)
    const [state, changeState] = useState(``)
    const [imgAdress, changeimgAdress] = useState(``)

    const createProduct = () =>{
        if(name.length > 0 && state.length > 0 && imgAdress.length > 0){
            dispatch(addProduct({id:length+1, name, price, state, imgAdress}))
            changeName('')
            changePrice(0)
            changeState('')
            dispatch(isAdding())

        } else {
            alert(`Nie wypełniłeś danych`)
        }
    }

    const hancleClick = (event:any, address:string) => {
        [...document.querySelectorAll('img')].map(o => {
            o.style.border = 'none'
        })
        event.target.style = "border: 3px solid #20F298"
        changeimgAdress(address)
    }

    return (
        <div className="wrapper">
            <article className='box'>
                <div>
                    <input onChange={e => changePrice(parseFloat(e.target.value))} placeholder="Cena" value={price} type="number"/>
                    <input onChange={e => changeState(e.target.value)} className="stateInput" placeholder="Stan" value={state} type="text"/>
                </div>
                <div>
                    <input onChange={e => changeName(e.target.value)} className="nameInput" placeholder="Nazwa" value={name} type="text"/>
                </div>
                <div className="imageHolder">
                    <p>L</p>
                    <figure id="1" onClick={(e) =>hancleClick(e, 'https://placeimg.com/1000/1000/any')}><a><img src="https://placeimg.com/1000/1000/any" alt="placeholder"/></a></figure>
                    <figure id="2" onClick={(e) =>hancleClick(e, 'https://placeimg.com/1000/1000/animals')}><img src="https://placeimg.com/1000/1000/animals" alt="placeholder"/></figure>
                    <figure id="3" onClick={(e) =>hancleClick(e, 'https://placeimg.com/1000/1000/nature')}><img src="https://placeimg.com/1000/1000/nature" alt="placeholder"/></figure>
                    <figure id="4" onClick={(e) =>hancleClick(e, 'https://placeimg.com/1000/1000/people')}><img src="https://placeimg.com/1000/1000/people" alt="placeholder"/></figure>
                    <p>P</p>
                </div>
                <div>
                    <button onClick={() => dispatch(isAdding())}>Anuluj</button>
                    <button onClick={() => createProduct()} className="addButton">Dodaj</button>
                </div>
            </article>
        </div>
    )
}