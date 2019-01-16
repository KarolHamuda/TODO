import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Todo from '../Todo/Todo';
import Header from './Header';


class Layout extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    
                    
                        <Header />
                   
                    
                   
                        <Todo />
                    
                </Row>
            </Grid>
        )
    }
}

export default Layout;