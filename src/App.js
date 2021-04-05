import React from 'react'
import {BrowserRouter , Route , Switch} from "react-router-dom"
import Home from "./components/homeComponents/Home"
import About from "./components/aboutComponents/About"
import Products from "./components/productComponents/Products"
import Contacts from "./components/contactComponents/Contacts"
import Header from "./components/headerComponents/Header"
import "./App.css"
import WindowContexts from "./components/contexts/WindowContexts"

const App = () => {
    return (
        <>
            <WindowContexts>
                <BrowserRouter>
                    <div className="main-container">
                        <Header />
                        <div className="route-Class">
                            <Switch>
                                <Route path="/about" component={About} />
                                <Route path="/products" component={Products} />
                                <Route path="/contacts" component={Contacts} />
                                <Route path="/" component={Home} />
                            </Switch>
                        </div>
                    </div>
                </BrowserRouter>
            </WindowContexts>
        </>
    )
}

export default App
