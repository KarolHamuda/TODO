import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <Grid className='Header'>
                <Row>
                    <Col>
                        Todo
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Header;