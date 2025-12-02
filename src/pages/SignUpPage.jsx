import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaTimes, FaUser, FaPhoneAlt, FaEnvelope, FaLock } from 'react-icons/fa';
import './SignUpPage.css';

const SignUpPage = () => {
    return (
        <div className="signup-modal-overlay">
            <div className="signup-container">
                <Row className="g-0 h-100">

                    {/* Left Column: Image and Orange Background */}
                    <Col md={6} className="signup-image-col d-none d-md-block">
                        <div className="signup-image-wrapper">
                            {/* This div handles the orange background and car image */}
                        </div>
                    </Col>

                    {/* Right Column: Sign Up Form */}
                    <Col xs={12} md={6} className="signup-form-col p-4 p-md-5">
                        <div className="close-button-wrapper text-end mb-4">
                            {/* Close button positioned absolutely in CSS */}
                        </div>

                        <div className="form-content">
                            <h1 className="signup-welcome mb-2">WELCOME</h1>
                            <p className="signup-title mb-4">
                                Let's get you started!
                            </p>

                            <Form>
                                <Row className="gx-3"> {/* Use gx-3 for horizontal gutter */}
                                    {/* First Name */}
                                    <Col xs={12} sm={6}>
                                        <Form.Group className="mb-4 input-group-icon">
                                            <FaUser className="form-icon" />
                                            <Form.Control type="text" placeholder="First name" className="signup-input" />
                                        </Form.Group>
                                    </Col>
                                    {/* Last Name */}
                                    <Col xs={12} sm={6}>
                                        <Form.Group className="mb-4 input-group-icon">
                                            <FaUser className="form-icon" />
                                            <Form.Control type="text" placeholder="Last name" className="signup-input" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="gx-3">
                                    {/* Phone */}
                                    <Col xs={12} sm={6}>
                                        <Form.Group className="mb-4 input-group-icon">
                                            <FaPhoneAlt className="form-icon" />
                                            <Form.Control type="tel" placeholder="Phone" className="signup-input" />
                                        </Form.Group>
                                    </Col>
                                    {/* E-mail */}
                                    <Col xs={12} sm={6}>
                                        <Form.Group className="mb-4 input-group-icon">
                                            <FaEnvelope className="form-icon" />
                                            <Form.Control type="email" placeholder="E-mail" className="signup-input" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                {/* Create Password */}
                                <Form.Group className="mb-4 input-group-icon">
                                    <FaLock className="form-icon" />
                                    <Form.Control type="password" placeholder="Create Password" className="signup-input" />
                                </Form.Group>

                                {/* Terms and Privacy Checkbox */}
                                <Form.Group className="mb-4">
                                    <Form.Check
                                        type="checkbox"
                                        id="terms-check"
                                        label={
                                            <span className="terms-label">
                                                I agree to the <a href="#!" className="terms-link">Terms and Privacy Policy</a>
                                            </span>
                                        }
                                        defaultChecked
                                        className="custom-checkbox"
                                    />
                                </Form.Group>

                                {/* Sign Up Button */}
                                <Button
                                    variant="warning"
                                    type="submit"
                                    className="signup-btn w-100 mb-3"
                                    href="home"
                                >
                                    Sign Up
                                </Button>
                            </Form>

                            <div className="text-center">
                                <p className="mb-0 login-text">
                                    Already have an account? <a href="login" className="login-link">Login</a>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default SignUpPage;