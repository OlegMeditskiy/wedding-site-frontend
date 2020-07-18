import React, {useEffect, useState} from "react";
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import {getInvitationText} from "../../util/GetAPI";
import 'moment-timezone';
import 'moment/locale/ru';
import {translation} from "../../constants";
import {createPersonalInvitation} from "../../util/CreateAPI";

const Invitation =(props)=>{

    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [coming,setComing]=useState(false)
    const [needTransfer,setNeedTransfer]=useState(false)
    const [whoComingWithMe,setWhoComingWithMe]=useState('')



    const handleSubmit=(event)=>{
        event.preventDefault();

        const request = {
            coming:coming,
            firstName:firstName,
            lastName:lastName,
            email:email,
            needTransfer:needTransfer,
            whoComingWithMe:whoComingWithMe
        }
        createPersonalInvitation(request)
            .then(() => {
                console.log("create")
            })
            .catch((error) => {

            });
        console.log(request)
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const modal = () =>{
        return <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>С кем вы будете?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Eсли Вы придете одни, то оставьте поле пустым.</p>
                <textarea style={{"width": "100%","height": "100px"}} value={whoComingWithMe} onChange={event=>setWhoComingWithMe(event.target.value)}></textarea>
            </Modal.Body>
            {/*<Modal.Footer>*/}
            {/*    /!*<Button variant="secondary" onClick={handleClose}>*!/*/}
            {/*    /!*    Закрыть*!/*/}
            {/*    /!*</Button>*!/*/}
            {/*    <Button variant="primary" onClick={handleClose}>*/}
            {/*        Сохранить*/}
            {/*    </Button>*/}
            {/*</Modal.Footer>*/}
        </Modal>
    }

    const handleComingBox = (event) => {
            setComing(event.target.value)
    }
    const handleTransferBox = (event) => {
        setNeedTransfer(event.target.value)
    }

    return(
        <div id={"invitation"}  className={"mainPageBlock evenBlock chapter"}>
            {modal()}
                <Row >
                    <Col xl={{span:4,offset:8}}>
                        <h1 className={"text-center title"}><span className={"headline"}>{translation.menu.invitation}</span></h1>
                        <div>
                            <p className={"text-center site-text"}>Пожалуйста, заполните информацию о себе!</p>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group as={Row}>
                                        <Form.Check
                                            onClick={handleShow}
                                            required
                                            inline
                                            type="radio"
                                            label="Приду"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios1"
                                            // onChange={event=>handleComingBox(event)}
                                            value={true}
                                            feedback="You must agree before submitting."
                                        />

                                        <Form.Check

                                            inline
                                            type="radio"
                                            label="Не приду"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios2"
                                            onChange={event=>handleComingBox(event)}
                                            value={false}
                                        />

                                </Form.Group>
                                <Form.Group controlId="name">
                                    <Form.Label>Имя<sup>*</sup></Form.Label>
                                    <Form.Control onChange={event => setFirstName(event.target.value)} required type="text"/>
                                    <Form.Control.Feedback type="invalid">
                                        Пожалуйста напишите ваше имя.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="lastname">
                                    <Form.Label>Фамилия<sup>*</sup></Form.Label>
                                    <Form.Control onChange={event => setLastName(event.target.value)} required type="text"/>
                                </Form.Group>
                                <Form.Group controlId="email">
                                    <Form.Label>Email<sup>*</sup></Form.Label>
                                    <Form.Control onChange={event => setEmail(event.target.value)} required type="email"/>
                                </Form.Group>
                                    <Form.Label>Для вашего удобства будет организован трансфер от метро .. время отправления ...</Form.Label>
                                    <Form.Group as={Row}>
                                        <Form.Check
                                            required
                                            inline
                                            type="radio"
                                            label="Нужен трансфер"
                                            name="formHorizontalRadios3"
                                            id="formHorizontalRadios3"
                                            onChange={event=>handleTransferBox(event)}
                                            value={true}
                                        />
                                        <Form.Check
                                            inline
                                            type="radio"
                                            label="Приеду сам"
                                            name="formHorizontalRadios4"
                                            id="formHorizontalRadios4"
                                            onChange={event=>handleTransferBox(event)}
                                            value={false}
                                        />

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