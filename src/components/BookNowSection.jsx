import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa'; // Used for the calendar icon
//import './BookNowSection.css';

// You can define a custom style object for the purple background
const heroStyle = {
    backgroundColor: '#6A37FF', // A deep purple color
    borderRadius: '20px', // Rounded corners for the entire section
    padding: '50px 0',
    color: 'white',
    // Background image with tire tracks and car (simplified for code example)
    backgroundImage: 'url("src/assets/homePageCar2.png")', // Replace with actual image path or CSS styling
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left top',
    backgroundSize: 'contain',
    position: 'relative',
    overflow: 'hidden', // To contain the rounded corners
};

const BookNowSection = () => {
    return (
        <div className="my-5">
            <Container style={heroStyle} >
                <Row className="align-items-center">
                    {/* Left Content Column (Text and Button) */}
                    <Col lg={6} className="mb-5 mb-lg-0 p-5">
                        <h1 className="display-4 fw-bold">
                            Experience the road like never before
                        </h1>
                        <p className="lead mt-3 mb-4">
                            Aliquam porttitor adipiscing semper morbi. Purus non eu cursus
                            porttitor tristique et gravida. Quis nunc interdum gravida
                            ullamcorper.
                        </p>
                        <Button
                            variant="warning" // Bootstrap warning color is a good match for the orange
                            size="lg"
                            href="#"
                            style={{ backgroundColor: '#FFB833', border: 'none' }} // Ensure the specific orange color
                        >
                            View all cars
                        </Button>
                    </Col>

                    {/* Right Content Column (Booking Form) */}
                    <Col lg={6} className="d-flex justify-content-center justify-content-lg-end p-lg-5">
                        <div
                            className="bg-white p-4 p-md-5 shadow-lg"
                            style={{
                                borderRadius: '10px',
                                maxWidth: '400px',
                                width: '100%',
                            }}
                        >
                            <h3 className="text-dark fw-bold mb-4">Book your car</h3>
                            <Form>
                                {/* Car Type Dropdown */}
                                <Form.Group className="mb-3">
                                    <Form.Select className="py-2" aria-label="Car type select">
                                        <option>Car type</option>
                                        <option value="1">Sedan</option>
                                        <option value="2">SUV</option>
                                        <option value="3">Truck</option>
                                    </Form.Select>
                                </Form.Group>

                                {/* Place of Rental Dropdown */}
                                <Form.Group className="mb-3">
                                    <Form.Select className="py-2" aria-label="Place of rental select">
                                        <option>Place of rental</option>
                                        <option value="1">Location A</option>
                                        <option value="2">Location B</option>
                                    </Form.Select>
                                </Form.Group>

                                {/* Place of Return Dropdown */}
                                <Form.Group className="mb-3">
                                    <Form.Select className="py-2" aria-label="Place of return select">
                                        <option>Place of return</option>
                                        <option value="1">Location A</option>
                                        <option value="2">Location B</option>
                                    </Form.Select>
                                </Form.Group>

                                {/* Rental Date Input */}
                                <Form.Group className="mb-3">
                                    <div className="input-group">
                                        <Form.Control type="date" placeholder="Rental date" className="py-2" />
                                    </div>
                                </Form.Group>

                                {/* Return Date Input */}
                                <Form.Group className="mb-3">
                                    <div className="input-group">
                                        <Form.Control type="date" placeholder="Rental date" className="py-2" />
                                    </div>
                                </Form.Group>

                                {/* Book Now Button */}
                                <Button
                                    variant="warning"
                                    type="submit"
                                    className="w-100 py-2 fw-bold"
                                    style={{ backgroundColor: '#FFB833', border: 'none' }}
                                >
                                    Book now
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BookNowSection;