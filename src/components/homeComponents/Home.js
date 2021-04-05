import React, {useContext} from 'react'
import {MyContext} from "../contexts/WindowContexts"


const Home = () => {
    const values = useContext(MyContext);
    
    return (
        <div>
            Home Component
            <h1>{values.size.wwidth}</h1>
        </div>
    )
}

export default Home
