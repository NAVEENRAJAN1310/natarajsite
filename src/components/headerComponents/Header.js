import React, { useContext , useState } from 'react'
import {Link} from "react-router-dom"
import "./header.css"
import {MyContext} from "../contexts/WindowContexts"

const Header = () => {

    const [events, setEvents] = useState({
        mouseHover : false 
    })

    const values = useContext(MyContext);

    const headerStyle = {
        lessThan1230 : {
            height: "70px"
        },
        lessThan1026 : {
            height: "50px",
            padding: "0 10px"
        }
    }

    const headerLogoLink = {
        lessThan1230 : {
            fontSize: "2rem"
        },
        lessThan1026 : {
            fontSize: "1.5rem"
        }
    }

    const menuLinkStyle = {
        lessThan1230: {
            fontSize: "1.5rem"
        },
        lessThan1026 : {
            fontSize: "1rem",
            borderTop : events.mouseHover && "0" ,
            borderBottom : events.mouseHover && "0"
        }
        
    }

    const linkMenuHoverEnter = () => {
        if(values.onWidthLessThanOrEqual(1026)) {
            setEvents((prevVal)=>{
                return ({
                    ...prevVal,
                    mouseHover: true
                })
            })
        }
    }

    const linkMenuHoverLeave = () => {
        if(values.onWidthLessThanOrEqual(1026)) {
            setEvents((prevVal)=>{
                return ({
                    ...prevVal,
                    mouseHover: false
                })
            })
        }
    }

    return (
        <div className="header" style={values.onWidthLessThanOrEqual(1230) ? values.onWidthLessThanOrEqual(1026) ? headerStyle.lessThan1026 : headerStyle.lessThan1230 : null}>
            <div className="header-logo">
                <Link to="/"style={values.onWidthLessThanOrEqual(1230) ? values.onWidthLessThanOrEqual(1026) ? headerLogoLink.lessThan1026 : headerLogoLink.lessThan1230 : null} > NATARAJA SWEETS</Link>
            </div>
            <div className="header-menus" >
                <Link className="link-items" onMouseEnter={linkMenuHoverEnter} onMouseLeave={linkMenuHoverLeave} style={values.onWidthLessThanOrEqual(1230) ? values.onWidthLessThanOrEqual(1026) ? menuLinkStyle.lessThan1026 : menuLinkStyle.lessThan1230 : null} to="/"> Home</Link>
                <Link className="link-items" onMouseEnter={linkMenuHoverEnter} onMouseLeave={linkMenuHoverLeave} style={values.onWidthLessThanOrEqual(1230) ? values.onWidthLessThanOrEqual(1026) ? menuLinkStyle.lessThan1026 : menuLinkStyle.lessThan1230 : null} to="/about"> About</Link>
                <Link className="link-items" onMouseEnter={linkMenuHoverEnter} onMouseLeave={linkMenuHoverLeave} style={values.onWidthLessThanOrEqual(1230) ? values.onWidthLessThanOrEqual(1026) ? menuLinkStyle.lessThan1026 : menuLinkStyle.lessThan1230 : null} to="/products"> Products</Link>
                <Link className="link-items" onMouseEnter={linkMenuHoverEnter} onMouseLeave={linkMenuHoverLeave} style={values.onWidthLessThanOrEqual(1230) ? values.onWidthLessThanOrEqual(1026) ? menuLinkStyle.lessThan1026 : menuLinkStyle.lessThan1230 : null} to="/contacts"> Contacts</Link>
            </div>
            {values.onWidthLessThanOrEqual(500) && 
            <div className="hamburger-menu">
                <span className="menu-line"></span>
                <span className="menu-line"></span>
                <span className="menu-line"></span>
            </div>
            }
        </div>
    )
}

export default Header
