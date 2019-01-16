import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import { CSSTransitionGroup } from 'react-transition-group';
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todoText: '',
            todos: []
        }
    }

    getTodoText = (Text) => {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    todoText: Text
                }
            ]
        })
    }

    deleteTodo = (indexToDelete) => {

        let tempTodo = this.state.todos.filter((item, index) => index !== indexToDelete)
        console.log(tempTodo)
        this.setState({
            todos: tempTodo
        })
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col sm={2}/>
                    <Col xs={12} sm={10}>
                        <TodoForm getTodoText={this.getTodoText}/>
                    </Col>

                    <CSSTransitionGroup
                        transitionName='TodoTransition'
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}
                    >
                    {this.state.todos.map(({todoText}, index) => (
                    <Col xs={12} className='todoLabels' key={index}>
                        <TodoItem
                            key={index} 
                            todos={this.state.todos} 
                            deleteTodo={this.deleteTodo.bind(this, index)} 
                            todoText={todoText}
                        />
                    </Col>
                    ))}
                    </CSSTransitionGroup>
                </Row>
            </Grid>
        )
    }
}

export default Todo;