import * as React from 'react';
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { Istate } from './reducers/combined';
import { Iproducts } from './reducers/products';
import { useState, useEffect } from 'react';
import { NavDrawer } from './reducers/navDrawer';
import {useSpring, useTransition, animated} from 'react-spring'


export const Nav:React.FC = () => {
    const trolleyProducts:Array<Iproducts> = useSelector((o:Istate) => o.productsInTrolley)
    const [sum, setSum] = useState(0.00)
    const [drawerActive, changeDrawerActive] = useState(false)

    useEffect(() => {
        setSum(0)
        if(trolleyProducts.length != 0){
            trolleyProducts.map( (o:Iproducts, i:number) => {
                console.log('price: ',o.price)
                setSum(prev => prev += o.price)
            })
        }
    }, [trolleyProducts])

    const transitions = useTransition(drawerActive, null, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0}
    })

    return(
        <div className="navigation">
            <h1><Link to='/schoolJsProject/'>Sklep</Link></h1>
            {
                transitions.map( (style:any) => {
                    console.log(style)
                    return (
                            style.item?
                            <animated.div key={style.key} style={style.props}>
                                <NavDrawer changeDrawerActive={(e:any) => changeDrawerActive(e)} />
                            </animated.div>
                            :
                            null
                    )
                })
            }
            <nav>
            <div className="menuButton" onClick={() => changeDrawerActive( (prev) => !prev)}><span className="material-icons">menu</span></div>
                <ul>
                    <li><Link to='/'>Strona Główna</Link></li>
                    <li><Link to='/shop'>Zakupy</Link></li>
                    <li><Link to='/contact'>Kontakt</Link></li>
                    <li><Link to='/admin'>Admin</Link></li>
                    <li>
                        <Link to='/trolley'>
                            <span className="material-icons nav-cart">shopping_cart</span>
                            {sum} zł
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}