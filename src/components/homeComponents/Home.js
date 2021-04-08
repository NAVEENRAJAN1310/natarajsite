import React, {useContext , useState, useEffect, useRef} from 'react'
import {MyContext} from "../contexts/WindowContexts"
import "../homeComponents/home.css"
import ImageCarousal from "../reusableComponents/imageCarousal/ImageCarousal"
import imagePaths from "../images/ImagePaths"

const Home = () => {
    const values = useContext(MyContext);
    const [homeLeftHeight, setHomeLeftHeight] = useState(0);

    const homeLeftEle = useRef();

    useEffect(()=>{
        setHomeLeftHeight(homeLeftEle.current.offsetHeight);
    },[])

    const homeStyle = {
        greaterThan1556 : {
            marginTop : "50px"
        },
        lessThan1230 : {
            marginTop : "50px"
        },
        lessThan1026 : {
            marginTop : "60px"
        },
        lessThan730 : {
            flexDirection : "column"
        }
    }

    const homeLeftStyle = {
        lessThan730 : {
            width : "100%"
        }
    }

    const homeleftHeader1 = {
        lessThan1230 : {
            fontSize : "3.5rem"
        },
        lessThan1026 : {
            fontSize : "3rem"
        },
        lessThan730 : {
            fontSize : "2.5rem",
            width : "100%",
            textAlign : "center"
        }
    }

    const homeleftHeader2 = {
        lessThan1230 : {
            fontSize : "2.5rem"
        },
        lessThan1026 : {
            fontSize : "2.5rem"
        },
        lessThan730 : {
            fontSize : "1.5rem",
            width : "100%",
            textAlign : "center"
        }
    }

    const homeleftText1 = {
        lessThan1230 : {
            fontSize : "1.5rem"
        },
        lessThan1026 : {
            fontSize : "1.5rem"
        },
        lessThan730 : {
            fontSize : "1.5rem",
            width : "100%",
            textAlign : "center"
        }
    }

    const homeleftText2 = {
        lessThan1230 : {
            fontSize : "1.5rem"
        },
        lessThan1026 : {
            fontSize : "1.5rem"
        },
        lessThan730 : {
            fontSize : "1.5rem",
            width : "100%",
            textAlign : "center"
        }
    }

    const homeRightStyle = {
        lessThan730 : {
            width : "100%",
        }
    }

    return (
        <>
            <div className="home" style={values.onWidthGreaterThanOrEqual(1556) ? homeStyle.greaterThan1556 : values.onWidthLessThanOrEqual(1230) ? values.onWidthLessThanOrEqual(1026) ? values.onWidthLessThanOrEqual(730) ? homeStyle.lessThan730 : homeStyle.lessThan1026 : homeStyle.lessThan1230 : null}>
                <div className="home-left" ref={homeLeftEle} style={values.onWidthLessThanOrEqual(730) ? homeLeftStyle.lessThan730 : null}>
                        <h1 className="home-left-hdr1" style={values.onWidthLessThanOrEqual(1230) ? values.onWidthLessThanOrEqual(1026) ? values.onWidthLessThanOrEqual(730) ? homeleftHeader1.lessThan730 : homeleftHeader1.lessThan1026 : homeleftHeader1.lessThan1230 : null}>lorem ipsum sdhvdsjv</h1>
                        <h1 className="home-left-hdr2" style={values.onWidthLessThanOrEqual(1230) ? values.onWidthLessThanOrEqual(1026) ? values.onWidthLessThanOrEqual(730) ? homeleftHeader2.lessThan730 : homeleftHeader2.lessThan1026 : homeleftHeader2.lessThan1230 : null}>lorem ipsum sdhvdsjv</h1>
                        <p className="home-left-text1" style={values.onWidthLessThanOrEqual(1230) ? values.onWidthLessThanOrEqual(1026) ? values.onWidthLessThanOrEqual(730) ? homeleftText1.lessThan730 : homeleftText1.lessThan1026 : homeleftText1.lessThan1230 : null}>hdvhdsv sdjhvjdsv ejvsdv advcadgv</p>
                        <p className="home-left-text2" style={values.onWidthLessThanOrEqual(1230) ? values.onWidthLessThanOrEqual(1026) ? values.onWidthLessThanOrEqual(730) ? homeleftText2.lessThan730 : homeleftText2.lessThan1026 : homeleftText2.lessThan1230 : null}>hdvhdsv sdjhvjdsv ejvsdv advcadgv</p>
                </div>
                <div className="home-right" style={values.onWidthLessThanOrEqual(730) ? homeRightStyle.lessThan730 : null}>
                    <div className="imageContainer">
                        <ImageCarousal setHeight = {homeLeftHeight} imageSrcArray = {imagePaths}/>
                    </div>
                </div>
            </div>
            <h6>{values.size.wwidth}</h6>
            <h6>{values.size.wheight}</h6>
        </>
    )
}

export default Home
