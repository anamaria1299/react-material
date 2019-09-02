import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import React from 'react'

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {this.props.text}
                        </Typography>
                        <Typography color="textSecondary">
                            Priority: {this.props.priority}
                            <br/>
                            Due date: {this.props.dueDate.format('DD-MM-YYYY')}
                        </Typography>
                    </CardContent>
                </Card>
                <br/>
            </div>
        );
    }

}