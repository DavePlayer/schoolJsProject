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
    let reand = Math.floor(Math.random() * (products.length - 4))
    console.log(reand)
    return(
        <section className="productSlider">
            <h3>Te produkty mogą ci się spodobać</h3>
            <div className="productContainerr">
                {products.length > 0 ? 
                    products.length >= 4 ?
                        _.filter(products, (o:any) => {
                            return o.id != props.productId
                        }).slice(reand, reand+3).map(o => {
                            console.log(o)
                            return <ProposedProducts key={o.id} data={o}/>
                        })
                        :
                        _.filter(products, (o:any) => {
                            console.log(o.id, props.productId)
                            if(o.id != props.productId) return o
                        }).map((o:any) => {
                            console.log(o)
                            return <ProposedProducts key={o.id} data={o}/>
                        })    
                    :
                    <h3>Brak produktów w koszyku</h3>
                }
            </div>
            
        </section>
    )
}