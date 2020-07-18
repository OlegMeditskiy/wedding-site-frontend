import React, {useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {getInvitationText} from "../../util/GetAPI";
import 'moment-timezone';
import 'moment/locale/ru';
import {translation} from "../../constants";

const Invitation =(props)=>{

    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [coming,setComing]=useState(false)
    const [needTransfer,setNeedTransfer]=useState(false)


    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log("handleSubmit")
    }
    return(
        <div id={"invitation"}  className={"mainPageBlock evenBlock chapter"}>
                <Row >
                    <Col xl={{span:4,offset:8}}>
                        <h1 className={"text-center title"}><span className={"headline"}>{translation.menu.invitation}</span></h1>
                        <div>
                            <p className={"text-center site-text"}>Пожалуйста, заполните информацию о себе!</p>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Check inline checked={coming} label="Приду" type={"radio"} id={`inline-radio-1`} />
                                    <Form.Check inline label="Не приду" type={"radio"} id={`inline-radio-2`} />
                                </Form.Group>
                                <Form.Group controlId="name">
                                    <Form.Label>Имя<sup>*</sup></Form.Label>
                                    <Form.Control onChange={event => setFirstName(event.target.value)} required type="text"/>
                                </Form.Group>
                                <Form.Group controlId="lastname">
                                    <Form.Label>Фамилия<sup>*</sup></Form.Label>
                                    <Form.Control onChange={event => setLastName(event.target.value)} required type="text"/>
                                </Form.Group>
                                <Form.Group controlId="email">
                                    <Form.Label>Email<sup>*</sup></Form.Label>
                                    <Form.Control onChange={event => setEmail(event.target.value)} required type="email"/>
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