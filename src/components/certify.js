import React from 'react';
import {Col, Row, Container } from 'react-bootstrap'

import '../bg.css'

export const Certify = (props) => {

    return (
        <>
            

            <div style={{ minHeight: '100vh', margin:'20px'}}>
                <label style={{ fontSize: '2rem', margin: '0px auto', display: 'flex', justifyContent: 'center', color: 'black', width: '60%', fontWeight: 'bold' }}>Vaccination Appointment Booked</label>
                <div style={{ margin: '15px auto', width: '60%', border: '1px solid grey', borderRadius: '15px', minHeight: '40vh' }}>
                    <Container style={{ borderRadius: '15px', backgroundColor: 'white' }} id='container'>
                        <div >
                            <Row style={{ margin: '5px', padding: '5px' }}>
                                <Col style={{ border: '1px solid grey', fontWeight: 'bold' }}>Your Token no. </Col>
                                <Col style={{ border: '1px solid grey', fontWeight: 'bold' }}>{2000 - props.token}</Col>
                                {/* <Col>3 of 3</Col> */}

                            </Row>
                            <Row style={{ margin: '5px', padding: '5px' }}>
                                <Col style={{ border: '1px solid grey', fontWeight: 'bold' }}>Vaccine name </Col>
                                <Col style={{ border: '1px solid grey' }}>{props.vaccine}</Col>
                                {/* <Col>3 of 3</Col> */}

                            </Row>
                            <Row style={{ margin: '5px', padding: '5px' }}>
                                <Col style={{ border: '1px solid grey', fontWeight: 'bold' }}>Date </Col>
                                <Col style={{ border: '1px solid grey' }}>{props.date}</Col>
                                {/* <Col>3 of 3</Col> */}

                            </Row>
                            <Row style={{ margin: '5px', padding: '5px' }}>
                                <Col style={{ border: '1px solid grey', fontWeight: 'bold' }}>Hospital</Col>
                                <Col style={{ border: '1px solid grey' }}>{props.Name}</Col>
                                {/* <Col>3 of 3</Col> */}
                            </Row>
                            <Row style={{ padding: '5px', margin: '5px' }}>
                                <Col style={{ border: '1px solid grey', fontWeight: 'bold' }}>District</Col>
                                <Col style={{ border: '1px solid grey' }}>{props.district}</Col>
                            </Row>
                            <Row style={{ padding: '5px', margin: '5px' }}>
                                <Col style={{ border: '1px solid grey', fontWeight: 'bold' }}>Address</Col>
                                <Col style={{ border: '1px solid grey' }}>{props.Address}</Col>
                                {/* <Col>3 of 3</Col> */}
                            </Row>
                            <Row style={{ padding: '5px', margin: '5px' }}>
                                <Col style={{ border: '1px solid grey', fontWeight: 'bold' }}>Fee Type</Col>
                                <Col style={{ border: '1px solid grey' }}>{props.type}</Col>
                                {/* <Col>3 of 3</Col> */}
                            </Row>
                            <Row style={{ padding: '5px', margin: '5px' }}>
                                <Col style={{ border: '1px solid grey', fontWeight: 'bold' }}>Fees</Col>
                                <Col style={{ border: '1px solid grey' }}>Rs. {props.fees}</Col>
                                {/* <Col>3 of 3</Col> */}
                            </Row>
                            <Row style={{ padding: '5px', margin: '5px' }}>
                                <Col style={{ border: '1px solid grey', fontWeight: 'bold' }}>Timings</Col>
                                <Col style={{ border: '1px solid grey' }}>9:00 AM - 2:00 PM </Col>
                                {/* <Col>3 of 3</Col> */}
                            </Row>
                            <Row style={{ padding: '5px', margin: '5px' }}>
                                <Col style={{ border: '1px solid grey', fontWeight: 'bold' }}>Preffered Timing</Col>
                                <Col style={{ border: '1px solid grey', fontWeight: 'bold' }}>11:00 AM - 12:00 PM</Col>
                                {/* <Col>3 of 3</Col> */}
                            </Row>
                        </div>
                    </Container>
                </div>
               
            </div>
        </>
    )
}
