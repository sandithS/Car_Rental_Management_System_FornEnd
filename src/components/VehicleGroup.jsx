import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaCar, FaGasPump, FaFan, FaCarSide, FaTruckPickup, FaCaravan, FaBusAlt, FaPlus } from 'react-icons/fa';
import './VehicleGroup.css'; // Import the CSS file

// Mock data for filter categories
const vehicleCategories = [
    { label: "All vehicles", icon: FaCarSide, filter: "all" },
    { label: "Sedan", icon: FaCar, filter: "sedan" },
    { label: "Cabriolet", icon: FaCarSide, filter: "cabriolet" },
    { label: "Pickup", icon: FaTruckPickup, filter: "pickup" },
    { label: "SUV", icon: FaCaravan, filter: "suv" },
    { label: "Minivan", icon: FaBusAlt, filter: "minivan" },
    // Add more categories as needed
];

// Mock data for the vehicle cards (expanded with more types)
const mockVehicles = [
    { name: "Mercedes", type: "Sedan", price: 25, features: [{ icon: FaCar, label: "Automat" }, { icon: FaGasPump, label: "PB 95" }, { icon: FaFan, label: "Air Conditioner" }], category: "sedan" },
    { name: "Mercedes", type: "Sport", price: 50, features: [{ icon: FaCar, label: "Manual" }, { icon: FaGasPump, label: "PB 95" }, { icon: FaFan, label: "Air Conditioner" }], category: "sport" },
    { name: "Mercedes", type: "Sedan", price: 45, features: [{ icon: FaCar, label: "Automat" }, { icon: FaGasPump, label: "PB 95" }, { icon: FaFan, label: "Air Conditioner" }], category: "sedan" },
    { name: "Porsche", type: "SUV", price: 40, features: [{ icon: FaCar, label: "Automat" }, { icon: FaGasPump, label: "PB 95" }, { icon: FaFan, label: "Air Conditioner" }], category: "suv" },
    { name: "Toyota", type: "SUV", price: 35, features: [{ icon: FaCar, label: "Manual" }, { icon: FaGasPump, label: "PB 95" }, { icon: FaFan, label: "Air Conditioner" }], category: "suv" },
    { name: "Porsche", type: "SUV", price: 50, features: [{ icon: FaCar, label: "Automat" }, { icon: FaGasPump, label: "PB 95" }, { icon: FaFan, label: "Air Conditioner" }], category: "suv" },
    { name: "Mercedes", type: "Van", price: 50, features: [{ icon: FaCar, label: "Automat" }, { icon: FaGasPump, label: "PB 95" }, { icon: FaFan, label: "Air Conditioner" }], category: "minivan" }, // Assuming Van falls under Minivan or similar
    { name: "Toyota", type: "Sport", price: 60, features: [{ icon: FaCar, label: "Manual" }, { icon: FaGasPump, label: "PB 95" }, { icon: FaFan, label: "Air Conditioner" }], category: "sport" },
    { name: "Maybach", type: "Sedan", price: 70, features: [{ icon: FaCar, label: "Automat" }, { icon: FaGasPump, label: "PB 95" }, { icon: FaFan, label: "Air Conditioner" }], category: "sedan" },
];

const VehicleGroup = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredVehicles = activeFilter === "all"
        ? mockVehicles
        : mockVehicles.filter(vehicle => vehicle.category === activeFilter);

    return (
        <section className="vehicle-group-section py-5">
            <Container>
                <h2 className="section-title text-center mb-5">Select a vehicle group</h2>

                {/* Filter Buttons */}
                <Row className="justify-content-center mb-5">
                    <Col xs={12} className="d-flex flex-wrap justify-content-center filter-buttons-wrapper">
                        {vehicleCategories.map((category, index) => (
                            <Button
                                key={index}
                                variant={activeFilter === category.filter ? "primary" : "light"}
                                className={`filter-button m-2 ${activeFilter === category.filter ? 'active' : ''}`}
                                onClick={() => setActiveFilter(category.filter)}
                            >
                                <category.icon className="me-2" /> {category.label}
                            </Button>
                        ))}
                    </Col>
                </Row>

                {/* Vehicle Cards Grid */}
                <Row>
                    {filteredVehicles.map((vehicle, index) => (
                        <Col key={index} lg={4} md={6} className="mb-4">
                            <Card className="vehicle-card shadow-sm border-0">
                                <div className="car-image-container p-4">
                                    {/* Placeholder for car image matching the style */}
                                    <div className="car-placeholder">
                                        {/* In a real app, you'd use <img src={vehicle.imageUrl} alt={vehicle.name} /> */}
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

export default VehicleGroup;