import * as React from 'react';
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { Istate } from './reducers/combined';
import { Iproducts } from './reducers/products';
import { useState, useEffect } from 'react';

export const Nav:React.FC = () => {
    const trolleyProducts:Array<Iproducts> = useSelector((o:Istate) => o.productsInTrolley)
    const [sum, setSum] = useState(0.00)

    useEffect(() => {
        setSum(0)
        if(trolleyProducts.length != 0){
            trolleyProducts.map( (o:Iproducts, i:number) => {
                console.log('price: ',o.price)
                setSum(prev => prev += o.price)
            })
        }
    }, [trolleyProducts])
    console.log('sum: ', sum)
    return(
        <div className="navigation">
            <h1><Link to='/schoolJsProject/'>Sklep</Link></h1>
            <nav>
                <ul>
                    <li><Link to='/schoolJsProject/'>Strona Główna</Link></li>
                    <li><Link to='/schoolJsProject/shop'>Zakupy</Link></li>
                    <li><Link to='/schoolJsProject/contact'>Kontakt</Link></li>
                    <li><Link to='/schoolJsProject/admin'>Admin</Link></li>
                    <li>
                        <Link to='/schoolJsProject/trolley'>
                            <span className="material-icons nav-cart">shopping_cart</span>
                            {sum} zł
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}