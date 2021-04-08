import React , {useState}from 'react'
import {CSSTransition } from "react-transition-group"
import ArrowPath from "./arrows/ArrowsPath"
import "./imageCarousal.css"

const ImageCarousal = (props) => {

    const [imageState, setimageState] = useState({
        anime : false,
        count : 0
    })

    const [buttonShow,setButtonShow] = useState(false);

    const imageCount =  props.imageSrcArray.length;

    const leftArrowClick = () => {
        const currentCount = imageState.count ===  (imageCount-1) ? 0 : imageState.count <  (imageCount-1) ? imageState.count + 1 : 0;
        setimageState((prev)=>{
            return({
                anime : !prev.anime,
                count : currentCount
            })
        })
    }

    const rightArrowClick = ()=>{
        const currentCount = imageState.count ===  (imageCount-1) ? imageState.count - 1 : imageState.count === 0 ? (imageCount-1) : 0;
        setimageState((prev)=>{
            return({
                anime : !prev.anime,
                count : currentCount
            })
        })
    }

    const carrousalStartStyle = {
        height: props.setHeight,
        padding: "0 10%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden"
    }

    const imgContainer = {
        width: "33vw",
        height : "33vw",
        backgroundColor: "brown",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    const image = {
        width: "inherit",
        height: "inherit"
    }

    const arrowButtonLeft = {
        zIndex : "10",
        position: "absolute",
        top:"50%",
        transform : "TranslateY(-50%)",
        left: "0",
        backgroundColor : "transparent",
        border : "0",
        opacity : buttonShow ? "1" : "0",
        outline: "none"
    }

    const arrowButtonRight = {
        ...arrowButtonLeft,
        transform : "TranslateY(-50%)",
        right: "0",
        left: null,
    }

    return (
        <div className="imageCarrousal" style={carrousalStartStyle}>
            <button style={arrowButtonLeft} onMouseEnter={()=>setButtonShow(true)} onMouseLeave={()=>setButtonShow(false)} onClick={leftArrowClick}><img src={ArrowPath[0].arrowPath} alt="leftArrow"></img></button>
            <button style={arrowButtonRight} onMouseEnter={()=>setButtonShow(true)} onMouseLeave={()=>setButtonShow(false)} onClick={rightArrowClick}><img src={ArrowPath[1].arrowPath} alt="rightArrow"></img></button>
            <div className="img-Container" style={imgContainer} onMouseEnter={()=>setButtonShow(true)} onMouseLeave={()=>setButtonShow(false)}>
                <CSSTransition in={imageState.anime} timeout={1000} className="item">
                    <img src={props.imageSrcArray[imageState.count].imagePath} alt="image1" style={image} className="images"></img>
                </CSSTransition>
            </div>
        </div>
    )
}

export default ImageCarousal
