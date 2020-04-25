import * as React from 'react'
import './../main'
import { Nav } from './nav'
import { Footer } from './footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AdminPanel } from './adminPanel'
import { Home } from './Home'

export const App:React.FC = () => {
    const Test = PageHolder
    return (
        <Router> 
            <Switch>
                <Route path="/schoolJsProject/" exact render={() => <Test children={<Home />}/>} />
                <Route path="/schoolJsProject/admin" exact render={() => <PageHolder children={<AdminPanel />}/>} />
                <Route path="/schoolJsProject/shop" exact render={() => <PageHolder />} />
                <Route path="/schoolJsProject/contact" exact render={() => <PageHolder /> } />
                <Route component={err404} />
            </Switch>
        </Router>
    )
}

interface IPropHolder {
    children?: React.ReactNode,
}

const PageHolder:React.FC = (props:IPropHolder) => {
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