import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {translation} from "../../constants";

const Navigation = () =>{
    return(
        <Navbar bg={"light"} expand="lg" fixed={"top"}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-center w-100">
                    <Nav.Link  href="#home">Главная</Nav.Link>
                    <Nav.Link href="#ourStory">{translation.menu.ourStory}</Nav.Link>
                    <Nav.Link href="#program">{translation.menu.program}</Nav.Link>
                    <Nav.Link href="#dressCode">Детали</Nav.Link>
                    <Nav.Link href="#invitation">Я приду</Nav.Link>
                    {/*<Nav.Link href="#place">{translation.menu.place}</Nav.Link>*/}
                </Nav>

            </Navbar.Collapse>
            {/*<Navbar.Brand className={"bandMainPage"}>*/}
            {/*    <Image id={"logo"}*/}
            {/*           style={{"height":"100px"}}*/}
            {/*        src={"https://daria-alexander-backend.herokuapp.com/api/admin/files/logo.png"}/>*/}
            {/*</Navbar.Brand>*/}
        </Navbar>
    )
}
export default Navigation