import React, {Component} from 'react'
import './App.css'
import {Login} from "./Component/Login"
import {TodoApp} from "./Component/TodoApp"
import 'react-datepicker/dist/react-datepicker.css'

class App extends Component {

    render() {

        return (
            <div>
                <TodoApp />
            </div>
        );
    }
}

export default App;
