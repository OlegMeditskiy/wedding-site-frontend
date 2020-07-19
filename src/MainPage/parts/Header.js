import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import headerIMG from "../../assets/header3.jpg"
import 'moment/locale/ru';
import 'moment/locale/sv';
import Countdown from "./Countdown";
import ourStory from "../../assets/ourStory1.jpg";
const Header =(props)=>{
    const date = ""

    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return(
        <div id={"home"}>
            <Row>
                <Col >
                    {/*<Image id={"headerImage"}*/}
                    {/*       src={headerIMG} alt={"header image"}/>*/}
                    <Image id={"aboutUsImage"} src={ourStory}/>
                    {/*<div className={"timerBlock"}>*/}
                    {/*    <div className={"blockText"}>*/}
                    {/*        <div className={"datePlace"}>29 АВГУСТА, 15:00 | Загородный клуб «Artiland»</div>*/}
                    {/*        <div className={"timer"}>*/}
                    {/*            <Countdown date={`${year}-08-29T15:00:00`} />*/}
                    {/*        </div>*/}
                    {/*        <div className={"hashtag"}>#скажитеДАчувствам</div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </Col>
            </Row>

        </div>
    )
}
export default Header;