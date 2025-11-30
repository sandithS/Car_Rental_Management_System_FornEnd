import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCarSide, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './VehicleFooter.css';

// Mock data for car brand logos (replace URLs with actual logo paths)
const mockLogos = [
    { name: "Toyota", url: "placeholder-toyota.png" },
    { name: "Ford", url: "placeholder-ford.png" },
    { name: "Mercedes", url: "placeholder-mercedes.png" },
    { name: "Jeep", url: "placeholder-jeep.png" },
    { name: "BMW", url: "placeholder-bmw.png" },
    { name: "Audi", url: "placeholder-audi.png" },
];

const usefulLinks = ["About us", "Contact us", "Gallery", "Blog", "F.A.Q"];
const vehicles = ["Sedan", "Cabriolet", "Pickup", "Minivan", "SUV"];

const VehicleFooter = () => {
    return (
        <>
            {/* 1. Logo Strip Section */}
            <div className="logo-strip-wrapper py-4 py-md-5">
                <Container>
                    <Row className="align-items-center justify-content-center logo-row">
                        {mockLogos.map((logo, index) => (
                            <Col key={index} xs={4} sm={2} lg={2} className="text-center logo-col mb-3 mb-sm-0">
                                {/* Replace the div with an actual <img> tag pointing to your logo */}
                                <img
                                    src={logo.url}
                                    alt={`${logo.name} Logo`}
                                    className="img-fluid vehicle-logo"
                                    // Placeholder style to simulate black logo
                                    style={{ filter: 'grayscale(100%) brightness(0%)', maxWidth: '80px', height: 'auto' }}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            {/* 2. Main Footer Content */}
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
                            <div className="contact-info mb-4">
                                <div className="info-item mb-3">
                                    <div className="d-flex align-items-start">
                                        <FaMapMarkerAlt className="info-icon address-icon me-3 mt-1" />
                                        <div>
                                            <small className="info-label text-muted">Address</small>
                                            <p className="info-value mb-0">Oxford Ave. Cary, NC 27511</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="info-item mb-3">
                                    <div className="d-flex align-items-start">
                                        <FaEnvelope className="info-icon email-icon me-3 mt-1" />
                                        <div>
                                            <small className="info-label text-muted">Email</small>
                                            <p className="info-value mb-0">dev@yahoo.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="info-item mb-4">
                                    <div className="d-flex align-items-start">
                                        <FaPhoneAlt className="info-icon phone-icon me-3 mt-1" />
                                        <div>
                                            <small className="info-label text-muted">Phone</small>
                                            <p className="info-value mb-0">+537 547-6401</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h5 className="footer-heading d-none">Download App</h5>
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
                                &copy; Copyright Car Rental 2024. Design by dev
                            </p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default VehicleFooter;