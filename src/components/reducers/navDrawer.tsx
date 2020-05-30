import * as React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'

export const NavDrawer:React.FC<any> = (props:any) => {
    console.log(props)
    return(
        <>
            <div className="wrapper">
                <nav className="navDrawer">
                    <div className="XSpace">
                    <span onClick={() => props.changeDrawerActive(false)} className="material-icons">highlight_off</span>
                    </div>
                    <ul>
                        <li><Link onClick={() => props.changeDrawerActive(false)} to='/schoolJsProject/'>Strona Główna</Link></li>
                        <li><Link onClick={() => props.changeDrawerActive(false)} to='/schoolJsProject/shop'>Zakupy</Link></li>
                        <li><Link onClick={() => props.changeDrawerActive(false)} to='/schoolJsProject/contact'>Kontakt</Link></li>
                        <li><Link onClick={() => props.changeDrawerActive(false)} to='/schoolJsProject/admin'>Admin</Link></li>
                        <li>
                            <Link onClick={() => props.changeDrawerActive(false)} to='/schoolJsProject/trolley'>
                                <span className="material-icons nav-cart">shopping_cart</span>Zakupy
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}