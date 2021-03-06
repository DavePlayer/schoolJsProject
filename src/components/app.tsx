import * as React from 'react'
import './../main'
import { Nav } from './nav'
import { Footer } from './footer'
import { BrowserRouter as Router, Switch, Route, HashRouter } from 'react-router-dom'
import { AdminPanel } from './adminPanel'
import { Home } from './Home'
import { Shop } from './shop'
import { ProductPage } from './productPage'
import { TrolleyPage } from './trolleyPage'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { loadFromLocalStorage } from './actions/loadFromLocalStorage'
import { loadTrolleyFromLocalStorage } from './actions/loadTrolleyFromLocalStorage'
import { Contact } from './reducers/contact'

export const App:React.FC = () => {
    const Test = PageHolder
    return (
        <HashRouter basename="schoolJsProject">
            <Switch>
                    <Route path="/" exact render={() => <Test children={<Home />}/>} />
                    <Route path="/admin" exact render={() => <PageHolder children={<AdminPanel />}/>} />
                    <Route path="/shop" exact render={() => <PageHolder children={<Shop />} />} />
                    <Route path="/trolley" exact render={() => <PageHolder children={<TrolleyPage />} />} />
                    <Route path="/shop/:id" component={ProductPage} />
                    <Route path="/contact" exact render={() => <PageHolder children={<Contact />} /> } />
                    <Route component={err404} />
            </Switch>
        </ HashRouter>
    )
}

interface IPropHolder {
    children?: React.ReactNode,
}

const PageHolder:React.FC = (props:IPropHolder) => {
    const dispatch = useDispatch();
    useEffect(() => {
          dispatch(loadFromLocalStorage());
          dispatch(loadTrolleyFromLocalStorage());
    }, []);
    return(
        <>
            <Nav />
            {props.children?
                props.children
            :
                <h1 style={{textAlign: 'center'}}>WORK IN PROGRESS</h1>
            }
            <Footer />
        </>
    )
}

const err404:React.FC = () => {
    return(
        <h1 style={{textAlign: 'center'}}>Error 404 Page Not Found</h1>
    )
}