import React, {useEffect, useState} from "react";
import {getDressCode} from "../../util/GetAPI";
import {Col, Image, Row} from "react-bootstrap";
import {API_BASE_URL, translation} from "../../constants";
import dressCode from "../../assets/dress-code-colors.jpg"
const DressCode = (props)=>{

    const returnRead=()=>{
        return(
            <div>
                <Row>
                    <Col className={"text-center site-text"} md={{span:8,offset:2}}>
                        Мы будем очень признательны, если вы используете цвета нашей свадьбы в своих образах
                    </Col>
                </Row>
                <Row style={{"marginBottom":"50px"}}>
                    <Col style={{"marginTop":"20px"}} className={"text-center"}>
                        <Image style={{"max-width":"100%"}} src={dressCode}/>
                    </Col>
                </Row>

            </div>


        )
    }
    return(
        <div id={"dressCode"} className={"mainPageBlock evenBlock"}>
            <h1 style={{"marginBottom":"50px"}} className={"text-center title"}><span className={"headline"}>{translation.menu.dressCode}</span></h1>
            {returnRead()}
        </div>
    )

}

export default DressCode;