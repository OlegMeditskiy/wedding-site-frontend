import React, {useState} from "react";
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
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
    const [showForm,setShowForm]=useState(true)
    const [answered,setAnswered]=useState(false)
    const [accepted,setAccepted]=useState(false)
    const [notAccepted,setNotAccepted]=useState(false)
    const handleSubmit=(event)=>{
        event.preventDefault();
        setAnswered(true);
        let request;
        if (coming===true){
            setAccepted(true);
            request = {
                coming:coming,
                firstName:firstName,
                lastName:lastName,
                email:email,
                needTransfer:needTransfer,
                whoComingWithMe:whoComingWithMe
            }
        }
        else {
            setNotAccepted(true);
            request = {
                coming:coming,
                firstName:firstName,
                lastName:lastName,
                email:email,
                needTransfer:needTransfer,
                whoComingWithMe:''
            }
        }
        createPersonalInvitation(request)
            .then(() => {
            })
            .catch((error) => {

            });
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        setShowForm(true);
    }
    const handleNotComing=()=>{
        setShowForm(false);
    }


    const modal = () =>{
        return <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>С кем вы будете?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Eсли Вы придете одни, то оставьте поле пустым.</p>
                <textarea style={{"width": "100%","height": "100px"}} value={whoComingWithMe} onChange={event=>setWhoComingWithMe(event.target.value)}></textarea>
            </Modal.Body>
            <Modal.Footer>
                <Button id={"okButton"} variant="primary" onClick={handleClose}>
                    ОК
                </Button>
            </Modal.Footer>
        </Modal>
    }

    const handleComingBox = (event) => {
            setComing(event.target.value)
    }

    const handleTransferBox = (event) => {
        setNeedTransfer(event.target.value)
    }

    return(
        <div id={"invitation"}  className={"mainPageBlock"}>
            {modal()}
                <Row id={"invitationRow"}>
                    <Col style={{display:answered?'none':'block'}} xl={{span:4,offset:8}}>
                        <h1 className={"text-center title"}><span className={"headline inviteHeadline"}>{translation.menu.invitation}</span></h1>
                        <div>
                            <p id={"please"} className={"text-center site-text"}>Пожалуйста, заполните информацию о себе!</p>
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
                                            onChange={event=>handleComingBox(event)}
                                            value={true}
                                            feedback="You must agree before submitting."
                                        />
                                        <Form.Check
                                            onClick={handleNotComing}
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
                                <Form.Group style={{display:showForm?'block':'none'}}  id={"emailForm"} controlId="email">
                                    <Form.Label>Email<sup>*</sup></Form.Label>
                                    <Form.Control onChange={event => setEmail(event.target.value)} required={showForm} type="email"/>
                                </Form.Group>
                                    <Form.Label style={{display:showForm?'block':'none'}} id={"transferText"}>Для вашего удобства будет организован трансфер от метро Перово, время отправления - 14:00</Form.Label>
                                    <Form.Group style={{display:showForm?'block':'none'}} id={"transferForm"} as={Row}>
                                        <Form.Check
                                            required={showForm}
                                            inline
                                            type="radio"
                                            label="Нужен трансфер"
                                            name="formHorizontalRadios2"
                                            id="formHorizontalRadios3"
                                            onChange={event=>handleTransferBox(event)}
                                            value={true}
                                        />
                                        <Form.Check
                                            inline
                                            type="radio"
                                            label="Приеду сам"
                                            name="formHorizontalRadios2"
                                            id="formHorizontalRadios4"
                                            onChange={event=>handleTransferBox(event)}
                                            value={false}
                                        />

                                    </Form.Group>
                                <Button id={"acceptButton"} variant="primary" type="submit">
                                    Отправить
                                </Button>
                            </Form>
                            <div  style={{"marginTop":"20px"}}><b>Просим Вас подтвердить своё присутствие на нашем празднике до 1 августа 2020</b></div>
                        </div>
                    </Col>
                    <Col style={{display:accepted?'block':'none'}} xl={{span:4,offset:8}}>
                        <h1 className={"text-center title"}><span className={"headline inviteHeadline"}>{translation.menu.invitation}</span></h1>
                       <div>
                           <p style={{"paddingTop":"10px"}} className={"text-center site-text"}>Спасибо за ответ! Мы направили вам информацию на почту.</p>
                       </div>
                    </Col>
                    <Col style={{display:notAccepted?'block':'none'}} xl={{span:4,offset:8}}>
                        <h1 className={"text-center title"}><span className={"headline inviteHeadline"}>{translation.menu.invitation}</span></h1>
                        <div>
                            <p style={{"paddingTop":"10px"}} className={"text-center site-text"}>Спасибо за ответ!</p>
                        </div>
                    </Col>
                </Row>



        </div>
    )
}
export default Invitation;
