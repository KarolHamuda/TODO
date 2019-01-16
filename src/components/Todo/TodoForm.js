import React, { Component } from 'react';
import { FormControl, Button, Col, Row } from 'react-bootstrap';
import './TodoForm.css'


class TodoForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            TodoText: ''
        }
        this.clearTodo = this.clearTodo.bind(this)
    }

    handleChange = (event) => {
        this.setState({
            TodoText: event.target.value
        })
    }

    handleKeyPress = (e) => {
        if (e.key=='Enter') {
            this.props.getTodoText(this.state.TodoText)
            
            this.setState({TodoText: e.target.value});
            this.clearTodo();
            e.preventDefault();
        } 
    }

    clearTodo() {
        this.setState({TodoText: ''})
    }



    render() {
        return(
            <Row className='TodoFormContainer'>
            <Col xs={9}>
                <form>
                    <FormControl 
                        value={this.state.TodoText} 
                        type='text' 
                        onKeyPress={
                           this.handleKeyPress
                        } 
                        onChange={this.handleChange} 
                        placeholder='Enter new value' 
                        className='TodoForm' 
                    />
                </form>
            </Col>
            <Col xs={3} sm={2} className='btnTodo'>
                <Button type='submit' onClick={() => {
                    this.props.getTodoText(this.state.TodoText)
                    this.clearTodo()
                    }}>
                    Submit!
                </Button>
            </Col>
            </Row>
        )
    }
}

export default TodoForm;