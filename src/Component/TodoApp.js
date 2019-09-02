import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import logo from '../resources/checkList.gif'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import DatePicker from 'react-datepicker'
import React, {Component} from 'react'
import {TodoList} from "../TodoList"
import moment from "moment"
import '../App.css'

export class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {items: [], text: '', priority: 0, dueDate: moment()};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="TodoApp" >
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
                <br/><br/>
                <Card className="todo-form">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Create a New TODO
                        </Typography>
                        <Grid container spacing={1}>
                            <Grid item xs={4}>
                                <TextField
                                    id="text"
                                    label="Text"
                                    onChange={this.handleTextChange}
                                    value={this.state.text}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    id="priority"
                                    type="number"
                                    onChange={this.handlePriorityChange}
                                    value={this.state.priority}
                                    label="Text"
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <DatePicker
                                    id="due-date"
                                    selected={this.state.dueDate}
                                    placeholderText="Due date"
                                    onChange={this.handleDateChange}>
                                </DatePicker>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={this.handleSubmit}>Add #{this.state.items.length + 1}</Button>
                    </CardActions>
                </Card>
                <br/><br/>
                <TodoList todoList={this.state.items}/>
            </div>
        )
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }
}