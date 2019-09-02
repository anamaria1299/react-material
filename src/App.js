import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import './App.css'
import {TodoApp} from "./Component/TodoApp"
import 'react-datepicker/dist/react-datepicker.css'
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import logo from "./resources/checkList.gif"
import Typography from "@material-ui/core/Typography"
import {Login} from './Component/Login'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {isLoggedIn: false}
    }

    render() {

        const LoginView = () => (
            <Login />
        )

        const TodoView = () => {

            if(this.state.isLoggedIn) {
                return (
                    <div>
                        <TodoApp/>
                    </div>
                )
            }
            return (
                <div>

                    Whatever you were looking here is not allowed
                </div>
            )
        }

        return (
            <Router>
                <div className="App">
                    <header>
                        <AppBar position="static">
                            <Toolbar>
                                <IconButton edge="start" color="inherit" aria-label="menu">
                                    <img src={logo} width="20%" height="40%"/>
                                </IconButton>
                                <Typography variant="h6" >
                                    TODO App
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </header>
                    <AppBar position="static" color="white">
                        <Tabs
                            variant="fullWidth"
                            aria-label="nav tabs example">
                            <Tab label="Login" href="/"/>
                            <Tab label="Todo" href="/todo" />
                        </Tabs>
                    </AppBar>

                    <div>
                        <Route exact path="/" component={LoginView}/>
                        <Route path="/todo" component={TodoView}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
