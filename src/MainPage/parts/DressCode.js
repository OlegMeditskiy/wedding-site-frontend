import React, {useEffect, useState} from "react";
import {getDressCode} from "../../util/GetAPI";
import {Col, Image, Row} from "react-bootstrap";
import {API_BASE_URL, translation} from "../../constants";
import dressCode from "../../assets/colors.png"
import gift from "../../assets/gift4.jpeg"
const DressCode = (props)=>{

    const returnRead=()=>{
        return(
            <div>
                <h1 id={"details"} style={{"padding":"30px 0px 0px 0px"}} className={"text-center title"}><span className={"headline"}>Детали</span></h1>
                <Row>
                    {/*<Col id={"dressCodeImage1"} className={"text-center"} lg={6} xl={6}>*/}
                    {/*    <Image style={{"max-width":"100%"}} src={dressCode}/>*/}
                    {/*</Col>*/}

                    <Col style={{"padding":"30px 10px 0px 10px"}} className={"text-center site-text"} lg={12}  xl={12}>
                        <h3  className={"text-center title"}>Дресс-код</h3>
                        <div>
                            <p style={{"padding":"30px 0px"}}>Мы будем очень признательны, если вы используете цвета нашей свадьбы в своих образах</p>
                            <Image className={"text-center"} id={"dressCodeImage2"} style={{"max-width":"100%","display":"inline-block"}} src={dressCode}/>

                        </div>
                    </Col>
                    <Col style={{"padding":"30px 10px 0px 10px"}} className={"text-center site-text"} lg={12}  xl={12}>
                        <h3  className={"text-center title"}>Подарки</h3>
                        <div style={{"padding":"30px 0px"}}>
                            <Image className={"text-center"} id={"gift"} style={{"display":"inline-block"}} src={gift}/>
                            <p style={{"padding":"30px 0px"}} >Мы не хотим обременять вас поисками подарка, поэтому будем рады вашему вкладу в наш семейный бюджет</p>
                        </div>
                    </Col>
                </Row>

            </div>


        )
    }
    return(
        <div style={{"padding":"0px"}} className={"mainPageBlock odBlock"}>
            {returnRead()}
        </div>
    )

}

export default DressCode;
