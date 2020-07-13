import React, {useEffect, useState} from "react";
import {getProgram} from "../../util/GetAPI";
import ProgramsPart from "./ProgramsPart";
import {API_BASE_URL, translation} from "../../constants";
import {Col, Image, Row} from "react-bootstrap";

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
                {/*<DisplayParts {...props} update={getProgramFromAPI} programList={program.programsParts} />*/}
            <Row>
                <Col md={{span:2,offset:5}}>
                    <h3 className={"text-center"}>29 августа</h3>
                    <div className={"site-text"}>
                        <div className={"text-center"}>
                        <Image style={{"height":"100px"}} src={API_BASE_URL+"/admin/files/guests.png"}></Image>
                        <p>15:00 - Сбор гостей</p>
                    </div>
                        <div className={"text-center"}>
                            <Image style={{"height":"100px"}} src={API_BASE_URL+"/admin/files/starters.png"}></Image>
                            <p>Приветственный фуршет</p>
                        </div>
                        <div className={"text-center"}>
                            <Image style={{"height":"100px"}} src={API_BASE_URL+"/admin/files/cake.png"}></Image>
                            <p>Праздничный ужин</p>
                        </div>
                        <div className={"text-center"}>
                            <Image style={{"height":"100px"}} src={API_BASE_URL+"/admin/files/DJ.png"}></Image>
                            <p>Веселье и танцы до упаду</p>
                        </div></div>

                </Col>
            </Row>


        </div>)


}
export default Program;