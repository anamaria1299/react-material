import {Todo} from './Todo'
import React from 'react'
import Grid from "@material-ui/core/Grid";

export class TodoList extends React.Component {

    render() {
        const todoList = this.props.todoList.map((todo, i) => {
            return (
                <Todo key={i} text={todo.text} priority={todo.priority} dueDate={todo.dueDate}/>
            )
        })

        return (
            <Grid container direction="column" justify="space-evenly" alignItems="stretch">
                <Grid item>
                    {todoList}
                </Grid>
            </Grid>
        )
    }
}