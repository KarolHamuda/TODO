import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import './TodoButton.css';

class TodoButton extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const { index, deleteTodo } = this.props;
        return (    
            <Button className='deleteButton' onClick={
                ()=>deleteTodo(index)
            }>
                <Glyphicon glyph='remove'/>
            </Button>
        )
    }
}

export default TodoButton;