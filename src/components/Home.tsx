import * as React from 'react';

export const Home:React.FC = () => {
    return(
        <div className="home">
            <header className="homeImg">
                <figure><img src="https://images.unsplash.com/photo-1499551660540-eaf0697882f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" alt="IMG"/></figure>
            </header>
            <div className="info">
                <span className="material-icons arrowDown">keyboard_arrow_down</span>
                <aside>
                    <h3>Specjalna okazja</h3>
                    <figure>
                        <img src="https://swiat-sprzatania.pl/userdata/public/gfx/f929c4472abfb4c265712649c1f28066.jpg" alt="Gogle vr"/>
                    </figure>
                    <p>Papier toaletowy + google VR HTC Vive</p>
                    <div className="stockInfo">
                        <div className="stock">Pozostało: 23</div>
                        <div className="stock">Sprzedano: 9</div>
                    </div>
                    <div className="progress" style={{height: "5em"}}>
                        <div className="progress-bar" role="progressbar" style={{width: '73%', height: "5em", backgroundColor: "#20F298"}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                    <div className="priceContainer">
                        <h5><div className="oldPrice">3000zł</div> <div className="promotion">2300zł</div></h5>
                    </div>
                </aside>
                <article>
                    <h2>Sklep</h2>
                    <p>Witryna Sklep zajmuje się sprzedażą sprzętu elektronicznego. Oferujemy państwu sprzęt w następujących kategoriach: gaming, osprzęt sieciowy, osprzęt komputerowy i wiele więcej. </p>
                    <p>To co tu znajdziecie będzie produktem sprawdzonym przez ludzi w 100% skupionych na zadaniach tego typu. Tak! My to robimy. Jednakże jedna z naszych najważniejszych czynności w pracy przechodzi u klientów niezauważalnie.</p>
                    <p>Naszą pracę wspomaga sztuczna inteligencja "Banana Encounter" naszego pomysłu zaprojektowana by wyciągać z was jak najwięcej informacji w celach reklamowych. Nie trzeba się jadnak obawiać, ponieważ wszystko jest sprawdzane przez nasz zespól do tego przeznaczony. Tak, wiemy co kupiliście! Nawet poza naszym sklepem.</p>
                    <p>Przymusowo w tym sklepie od czasu do czasu można zauważyć reklamy. Jednak nie bójcie się! Zostały one zaprojektowane z myślą by nie odstraszać klientów od razu po ich spostrzeżeniu. Zazwyczaj są to promocje z cen droższych na ceny rynkowe więc nie musicie się obawiać, że co kolwiek tutaj będzie tańsze niż bułka z serem za 25zł.</p>
                    <p>Pamiętaj aby pić wodę! Zawsze dbamy o naszych klientów.</p>
                    </article>
            </div>
        </div>
    )
}