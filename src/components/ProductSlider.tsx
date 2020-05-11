import * as React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Iproducts, products } from './reducers/products';
import { Istate } from './reducers/combined';
import { ProposedProducts } from './proposedProducts';
import * as _ from 'lodash'

interface IProps{
    productId: number
}

export const ProductSlider:React.FC<IProps> = (props:IProps) => {
    const products:Array<Iproducts> = useSelector((o:Istate) => o.products)
    const [startImageIndex, updateStartImageIndex] = useState(0);
    const [endImageIndex, updateEndImageIndex] = useState(3);
    let reand = Math.floor(Math.random() * (products.length - 4))
    console.log(reand)
    return(
        <section className="productSlider">
            <h3>Te produkty mogą ci się spodobać</h3>
            {products.length > 0 ? 
                products.length >= 5 ?
                    _.filter(products, (o:any) => {
                        return o.id != props.productId
                    }).splice(reand, reand+3).map(o => {
                        console.log(o)
                        return <ProposedProducts data={o}/>
                    })
                    :
                    _.filter(products, (o:any) => {
                        console.log(o.id, props.productId)
                        if(o.id != props.productId) return o
                    }).map((o:any) => {
                        console.log(o)
                        return <ProposedProducts data={o}/>
                    })     
                :
                null 
            }
            
        </section>
    )
}