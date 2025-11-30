import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCarSide, FaUsers, FaCalendarAlt, FaTachometerAlt } from 'react-icons/fa';
import './FactsSection.css'; // Import the CSS file

const mockFacts = [
    { icon: FaCarSide, number: "540+", label: "Cars" },
    { icon: FaUsers, number: "20k+", label: "Customers" },
    { icon: FaCalendarAlt, number: "25+", label: "Years" },
    { icon: FaTachometerAlt, number: "20m+", label: "Miles" },
];

const FactsSection = () => {
    return (
        <section className="facts-section py-5">
            <div className="background-design"></div> {/* For the tire tracks and car silhouette */}
            <Container className="text-center">
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <h2 className="facts-title mb-3 text-white">Facts In Numbers</h2>
                        <p className="facts-subtitle mb-5 text-white">
                            Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper fermentum.
                        </p>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    {mockFacts.map((fact, index) => (
                        <Col key={index} lg={3} md={6} xs={12} className="mb-4">
                            <div className="fact-card p-4 d-flex align-items-center justify-content-start rounded-3 shadow">
                                <div className="icon-wrapper me-3">
                                    <fact.icon className="fact-icon" />
                                </div>
                                <div className="text-content text-start">
                                    <h3 className="fact-number mb-0">{fact.number}</h3>
                                    <p className="fact-label mb-0">{fact.label}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default FactsSection;