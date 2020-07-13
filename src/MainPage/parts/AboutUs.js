import React, {useEffect, useState} from "react";
import {Col, Image, Row} from "react-bootstrap";
import {getAllAboutUs} from "../../util/GetAPI";
import {API_BASE_URL, translation} from "../../constants";
import noImage from "../../assets/no-image.jpg";
let parse = require('html-react-parser');
const AboutUs =(props)=>{
    const [personOne,setPersonOne]=useState({
        name:'',
        photoName:"no-image.jpg",
        about:''
    })
    const [personTwo,setPersonTwo]=useState({
        name:'',
        photoName:'no-image.jpg',
        about:''
    })

    const getAboutUsList=(signal)=>{
        let promise = getAllAboutUs(signal)
        promise
            .then(response => {
                setPersonOne(response[0])
                setPersonTwo(response[1])
            }).catch(() => {
        });

    }
    const addDefaultSrc=(ev)=>{
        ev.target.src = API_BASE_URL+"/admin/files/no-image.jpg"
    }
    useEffect(()=>{
        const abortController = new AbortController()
        const signal = abortController.signal
        getAboutUsList(signal);
        return function cleanup() {
                abortController.abort()
        }
    },[])
    return(
        <div id={"aboutUs"} className={"mainPageBlock odBlock"}>
            <h1 style={{"marginBottom":"50px"}} className={"text-center title"}><span className={"headline"}>{translation.menu.aboutUs}</span></h1>
                <Row>
                    <Col className="text-center" md={{span:3,offset:2}}>
                        <Image  style={{"height":"300px","marginBottom":"20px"}} src={noImage} onError={addDefaultSrc}/>
                        <div style={{"marginBottom":"20px"}}><b>{translation.fianceeName}</b></div>
                        <div>{parse(personOne.about)}</div>
                    </Col>
                    <Col className="text-center" md={{span:3,offset:2}}>
                        <div>
                            <Image style={{"height":"300px","marginBottom":"20px"}}  src={noImage} onError={addDefaultSrc}/>
                        </div>

                        <div style={{"marginBottom":"20px"}}><b>{translation.fianceName}</b></div>
                        <div>{parse(personTwo.about)}</div>
                    </Col>
                </Row>


        </div>
    )
}
export default AboutUs;