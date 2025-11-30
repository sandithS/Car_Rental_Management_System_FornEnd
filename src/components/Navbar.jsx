import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaCar, FaPhoneAlt } from 'react-icons/fa'; // Using react-icons for the car and phone icons

const CustomNavbar = () => {
    return (
        <Navbar expand="lg" className="bg-white shadow-sm py-3">
            <Container>
                {/* Logo/Brand Section */}
                <Navbar.Brand href="#home" className="d-flex align-items-center">
                    <FaCar size={30} className="me-2 text-dark" />
                    <span className="fw-bold fs-5 text-dark">Car Rental</span>
                </Navbar.Brand>

                {/* Navbar Toggler for Mobile */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Nav Links and Call-to-Action */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        {/* Nav Links */}
                        <Nav.Link href="home" className="mx-2 text-dark">
                            Home
                        </Nav.Link>
                        <Nav.Link href="vehicles" className="mx-2 text-dark fw-bold">
                            Vehicles
                        </Nav.Link>
                        <Nav.Link href="VehicleDetails" className="mx-2 text-dark">
                            Details
                        </Nav.Link>
                        <Nav.Link href="#about" className="mx-2 text-dark">
                            About Us
                        </Nav.Link>
                        <Nav.Link href="#contact" className="mx-2 text-dark">
                            Contact Us
                        </Nav.Link>
                    </Nav>

                    {/* Phone/Call-to-Action Section */}
                    <div className="d-flex align-items-center ms-lg-auto">
                        <a
                            href="tel:+9962471680"
                            className="d-flex align-items-center text-decoration-none"
                        >
                            <div
                                className="rounded-circle p-2 me-2"
                                style={{ backgroundColor: '#7b1fa2', color: 'white' }}
                            >
                                <FaPhoneAlt size={20} />
                            </div>
                            <div className="text-end">
                                <small className="text-secondary d-block">Need help?</small>
                                <span className="fw-bold text-dark d-block">
                                    +996 247-1680
                                </span>
                            </div>
                        </a>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;