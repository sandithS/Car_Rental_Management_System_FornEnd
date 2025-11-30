import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaCar, FaGasPump, FaFan, FaAngleRight } from 'react-icons/fa';
import './VehicleSection.css'; // Import the CSS file

// Mock data for the vehicle cards
const mockVehicles = [
    {
        name: "Mercedes",
        type: "Sedan",
        price: 25,
        features: [{ icon: FaCar, label: "Automat" }, { icon: FaGasPump, label: "PB 95" }, { icon: FaFan, label: "Air Conditioner" }],
        imageUrl: "placeholder-sedan.png" // Replace with actual image
    },
    {
        name: "Mercedes",
        type: "Sport",
        price: 50,
        features: [{ icon: FaCar, label: "Automat" }, { icon: FaGasPump, label: "PB 95" }, { icon: FaFan, label: "Air Conditioner" }],
        imageUrl: "placeholder-sport.png"
    },
    {
        name: "Mercedes",
        type: "Sedan",
        price: 45,
        features: [{ icon: FaCar, label: "Automat" }, { icon: FaGasPump, label: "PB 95" }, { icon: FaFan, label: "Air Conditioner" }],
        imageUrl: "placeholder-sedan.png"
    },
    {
        name: "Porsche",
        type: "SUV",
        price: 40,
        features: [{ icon: FaCar, label: "Automat" }, { icon: FaGasPump, label: "PB 95" }, { icon: FaFan, label: "Air Conditioner" }],
        imageUrl: "placeholder-suv.png"
    },
    {
        name: "Toyota",
        type: "SUV",
        price: 35,
        features: [{ icon: FaCar, label: "Automat" }, { icon: FaGasPump, label: "PB 95" }, { icon: FaFan, label: "Air Conditioner" }],
        imageUrl: "placeholder-suv.png"
    },
    {
        name: "Porsche",
        type: "SUV",
        price: 50,
        features: [{ icon: FaCar, label: "Automat" }, { icon: FaGasPump, label: "PB 95" }, { icon: FaFan, label: "Air Conditioner" }],
        imageUrl: "placeholder-suv.png"
    },
];

const VehicleSection = () => {
    return (
        <section className="vehicle-section py-5">
            <Container>
                <Row className="mb-5 align-items-center">
                    <Col>
                        <h2 className="section-title">Choose the car that suits you</h2>
                    </Col>
                    <Col xs="auto">
                        <a href="vehicles" className="view-all-link">
                            View All <FaAngleRight className="ms-1" />
                        </a>
                    </Col>
                </Row>

                <Row>
                    {mockVehicles.map((vehicle, index) => (
                        <Col key={index} lg={4} md={6} className="mb-4">
                            <Card className="vehicle-card shadow-sm border-0">
                                <div className="car-image-container p-4">
                                    {/* Placeholder for car image matching the style */}
                                    <div className="car-placeholder">
                                        {/* You can replace this div with an actual <img> tag when you have images */}
                                    </div>
                                </div>
                                <Card.Body className="pt-0">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                        <div>
                                            <Card.Title className="vehicle-name mb-0">{vehicle.name}</Card.Title>
                                            <Card.Subtitle className="vehicle-type text-muted">{vehicle.type}</Card.Subtitle>
                                        </div>
                                        <div className="price-tag text-end">
                                            <span className="price-amount">${vehicle.price}</span>
                                            <small className="price-unit text-muted">per day</small>
                                        </div>
                                    </div>

                                    <div className="vehicle-features mb-4">
                                        {vehicle.features.map((feature, fIndex) => (
                                            <div key={fIndex} className="feature-item d-inline-flex align-items-center me-3 me-lg-4">
                                                <feature.icon className="feature-icon me-1" />
                                                <span className="feature-label">{feature.label}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Button variant="primary" className="view-details-btn w-100" href='vehicledetails'>
                                        View Details
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default VehicleSection;