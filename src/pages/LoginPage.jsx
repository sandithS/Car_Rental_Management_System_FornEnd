import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa'; // Icon for the close button
import './LoginPage.css'; // Import the CSS file

const LoginPage = () => {
    return (
        // This wrapper simulates the modal/pop-up container
        <div className="login-modal-overlay">
            <div className="login-container">
                <Row className="g-0 h-100">

                    {/* Left Column: Image and Green/White Background */}
                    <Col md={6} className="login-image-col d-none d-md-block">
                        <div className="login-image-wrapper">
                            {/* The image is a background visual, possibly with the gradient applied */}
                            {/* <img src="src/assets/loginCar.png" alt="" width={450} height={260} className="carImg"/> */}
                        </div>
                    </Col>

                    {/* Right Column: Login Form */}
                    <Col xs={12} md={6} className="login-form-col p-4 p-md-5">
                        <div className="close-button-wrapper text-end mb-4">
                            <Button variant="link" className="close-btn p-0" href="home">
                                <FaTimes className="text-dark" />
                            </Button>
                        </div>

                        <div className="form-content">
                            <h2 className="login-title mb-2">Login your Account</h2>
                            <p className="login-subtitle text-muted mb-4">
                                Since this is your first trip, you'll need to provide us with some information before you can check out.
                            </p>

                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label visuallyHidden>E-mail</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="E-mail"
                                        className="login-input"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label visuallyHidden>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        className="login-input"
                                    />
                                </Form.Group>

                                {/* Login Button */}
                                <Button
                                    variant="warning"
                                    type="submit"
                                    className="login-btn w-100 mb-3"
                                    href="home"
                                >
                                    Login
                                </Button>
                            </Form>

                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <a href="#!" className="login-link phone-login">Login with phone instead</a>
                                <a href="#!" className="login-link forgot-password">Forgot password?</a>
                            </div>

                            <div className="text-center">
                                <p className="mb-0 signup-text">
                                    New member? <a href="signup" className="login-link signup-link">Sign Up</a>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default LoginPage;