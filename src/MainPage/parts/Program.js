import React, {useEffect, useState} from "react";
import {getProgram} from "../../util/GetAPI";
import ProgramsPart from "./ProgramsPart";
import {API_BASE_URL, translation} from "../../constants";
import {Col, Image, Row} from "react-bootstrap";
import guests from "../../assets/guests.png";
import starters from "../../assets/starters.png";
import arch from "../../assets/arch.png";
import cake from "../../assets/cake.png";
import DJ from "../../assets/DJ.png";

const Program =(props)=>{
    const [program,setProgram]=useState(
        {
            id:'',
            programsParts:[]
        }
    );

    const getProgramFromAPI =(signal)=>{
        let promise = getProgram(signal)
        promise
            .then(response => {
                setProgram(response)
            }).catch(() => {
        });
    }
    useEffect(()=>{
        const abortController = new AbortController()
        const signal = abortController.signal
        getProgramFromAPI(signal)
        return function cleanup() {
            abortController.abort()
        }
    },[])
    const DisplayParts=(props)=>{
        const parts = props.programList
        const list = parts.map((part,idx)=>{
            return (
                <div key={idx}>
                    <ProgramsPart {...props} programsPart={part}/>
                </div>
            )
        })
        return(
            <div>
                {list}
            </div>

        )
    }

    return(
        <div id={"program"} className={"mainPageBlock odBlock"}>
            <h1  style={{"marginBottom":"50px"}} className={"text-center title"}><span className={"headline"}>{translation.menu.program}</span></h1>
            <Row>
                <Col md={{span:4,offset:4}}>
                    <h3 className={"text-center"}>29 августа</h3>
                    <div className={"site-text"}>
                        <div className={"text-center"}>
                        <Image style={{"height":"100px"}} src={guests}></Image>
                        <p>15:00 - Сбор гостей</p>
                    </div>
                        <div className={"text-center"}>
                            <Image style={{"height":"100px"}} src={starters}></Image>
                            <p>Приветственный фуршет</p>
                        </div>
                        <div className={"text-center"}>
                            <Image style={{"height":"100px"}} src={arch}></Image>
                            <p>16:00 - Торжественная церемония</p>
                        </div>
                        <div className={"text-center"}>
                            <Image style={{"height":"100px"}} src={cake}></Image>
                            <p>Праздничный ужин</p>
                        </div>
                        <div className={"text-center"}>
                            <Image style={{"height":"100px"}} src={DJ}></Image>
                            <p>Веселье и танцы до упаду</p>
                        </div></div>

                </Col>
            </Row>


        </div>)


}
export default Program;
