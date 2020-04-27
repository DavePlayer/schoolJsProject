import * as React from 'react'
import { Nav } from './nav'
import { Footer } from './footer'
import { useSelector } from 'react-redux'
import { Iproducts } from './reducers/products'
import { Istate } from './reducers/combined'
import * as _ from 'lodash'

export const ProductPage:React.FC = (props:any) => {
    const [product] = _.filter(useSelector((o:Istate) => o.products), (o:Iproducts) => {
        if(o.id == props.match.params.id) return o
    })
    console.log(product)

    return (
        <>
            <Nav />
                <h1>{props.match.params.id}</h1>
            <Footer />
        </>
    )

}