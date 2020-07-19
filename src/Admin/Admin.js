import React,{Component} from "react";
import {getCurrentUser} from "../util/GetAPI";
import {ACCESS_TOKEN} from "../constants";
import addNotification from "react-push-notification";
import {Route, Switch} from "react-router-dom";
import PrivateRoute from "../common/PrivateRoute";
import AdminPage from "./AdminPage";
import Login from "../user/login/Login";
import LoadingIndicator from "../common/LoadingIndicator";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            isAuthenticated: null,
            isLoading: false,
            language: 'ru',

        }
        this.handleLogout = this.handleLogout.bind(this);
        this.loadCurrentUser = this.loadCurrentUser.bind(this);
        this.handleLogin = this.handleLogin.bind(this);


    }
    loadCurrentUser() {
        this.setState({
            isLoading: true
        });
        getCurrentUser()
            .then(response => {
                this.setState({
                    currentUser: response,
                    isAuthenticated: true,
                    isLoading: false
                });
            }).catch(() => {
            this.setState({
                isLoading: false,
                isAuthenticated: false,
            });
        });

    }
    handleLogout() {
        localStorage.removeItem(ACCESS_TOKEN);
        this.setState({
            currentUser: null,
            isAuthenticated: false
        });
        addNotification({
            message: 'Вы вышли из аккаунта',
            ...this.state.successMessage
        });
        this.props.history.push("/admin/login");
    }


    handleLogin() {
        this.loadCurrentUser();
        addNotification({
            message: 'Вы успешно авторизовались',
            ...this.state.successMessage
        });
        this.props.history.push("/admin");
    }

    componentDidMount() {
        this.loadCurrentUser();
    }
    render() {
        if (this.state.isLoading) {
            return <LoadingIndicator/>
        }
        return(
            <div>
                <Switch>
                    <Route path="/admin/login"
                           render={(props) => <Login onLogin={this.handleLogin} {...props} />}/>
                    {(this.state.isAuthenticated!==null)?<PrivateRoute authenticated={this.state.isAuthenticated} path="/admin" handleLogout={this.handleLogout}
                                                                       currentUser={this.state.currentUser} language={this.state.language}  component={AdminPage} />:null}
                </Switch>
            </div>
        )
    }
}
export default Admin;