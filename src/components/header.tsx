import * as React from 'react';

export const Header:React.FC = () => {
    return(
        <header>
            <h1><a href="#">Sklep</a></h1>
            <nav>
                <ul>
                    <li><a href="#">Strona Główna</a></li>
                    <li><a href="#">Zakupy</a></li>
                    <li><a href="#">Kontakt</a></li>
                </ul>
            </nav>
        </header>
    )
}