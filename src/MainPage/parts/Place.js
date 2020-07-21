import React from "react";
import {Col, Row} from "react-bootstrap";
import {Map, Placemark, YMaps, ZoomControl} from "react-yandex-maps";

const mapData = {
    center: [55.7937886,38.0485991],
    zoom: 5,
};


const coordinates = [
    [55.7937886,38.0485991],
    [55.7937886,38.0485991]
];
const Place =(props)=>{

    return(
        <div  style={{"padding":"0px"}} className={"mainPageBlock odBlock"}>
                <Row>
                    <Col  style={{"paddingLeft":"0","paddingRight":"0","height":"500px"}}>
                            <YMaps>
                                <Map
                                    width={"100%"} height={"100%"}
                                    defaultState={{ center: [55.79325945,38.04944019], zoom: 16 }}>
                                    <ZoomControl options={{ float: 'right' }} />
                                    <Placemark defaultGeometry={[55.79325945,38.05144019]} />
                                </Map>
                            </YMaps>
                        {/*<h1 style={{"marginBottom":"50px",}} className={"text-center title"}><span className={"headline"}>{translation.menu.place}</span></h1>*/}

                        <div className={"beforeMap"}>
                            <div id={"beforeMapText"} className={"text-center"}>
                                <p>
                                    Загородный клуб «Artiland»
                                </p>
                                <p>Московская область, Балашиха,  Новское шоссе, 10.</p>
                            </div>
                        </div>
                    </Col>
                    {/*<Col style={{"paddingLeft":"0","paddingRight":"0"}} md={6}>*/}
                    {/*    <Image  style={{"width":"100%"}} src={artiland}/>*/}
                    {/*</Col>*/}
                </Row>
        </div>
    )
}
export default Place;
