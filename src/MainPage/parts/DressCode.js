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
                    {/*<Col id={"dressCodeImage1"} className={"text-center"} lg={6} xl={6}>*/}
                    {/*    <Image style={{"max-width":"100%"}} src={dressCode}/>*/}
                    {/*</Col>*/}
                    <Col style={{"padding":"30px 10px 0px 30px"}} className={"text-center site-text"} lg={12}  xl={12}>
                        <h1  className={"text-center title"}><span className={"headline"}>{translation.menu.dressCode}</span></h1>
                        <div style={{"padding":"30px 0px"}}>
                            <p>Мы будем очень признательны, если вы используете цвета нашей свадьбы в своих образах</p>
                            <Image className={"text-center"} id={"dressCodeImage2"} style={{"max-width":"100%","display":"inline-block"}} src={dressCode}/>

                        </div>
                    </Col>
                </Row>

            </div>


        )
    }
    return(
        <div id={"dressCode"} style={{"padding":"0px"}} className={"mainPageBlock odBlock"}>
            {returnRead()}
        </div>
    )

}

export default DressCode;