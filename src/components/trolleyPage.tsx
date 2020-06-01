import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Istate } from './reducers/combined'
import { Iproducts } from './reducers/products'
import { removeFromTrolley } from './actions/removeFromTrolley'
import { addProduct } from './actions/addProduct'

export const TrolleyPage:React.FC = () => {
    const trolleyProducts:Array<Iproducts> = useSelector( (o:Istate) => o.productsInTrolley)
    const dispatch = useDispatch()

    const [sum, setSum] = React.useState(0)

    React.useEffect(() => {
        setSum(0)
        trolleyProducts.map((o:Iproducts) => {
            setSum(prev => prev+=o.price)
        })
    }, [trolleyProducts])

    const handleDelete = (id:number, data:Iproducts) => {
        dispatch(removeFromTrolley(id))
        dispatch(addProduct(data))
    }

    const deleteAll = () => {
        trolleyProducts.map( (o:Iproducts) => {
            console.log('deleting: ', o)
            handleDelete(o.id, o)
        })
    }

    return (
        <>
                <article className="trolleyPage">
                    <section className="left">
                        <article className="productSum">
                            <h3>Twój koszyk ({trolleyProducts.length})</h3>
                            <span onClick={() => deleteAll()} className="deleteAll">Usuń wszystko<span className="material-icons">restore_from_trash</span></span>
                        </article>
                        <article className="productsList">
                            {trolleyProducts.length > 0 ? trolleyProducts.map( (o:Iproducts) => {
                                return (
                                    <section className="product">
                                        <figure><img src={o.imgAdress} alt="ss"/></figure>
                                        <div className="info">
                                            <h3>{o.name}</h3>
                                            <ul>
                                                <li>Id: {o.id}</li>
                                                <li>Stan: {o.state}</li>
                                                <li>Typ: {o.type}</li>
                                            </ul>
                                        </div>
                                        <div className="priceDel">
                                            <span onClick={() => handleDelete(o.id, o)} className="material-icons">restore_from_trash</span>
                                            <p>{o.price} zł</p>
                                        </div>
                                    </section>
                                )
                            })
                            :
                                <section className="product">
                                    <h1>Brak produktów w koszyku</h1>
                                </section>

                            }
                        </article>
                    </section>
                    <section className="right">
                        <article className="payment">
                            <p>Do zapłaty</p>
                            <h3>{sum} zł</h3>
                            <button>Wybierz dostawę i płatność</button>
                            <button>Oblicz ratę lub leasing</button>
                        </article>
                        <article className="useless">Dodaj kod rabatowy</article>
                        <article className="useless">Dodaj kartę podarunkową</article>
                    </section>
                    <section className="bottom">
                        <button>Na raty</button>
                        <button>Do Kasy</button>
                    </section>
                </article>
        </>
    )
}