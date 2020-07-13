import React, {useEffect, useState} from "react";
import {Button, Col, Form, Image, Row} from "react-bootstrap";
import {getInvitationText} from "../../util/GetAPI";
import inviteImage from "../../assets/invite2.jpg";
import 'moment-timezone';
import 'moment/locale/ru';
import {API_BASE_URL, translation} from "../../constants";

let parse = require('html-react-parser');
const Invitation =(props)=>{
    const [invitationText,setInvitationText]=useState('')
    const [date,setDate]=useState('')
    const getInvitationTextFromAPI=(signal)=>{
        let promise = getInvitationText(signal)
        promise
            .then(response => {
                setDate(new Date(response.finalDate))
                setInvitationText(response.invitationText)
            }).catch(() => {
        });
    }
    useEffect(()=>{
        const abortController = new AbortController()
        const signal = abortController.signal
        getInvitationTextFromAPI(signal);
        return function cleanup() {
            abortController.abort()
        }
    },[])

    return(
        <div id={"invitation"} className={"mainPageBlock evenBlock"}>
                <Row >
                    <Col md={{span:4,offset:8}}>
                        <h1 className={"text-center title"}><span className={"headline"}>{translation.menu.invitation}</span></h1>
                        <div>
                            <p className={"text-center site-text"}>Пожалуйста, заполните информацию о себе!</p>
                            <Form>
                                <Form.Group>
                                    <Form.Check inline label="Приду" type={"radio"} id={`inline-radio-1`} />
                                    <Form.Check inline label="Не приду" type={"radio"} id={`inline-radio-2`} />
                                </Form.Group>
                                <Form.Group controlId="name">
                                    <Form.Label>Имя<sup>*</sup></Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>
                                <Form.Group controlId="lastname">
                                    <Form.Label>Фамилия<sup>*</sup></Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>
                                <Form.Group controlId="email">
                                    <Form.Label>Email<sup>*</sup></Form.Label>
                                    <Form.Control type="email"/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Для вашего удобства будет организован трансфер от метро .. время отправления ...</Form.Label>
                                    <Form.Check inline label="Нужен трансфер" type={"radio"} id={`inline-radio-1`} />
                                    <Form.Check inline label="Приеду сам" type={"radio"} id={`inline-radio-2`} />
                                </Form.Group>
                                <Button style={{"background-color":"#4e4038","border-color":"#4e4038"}} variant="primary" type="submit">
                                    Отправить
                                </Button>
                            </Form>
                            <div  style={{"marginTop":"20px"}}><b>Просим Вас подтвердить своё присутствие на нашем празднике до <br/> 1 августа 2020</b></div>
                        </div>
                    </Col>

                </Row>
        </div>
    )
}
export default Invitation;