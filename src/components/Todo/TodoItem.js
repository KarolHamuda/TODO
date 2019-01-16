import React, { Component } from 'react';
import { Grid, Row, Col, FormControl } from 'react-bootstrap';
import './TodoItem.css'

import TodoButton from './TodoButton'

class TodoItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todoText: this.props.todoText
        }
    }

    handleChange = (e) => {
        this.setState({
            toxoText: e.target.value
        })
    }

    render() {
        const { todoText, deleteTodo, index } = this.props;
        return(
            <Grid>
                <Row className='TodoItemContainer'>
                

                
                    <Row>
                    <Col xs={1}/>
                    <Col xs={10} className='TodoItem'>
                        
                        <Col xs={9} sm={11} md={11}>
                            <FormControl value={this.state.todoText} type='text' onChange={this.handleChange} placeholder='Enter new value' className='TodoItemForm' />
                        </Col>
                        <Col xs={3} sm={1} md={1}>
                            <TodoButton index={index} deleteTodo={deleteTodo}/>
                        </Col>
                    </Col>
                    </Row>
                
                
                </Row>
            </Grid>
        )
    }
}

export default TodoItem;