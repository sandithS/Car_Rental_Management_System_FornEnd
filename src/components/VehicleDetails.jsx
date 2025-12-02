import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import {
    FaCog, FaGasPump, FaDoorOpen,
    FaFan, FaUsers, FaTachometerAlt,
    FaCheck
} from 'react-icons/fa';
import './VehicleDetails.css'; // Import the CSS file

// Mock data for the vehicle
const mockVehicle = {
    make: "BMW",
    pricePerDay: 25,
    mainImage: "placeholder-main-car.png",
    gallery: ["placeholder-thumb1.png", "placeholder-thumb2.png", "placeholder-thumb3.png"],
    specs: [
        { icon: FaCog, label: "Gear Box", value: "Automat" },
        { icon: FaGasPump, label: "Fuel", value: "Petrol" },
        { icon: FaDoorOpen, label: "Doors", value: "2" },
        { icon: FaFan, label: "Air Conditioner", value: "Yes" },
        { icon: FaUsers, label: "Seats", value: "5" },
        { icon: FaTachometerAlt, label: "Distance", value: "500" }, // Assuming this is remaining distance or total mileage
    ],
    equipment: [
        "ABS", "ABS", "Air Bags", "Air Bags", "Cruise Control", "Air Conditioner"
    ]
};

// Component for a single Specification Box
const SpecBox = ({ icon: Icon, label, value }) => (
    <Card className="spec-card p-3 border-0 rounded-3">
        <div className="d-flex align-items-center">
            <Icon className="spec-icon me-3" />
            <div>
                <small className="spec-label text-muted">{label}</small>
                <p className="spec-value mb-0">{value}</p>
            </div>
        </div>
    </Card>
);

const VehicleDetails = () => {
    return (
        <section className="vehicle-details-section py-5">
            
            <Container>
                <Row>
                    {/* Left Column: Image and Gallery */}
                    <Col lg={6} className="mb-4 mb-lg-0">
                    
                        <h1 className="vehicle-make">{mockVehicle.make}</h1>
                        <p className="vehicle-price mb-4">
                            <span className="price-amount">${mockVehicle.pricePerDay}</span> / day
                        </p>

                        {/* Main Car Image Silhouette */}
                        <div className="main-image-placeholder mb-4">
                            {/* Replace this div with <img src={mockVehicle.mainImage} alt={mockVehicle.make} /> */}
                        </div>

                        {/* Gallery Thumbnails */}
                        <div className="gallery-thumbnails d-flex justify-content-start gap-3">
                            {mockVehicle.gallery.map((imgSrc, index) => (
                                <div key={index} className="thumbnail-box rounded-3 overflow-hidden">
                                    {/* These small boxes have blurred background images in the original */}
                                    {/* Replace this div with <img src={imgSrc} alt={`Thumbnail ${index + 1}`} /> */}
                                </div>
                            ))}
                        </div>
                    </Col>

                    {/* Right Column: Specifications and Equipment */}
                    <Col lg={6}>
                        {/* Technical Specifications */}
                        <h3 className="section-heading mb-4">Technical Specification</h3>
                        <Row className="mb-5">
                            {mockVehicle.specs.map((spec, index) => (
                                <Col md={6} sm={12} key={index} className="mb-3">
                                    <SpecBox {...spec} />
                                </Col>
                            ))}
                        </Row>

                        {/* Rent Button */}
                        <Button variant="primary" className="rent-button w-100 mb-5">
                            Rent a car
                        </Button>

                        {/* Car Equipment */}
                        <h3 className="section-heading mb-3">Car Equipment</h3>
                        <Row>
                            {mockVehicle.equipment.map((item, index) => (
                                <Col md={6} xs={12} key={index} className="mb-2">
                                    <div className="equipment-item d-flex align-items-center">
                                        <FaCheck className="check-icon me-2" />
                                        <span className="equipment-label">{item}</span>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default VehicleDetails;