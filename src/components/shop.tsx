import * as React from 'react'
import { useSelector } from 'react-redux'
import { Istate } from './reducers/combined'
import { Iproducts } from './reducers/products'
import { TileProduct } from './tileProduct'
import { useState, useEffect } from 'react'
import * as _ from 'lodash'

export const Shop:React.FC = () => {
    const products:Array<Iproducts> = useSelector((state:Istate) => state.products)
    const [productDisplay, setProductDisplay] = useState(products)
    const [filter, changeFilter] = useState('')

    const handleChange = (event:any) => {
        try{
            const value = event.target.value
            changeFilter(value)
            if(value[0] != '#'){
                setProductDisplay(_.filter(products, o => {
                    return o.name.includes(value.toLowerCase())
                }))
            }else{
                setProductDisplay(_.filter(products, o => {
                    return o.type.includes(value.match(/[^#]*$/)[0].toLowerCase())
                }))
            }
        } catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        console.log('product loadded')
        setProductDisplay(products)
    }, [products])

    return (
        <div className="background-grey">
            <div className="inputCont">
                    <input type="text" value={filter} placeholder="filter (#-typ, bez-nazwa)" onChange={e => handleChange(e)}/>
            </div>
            <main className="shop">
                <h1>Produkty</h1>
                {products.length > 0?
                    productDisplay.map( (obj, index) => {
                        return <TileProduct key={index} id={index} name={obj.name} price={obj.price} state={obj.state} imgAdress={obj.imgAdress} seller={obj.seller} desc={obj.desc} type={obj.type} />
                    })
                    :
                    <h2>Koszyk jest pusty</h2>
                }
            </main>
        </div>
    )
}