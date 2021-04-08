import React, { useContext , useState } from 'react'
import {Link} from "react-router-dom"
import "./header.css"
import {MyContext} from "../contexts/WindowContexts"

const Header = () => {

    const [events, setEvents] = useState({
        mouseHover : false,
        headerMenuDisplay : false 
    })

    const values = useContext(MyContext);

    const headerStyle = {
        lessThan1230 : {
            height: "70px"
        },
        lessThan1026 : {
            height: "50px",
            padding: "0 10px"
        },
        lessThan730 : {
            height: events.headerMenuDisplay ? "40vH" : "10vH",
            padding: "20px 10px 0 10px",
            display: "block"
        }
    }

    const headerLogo = {
        lessThan730 : {
            height: "1.5rem"
        }
    }

    const headerLogoLink = {
        lessThan1230 : {
            fontSize: "2rem"
        },
        lessThan1026 : {
            fontSize: "1.5rem"
        },
        lessThan730 : {
            fontSize: "1.5rem"
        },
        lessThan467 : {
            fontSize: "1.1rem"
        }
    }

    const headerMenu = {
        lessThan730 : {
            flexDirection: "column",
            width: "100%",
            padding: "5% 0",
            display: events.headerMenuDisplay ? "flex" : "none"
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
        },
        lessThan730 : {
            fontSize: "1em",
            width : "100%",
            textAlign: "center",
            borderTop : events.mouseHover && "0" ,
            borderBottom : events.mouseHover && "0",
            margin: "1em 0"

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

    const headerMenuDIsplayByClick = () => {
        setEvents((prevVal)=>{
            return ({
                ...prevVal,
                headerMenuDisplay: !prevVal.headerMenuDisplay
            })
        })
    }

    return (
        <div className="header" style={values.onWidthLessThanOrEqual(1230) ? values.onWidthLessThanOrEqual(1026) ? values.onWidthLessThanOrEqual(730)? headerStyle.lessThan730 : headerStyle.lessThan1026 : headerStyle.lessThan1230 : null}>
            <div className="header-logo" style={values.onWidthLessThanOrEqual(730)? headerLogo.lessThan730 : null}>
                <Link to="/" style={values.onWidthLessThanOrEqual(1230) ? values.onWidthLessThanOrEqual(1026) ? values.onWidthLessThanOrEqual(730)? values.onWidthLessThanOrEqual(467)? headerLogoLink.lessThan467 : headerLogoLink.lessThan730 : headerLogoLink.lessThan1026 : headerLogoLink.lessThan1230 : null} > NATARAJA SWEETS</Link>
            </div>
            <div className="header-menus" style={values.onWidthLessThanOrEqual(730)? headerMenu.lessThan730 : null}>
                {/* <Link className="link-items" onMouseEnter={linkMenuHoverEnter} onMouseLeave={linkMenuHoverLeave} style={values.onWidthLessThanOrEqual(1230) ? values.onWidthLessThanOrEqual(1026) ? values.onWidthLessThanOrEqual(730)? menuLinkStyle.lessThan730 : menuLinkStyle.lessThan1026 : menuLinkStyle.lessThan1230 : null} to="/"> Home</Link> */}
                <Link className="link-items" onMouseEnter={linkMenuHoverEnter} onMouseLeave={linkMenuHoverLeave} style={values.onWidthLessThanOrEqual(1230) ? values.onWidthLessThanOrEqual(1026) ? values.onWidthLessThanOrEqual(730)? menuLinkStyle.lessThan730 : menuLinkStyle.lessThan1026 : menuLinkStyle.lessThan1230 : null} to="/about"> About</Link>
                <Link className="link-items" onMouseEnter={linkMenuHoverEnter} onMouseLeave={linkMenuHoverLeave} style={values.onWidthLessThanOrEqual(1230) ? values.onWidthLessThanOrEqual(1026) ? values.onWidthLessThanOrEqual(730)? menuLinkStyle.lessThan730 : menuLinkStyle.lessThan1026 : menuLinkStyle.lessThan1230 : null} to="/products"> Products</Link>
                <Link className="link-items" onMouseEnter={linkMenuHoverEnter} onMouseLeave={linkMenuHoverLeave} style={values.onWidthLessThanOrEqual(1230) ? values.onWidthLessThanOrEqual(1026) ? values.onWidthLessThanOrEqual(730)? menuLinkStyle.lessThan730 : menuLinkStyle.lessThan1026 : menuLinkStyle.lessThan1230 : null} to="/contacts"> Contacts</Link>
            </div>
            {values.onWidthLessThanOrEqual(730) && 
            <div className="hamburger-menu" onClick={headerMenuDIsplayByClick}>
                <span className="menu-line"></span> 
                <span className="menu-line"></span>
                <span className="menu-line"></span>
            </div>
            }
        </div>
    )
}

export default Header
