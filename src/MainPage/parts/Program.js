import React, {useEffect, useState} from "react";
import {getProgram} from "../../util/GetAPI";
import {API_BASE_URL, translation} from "../../constants";
import {Col, Image, Row} from "react-bootstrap";
import guests from "../../assets/guests2.png";
import starters from "../../assets/starters2.png";
import arch from "../../assets/arch2.png";
import cake from "../../assets/cake2.png";
import DJ from "../../assets/DJ2.png";
import program from "../../assets/program1.jpg";

const Program =(props)=>{
    // const [program,setProgram]=useState(
    //     {
    //         id:'',
    //         programsParts:[]
    //     }
    // );

    // const getProgramFromAPI =(signal)=>{
    //     let promise = getProgram(signal)
    //     promise
    //         .then(response => {
    //             setProgram(response)
    //         }).catch(() => {
    //     });
    // }
    // useEffect(()=>{
    //     const abortController = new AbortController()
    //     const signal = abortController.signal
    //     getProgramFromAPI(signal)
    //     return function cleanup() {
    //         abortController.abort()
    //     }
    // },[])
    // const DisplayParts=(props)=>{
    //     const parts = props.programList
    //     const list = parts.map((part,idx)=>{
    //         return (
    //             <div key={idx}>
    //                 <ProgramsPart {...props} programsPart={part}/>
    //             </div>
    //         )
    //     })
    //     return(
    //         <div>
    //             {list}
    //         </div>
    //
    //     )
    // }

    return(
        <div style={{"padding":"0px"}} id={"program"} className={"mainPageBlock evenBlock"}>
            <Row>
                <Col id="rings"style={{"paddingLeft":"0px","paddingRight":"0px","overflow":"hidden"}} xs={12} sm={12} xl={6}>
                    <Image id={"programImage"}  src={program}/>
                </Col>
                <Col style={{"padding":"30px 0px"}} xs={12} sm={12} xl={6} >
                    <h1 className={"text-center title"}><span className={"headline"}>{translation.menu.program}</span></h1>

                    <h3 style={{"padding":"10px 0px"}} className={"text-center"}>29 августа</h3>
                    <div className={"site-text"}>
                        <div className={"text-center"}>
                            <Image style={{"height":"50px"}} src={guests}></Image>
                            <p>15:00 - Сбор гостей</p>
                        </div>
                        <div className={"text-center"}>
                            <Image style={{"height":"50px"}} src={starters}></Image>
                            <p>Приветственный фуршет</p>
                        </div>
                        <div className={"text-center"}>
                            <Image style={{"height":"50px"}} src={arch}></Image>
                            <p>16:00 - Торжественная церемония</p>
                        </div>
                        <div className={"text-center"}>
                            <Image style={{"height":"50px"}} src={cake}></Image>
                            <p>Праздничный ужин</p>
                        </div>
                        <div className={"text-center"}>
                            <Image style={{"height":"50px"}} src={DJ}></Image>
                            <p>Веселье и танцы до упаду</p>
                        </div></div>
                </Col>
            </Row>


        </div>)


}
export default Program;
