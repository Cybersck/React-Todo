import React from 'react';
import {FormGroup, Label, Input} from 'reactstrap';
import './Todo.css';

class Todo extends React.Component {

render() {
    return (
        <div>
            <FormGroup check onChange={() => this.props.update(this.props.todo.id)}>
                <Label check>
                    <Input type="checkbox" id={this.props.todo.id} className='todo'/>{' '}
                    {this.props.todo.completed === false && this.props.todo.task}
                    {this.props.todo.completed === true && <span className='completed'>{this.props.todo.task}</span>}
                </Label>
            </FormGroup>
        </div>
    )
}
}

export default Todo;