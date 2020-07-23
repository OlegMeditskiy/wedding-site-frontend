import React, {Component} from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import FlagIcon, {ACCESS_TOKEN, API_BASE_URL, LANGUAGE, translation} from '../constants';
import Login from '../user/login/Login';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';
import PrivateRoute from "../common/PrivateRoute";
import {getCurrentUser} from "../util/GetAPI";
import AdminPage from "../Admin/AdminPage";
import addNotification, {Notifications} from 'react-push-notification';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import MainPage from "../MainPage/MainPage?v1";
import Admin from "../Admin/Admin";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'ru',
            successMessage: {
                title: 'Успешно!',
                theme: 'green',
                closeButton: 'X',
                duration: '4500',
            },
        }
        // this.handleLogout = this.handleLogout.bind(this);
        // this.loadCurrentUser = this.loadCurrentUser.bind(this);
        // this.handleLogin = this.handleLogin.bind(this);
        this._onSetLanguageToEnglish=this._onSetLanguageToEnglish.bind(this);
        this._onSetLanguageToRussian=this._onSetLanguageToRussian.bind(this);
        this._onSetLanguageToSwedish=this._onSetLanguageToSwedish.bind(this);
        this.loadLanguage=this.loadLanguage.bind(this);

    }
    _onSetLanguageToRussian(event) {
        event.preventDefault();
        localStorage.setItem(LANGUAGE,'ru')
        this.loadLanguage();
    }
    _onSetLanguageToEnglish(event) {
        event.preventDefault();
        localStorage.setItem(LANGUAGE,'en')
        this.loadLanguage();
    }
    _onSetLanguageToSwedish(event) {
        event.preventDefault();
        localStorage.setItem(LANGUAGE,'sv')
        this.loadLanguage();
    }
    loadLanguage(){
        if (!localStorage.getItem(LANGUAGE)) {
            localStorage.setItem(LANGUAGE,"ru")
        }
        else {
            this.setState({
                language: localStorage.getItem(LANGUAGE)
            })
        }

    }



    componentDidMount() {
        this.loadLanguage();
        // this.loadCurrentUser();
    }



    render() {
        translation.setLanguage(this.state.language);

        return (
                <div className="app-container">
                    <div className="app-content">
                        <Notifications position={"top-right"}/>
                            <Switch>

                                       <Route exact path="/"
                                              render={(props) => <MainPage />}/>
                                <Route path="/admin"
                                       render={(props) => <Admin {...this.props}/>}/>

                                <Route component={NotFound}/>
                            </Switch>
                    </div>
                    <div className={"footer"}>
                            <Container>
                                <Row className="justify-content-md-center">
                                    <Col  md={"auto"}>
                                        {/*<a target={"_blank"} href="https://www.instagram.com/oleg.meditskiy/"><Image style={{"height":"50px","padding":"10px 0px 10px 0px"}} src={API_BASE_URL+"/admin/files/OlegMeditskiy.png"}></Image></a>*/}

                                        {/*<Button onClick={this._onSetLanguageToRussian} className={"languageButton"} type={"submit"}><FlagIcon code={"ru"} size={"2x"} /></Button>*/}
                                        {/*    <Button onClick={this._onSetLanguageToEnglish} className={"languageButton"} type={"submit"}><FlagIcon code={"gb"} size={"2x"} /></Button>*/}
                                        {/*<Button onClick={this._onSetLanguageToSwedish} className={"languageButton"} type={"submit"}><FlagIcon code={"se"} size={"2x"} /></Button>*/}
                                        </Col>
                                </Row>
                            </Container>
                    </div>
                </div>
            );

    }
}

export default withRouter(App);
