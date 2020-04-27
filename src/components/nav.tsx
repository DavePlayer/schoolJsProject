import * as React from 'react';
import {Link} from 'react-router-dom'

export const Nav:React.FC = () => {
    return(
        <div className="navigation">
            <h1><a href="#">Sklep</a></h1>
            <nav>
                <ul>
                    <li><Link to='/schoolJsProject/'>Strona Główna</Link></li>
                    <li><Link to='/schoolJsProject/shop'>Zakupy</Link></li>
                    <li><Link to='/schoolJsProject/contact'>Kontakt</Link></li>
                    <li><Link to='/schoolJsProject/admin'>Admin</Link></li>
                </ul>
            </nav>
        </div>
    )
}