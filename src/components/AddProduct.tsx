import * as React from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isAdding } from './actions/isAdding'
import { addProduct } from './actions/addProduct'
import { Istate } from './reducers/combined'
import * as _ from 'lodash'
import { ImageToChoose } from './imageToChoose';

export const AddProduct:React.FC = () => {
    const dispatch = useDispatch()
    const length = useSelector((state:Istate) => state.products.length)
    const [name, changeName] = useState(``)
    const [price, changePrice] = useState(0)
    const [state, changeState] = useState(``)
    const [imgAdress, changeimgAdress] = useState(``)
    const [images, updateImages] = useState([
        'https://placeimg.com/1000/1000/any',
        'https://placeimg.com/1000/1000/animals',
        'https://placeimg.com/1000/1000/nature',
        'https://placeimg.com/1000/1000/people',
        'https://placeimg.com/300/300/people',
        'https://placeimg.com/300/300/any',
        'https://placeimg.com/300/300/animals',
        'https://placeimg.com/300/300/nature',

    ])
    const [startImageIndex, updateStartImageIndex] = useState(0)
    const [endImageIndex, updateEndImageIndex] = useState(3)

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
                    <p className="material-icons" onClick={() => {
                        if(startImageIndex >= 1){
                            updateStartImageIndex(o => o-1)
                            updateEndImageIndex(o => o-1)
                        }
                    }}>arrow_back_ios</p>
                    {_.filter(images, (o, i) => {
                        if(i>=startImageIndex && i<=endImageIndex) return o
                        }).map(o => {
                            return <ImageToChoose key={`${o}`} hancleClick={hancleClick} src={`${o}`} />
                        })
                    }
                    <p className="material-icons" onClick={() => {
                        if(endImageIndex <= images.length-2){
                            updateStartImageIndex(o => o+1)
                            updateEndImageIndex(o => o+1)
                        }
                    }}>arrow_forward_ios</p>
                </div>
                <div>
                    <button onClick={() => dispatch(isAdding())}>Anuluj</button>
                    <button onClick={() => createProduct()} className="addButton">Dodaj</button>
                </div>
            </article>
        </div>
    )
}