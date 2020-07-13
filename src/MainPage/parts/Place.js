import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import {translation} from "../../constants";
import place from "../../assets/place.jpg";
const Place =(props)=>{

    return(
        <div id={"place"} className={"mainPageBlock odBlock"}>
            <h1 style={{"marginBottom":"50px"}} className={"text-center title"}><span className={"headline"}>{translation.menu.place}</span></h1>
                <Row>
                    <Col md={{span:8,offset:2}}>
                        <div className={"text-center site-text"} style={{"marginBottom":"50px"}}>
                            <p>
                                Загородный клуб «Artiland”
                            </p>
                            <p>Московская область, Балашиха,  Новское шоссе, 10.</p>
                        </div>
                        <div style={{"marginBottom":"20px"}} className={"text-center"}>
                            <Image style={{"max-width":"100%"}}
                                   src={place}/>
                        </div>
                    </Col>
                </Row>
        </div>
    )
}
export default Place;