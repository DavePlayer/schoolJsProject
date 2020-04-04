import * as React from 'react';
import { useState, useEffect } from 'react'
import { Iproducts } from './reducers/products'
import { editProducts } from './actions/editProduct'
import { useDispatch, useSelector } from 'react-redux'
import { Istate } from './reducers/combined'
import { deleteProduct } from './actions/deleteProduct'

interface Iprops{
    index:number
    data: Iproducts
}

export const Product:React.FC<Iprops> = props => {
    const prods = useSelector((state:Istate) => state.products)
    const [isEditing, toggleEdit] = useState(true)
    const [name, changeName] = useState(props.data.name)
    const [price, changePrice] = useState(props.data.price)
    const [state, changeState] = useState(props.data.state)
    const dispatch = useDispatch()
    const changeEdit = () => {
        toggleEdit(o => !o)
        if(isEditing == false){
            dispatch(editProducts(props.index, {id:props.index, name, price, state}))
        }
    }
    const delet = () => {
        dispatch(deleteProduct(props.data.id))
    }

    useEffect(() => {
        changeName(props.data.name)
        changePrice(props.data.price)
        changeState(props.data.state)
    } ,prods)

    return (
        isEditing ?
        <tr>
            <td>{props.index+1}.</td>
            <td>{name}</td>
            <td>{price} zł</td>
            <td>{state}</td>
            <td>
                <span  onClick={() => changeEdit()} className="material-icons create">create</span>
                <span className="material-icons delete" onClick={() => delet()}>delete</span>
                <span className="material-icons cart">shopping_cart</span>
            </td>
        </tr>
        :
        <tr>
            <td>{props.index+1}.</td>
            <td><input onChange={e => changeName(e.target.value)} value={name} /></td>
            <td><input onChange={e => changePrice(parseFloat(e.target.value))} type='number' value={price} /></td>
            <td><input onChange={e => changeState(e.target.value)} value={state} /></td>
            <td>
                <span onClick={() => changeEdit()} className="material-icons create">save</span>
                <span style={{color: '#aaa', cursor: 'default'}} className="material-icons delete">delete</span>
                <span style={{color: '#aaa', cursor: 'default'}}  className="material-icons cart">shopping_cart</span>
            </td>
        </tr>
    )
}