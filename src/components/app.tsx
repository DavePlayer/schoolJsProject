import * as React from 'react'
import './../main'
import { ProductsTable } from './productsTable'
import { AddProduct } from './AddProduct'
import { useSelector } from 'react-redux'
import { Istate } from './reducers/combined'
import { TrolleyTable } from './trolleyTable'
import { Nav } from './nav'
import { Footer } from './footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Shop } from './shop'
import { Home } from './Home'

export const App:React.FC = () => {
    return (
        <Router> 
            <Nav />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/shop" component={Shop} />
                <Route path="/contact" component={contact} />
            </Switch>
            <Footer />
        </Router>
    )
}

const contact:React.FC = () => {
    return(
        <h1 style={{textAlign: 'center'}}>WORK IN PROGRESS</h1>
    )
}