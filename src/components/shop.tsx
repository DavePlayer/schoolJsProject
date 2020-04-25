import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Istate } from './reducers/combined'
import { Iproducts } from './reducers/products'
import { TileProduct } from './tileProduct'
import { useEffect } from 'react'
import { loadFromLocalStorage } from './actions/loadFromLocalStorage'
import { loadTrolleyFromLocalStorage } from './actions/loadTrolleyFromLocalStorage'

export const Shop:React.FC = () => {
    const products:Array<Iproducts> = useSelector((state:Istate) => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadFromLocalStorage())
        dispatch(loadTrolleyFromLocalStorage())
    }, [])

    console.log(products)
    return (
        <main className="shop">
            <h1>Produkty</h1>
            {products.length > 0?
                products.map( (obj, index) => {
                    return <TileProduct key={index} id={index} name={obj.name} price={obj.price} state={obj.state} imgAdress={obj.imgAdress} seller={obj.seller} desc={obj.desc} type={obj.type} />
                })
                :
                <></>
            }
        </main>
    )
}