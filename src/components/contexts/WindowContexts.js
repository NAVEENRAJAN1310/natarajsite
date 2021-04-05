import React , { useEffect, useState} from 'react'



const MyContext = React.createContext();

const WindowContexts = ({children}) => {

    const [positions,setPositions] = useState({
        wwidth: window.innerWidth,
        wheight: window.innerHeight
    })

    useEffect(()=>{
        const handleResize = ()=> {
            setPositions({
                wwidth : window.innerWidth,
                wheight: window.innerHeight
            })
        }
        window.addEventListener("resize",handleResize);
        return(()=>{
            window.removeEventListener("resize",handleResize);
        })
    },[])

    const onWidthLessThanOrEqual = (width) => positions.wwidth <=  width ? true : false

    const onWidthGreaterThanOrEqual = (width) => positions.wwidth >=  width ? true : false

    return (
        <>
           <MyContext.Provider value={{
               size: positions,
               onWidthLessThanOrEqual: onWidthLessThanOrEqual,
               onWidthGreaterThanOrEqual:onWidthGreaterThanOrEqual
           }}>
                {children}
           </MyContext.Provider> 
        </>
    )
}

export default WindowContexts

export {MyContext}
