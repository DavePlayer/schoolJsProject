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

    const createProduct = () =>{
        if(name.length > 0 && state.length > 0){
            dispatch(addProduct({id:length+1, name, price, state}))
            changeName('')
            changePrice(0)
            changeState('')
            dispatch(isAdding())

        } else {
            alert(`Nie wypełniłeś danych`)
        }
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
                <div>
                    <button onClick={() => dispatch(isAdding())}>Anuluj</button>
                    <button onClick={() => createProduct()} className="addButton">Dodaj</button>
                </div>
            </article>
        </div>
    )
}