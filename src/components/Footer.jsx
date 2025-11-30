import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaCarSide } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const usefulLinks = ["About us", "Contact us", "Gallery", "Blog", "F.A.Q"];
    const vehicles = ["Sedan", "Cabriolet", "Pickup", "Minivan", "SUV"];

    return (
        <>
            {/* Top Banner (Enjoy Every Mile) */}
            <div className="footer-banner-wrapper">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={8} md={12}>
                            <h2 className="banner-title text-white mb-3">
                                Enjoy every mile with adorable companionship.
                            </h2>
                            <p className="banner-subtitle text-white mb-4">
                                Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper.
                            </p>
                            <div className="d-flex search-box-wrapper">
                                <Form.Control
                                    type="text"
                                    placeholder="City"
                                    className="search-input"
                                />
                                <Button variant="warning" className="search-button">
                                    Search
                                </Button>
                            </div>
                        </Col>
                        <Col lg={4} className="d-none d-lg-block text-center">
                            {/* Placeholder for the car silhouette image */}
                            <div className="car-silhouette"></div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Main Footer Content */}
            <footer className="main-footer pt-5 pb-3">
                <Container>
                    <Row className="mb-5">
                        {/* Column 1: Logo and Description */}
                        <Col lg={4} md={6} className="mb-4">
                            <div className="d-flex align-items-center mb-3">
                                <FaCarSide className="logo-icon me-2" />
                                <span className="footer-logo-text">Car Rental</span>
                            </div>
                            <p className="footer-description pe-lg-5 mb-4">
                                Faucibus faucibus pellentesque dictum turpis. Id pellentesque turpis massa a id iaculis lorem t...
                            </p>
                            <div className="social-icons">
                                <a href="#!" className="social-icon"><FaFacebookF /></a>
                                <a href="#!" className="social-icon"><FaInstagram /></a>
                                <a href="#!" className="social-icon"><FaTwitter /></a>
                                <a href="#!" className="social-icon"><FaYoutube /></a>
                            </div>
                        </Col>

                        {/* Column 2: Useful Links */}
                        <Col lg={2} md={6} className="mb-4">
                            <h5 className="footer-heading">Useful links</h5>
                            <ul className="footer-links list-unstyled">
                                {usefulLinks.map((link, index) => (
                                    <li key={index}><a href="#!" className="footer-link">{link}</a></li>
                                ))}
                            </ul>
                        </Col>

                        {/* Column 3: Vehicles */}
                        <Col lg={2} md={6} className="mb-4">
                            <h5 className="footer-heading">Vehicles</h5>
                            <ul className="footer-links list-unstyled">
                                {vehicles.map((vehicle, index) => (
                                    <li key={index}><a href="#!" className="footer-link">{vehicle}</a></li>
                                ))}
                            </ul>
                        </Col>

                        {/* Column 4: Contact and App Download */}
                        <Col lg={4} md={6} className="mb-4">
                            <Row className="contact-info mb-4">
                                <Col sm={6} xs={12} className="mb-3">
                                    <div className="d-flex align-items-center">
                                        <FaMapMarkerAlt className="info-icon address-icon me-2" />
                                        <div>
                                            <small className="info-label text-muted">Address</small>
                                            <p className="info-value mb-0">Oxford Ave. Cary, NC 27511</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={6} xs={12} className="mb-3">
                                    <div className="d-flex align-items-center">
                                        <FaEnvelope className="info-icon email-icon me-2" />
                                        <div>
                                            <small className="info-label text-muted">Email</small>
                                            <p className="info-value mb-0">mwjiger@yahoo.com</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={6} xs={12} className="mb-3">
                                    <div className="d-flex align-items-center">
                                        <FaPhoneAlt className="info-icon phone-icon me-2" />
                                        <div>
                                            <small className="info-label text-muted">Phone</small>
                                            <p className="info-value mb-0">+537 547-6401</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <h5 className="footer-heading mb-3">Download App</h5>
                            <div className="app-download-links">
                                <a href="#!" className="app-store-link mb-2 d-block">
                                    <img src="placeholder-app-store.png" alt="Download on the App Store" className="img-fluid" />
                                </a>
                                <a href="#!" className="google-play-link d-block">
                                    <img src="placeholder-google-play.png" alt="Get it on Google Play" className="img-fluid" />
                                </a>
                            </div>
                        </Col>
                    </Row>

                    {/* Copyright Section */}
                    <Row>
                        <Col className="text-center pt-3 border-top">
                            <p className="copyright-text mb-0">
                                &copy; Copyright Car Rental 2024. Design by Figma.guru
                            </p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Footer;