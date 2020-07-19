import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import header from "../../assets/header3.jpg"
import 'moment/locale/ru';
import 'moment/locale/sv';
import Countdown from "./Countdown";
const Header =(props)=>{
    const date = ""

    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return(
        <div id={"home"} style={{"position":"relative"}}>
            <Row>
                <Col style={{"overflow":"hidden"}}>
                    <Image id={"headerImage"}
                           src={header} alt={"header image"}/>
                    {/*<div className={"timerBlock"}>*/}
                        <div className={"blockText"}>
                            <div className={"datePlace"}>29 АВГУСТА, 15:00 | Загородный клуб «Artiland»</div>
                            <div className={"timer"}>
                                <Countdown date={`${year}-08-29T15:00:00`} />
                            </div>
                            <div className={"hashtag"}>#скажитеДАчувствам</div>
                        </div>
                    {/*</div>*/}
                </Col>
            </Row>

        </div>
    )
}
export default Header;