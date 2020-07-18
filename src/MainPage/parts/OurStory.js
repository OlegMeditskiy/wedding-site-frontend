import React, {useEffect, useState} from "react";
import {Col, Image, Row} from "react-bootstrap";
import {getStory} from "../../util/GetAPI";
import {translation} from "../../constants";
import noImage from "../../assets/no-image.jpg";
import aboutUs from "../../assets/aboutUs.jpg"
let parse = require('html-react-parser');
const OurStory =(props)=>{
    // const [ourStory,setOurStory]=useState('')
    // const getStoryFromAPI=(signal)=>{
    //     let promise = getStory(signal)
    //     promise
    //         .then(response => {
    //             setOurStory(response.story)
    //         }).catch(() => {
    //
    //     });
    // }
    // useEffect(()=>{
    //     const abortController = new AbortController()
    //     const signal = abortController.signal
    //     getStoryFromAPI(signal);
    //     return function cleanup() {
    //         abortController.abort()
    //     }
    //
    // },[])
    return(
        <div id={"ourStory"} style={{"padding": "0"}} className={"mainPageBlock evenBlock"}>
                <Row>
                    <Col style={{"paddingLeft":"0px","paddingRight":"0px"}} md={6}>
                        <Image  style={{"width":"100%"}} src={aboutUs}/>
                    </Col>
                    <Col style={{"padding":"30px 10px 0px 30px"}} md={6}>
                        <h1 style={{"marginBottom":"50px"}} className={"title"}><span className={"headline"}>{translation.menu.ourStory}</span></h1>
                        <div>
                            История
                        </div>
                    </Col>
                </Row>
        </div>
    )
}
export default OurStory;