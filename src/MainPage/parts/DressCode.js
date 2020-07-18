import React, {useEffect, useState} from "react";
import {getDressCode} from "../../util/GetAPI";
import {Col, Image, Row} from "react-bootstrap";
import {API_BASE_URL, translation} from "../../constants";
import dressCode from "../../assets/colors.png"
const DressCode = (props)=>{

    const returnRead=()=>{
        return(
            <div>
                <Row>
                    <Col id={"dressCodeImage1"} className={"text-center"} lg={6} xl={6}>
                        <Image style={{"max-width":"100%"}} src={dressCode}/>
                    </Col>
                    <Col style={{"padding":"30px 10px 0px 30px"}} className={"text-center site-text"} lg={6}  xl={6}>
                        <h1 style={{"marginBottom":"50px"}} className={"text-center title"}><span className={"headline"}>{translation.menu.dressCode}</span></h1>
                        <div>Мы будем очень признательны, если вы используете цвета нашей свадьбы в своих образах
                        </div>
                        <Image className={"text-center"} id={"dressCodeImage2"} style={{"max-width":"100%"}} src={dressCode}/>
                    </Col>
                </Row>

            </div>


        )
    }
    return(
        <div id={"dressCode"} style={{"padding":"0px"}} className={"mainPageBlock evenBlock"}>
            {returnRead()}
        </div>
    )

}

export default DressCode;