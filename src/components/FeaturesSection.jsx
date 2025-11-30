import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaCar, FaWallet } from 'react-icons/fa'; // Importing icons from react-icons
import './FeaturesSection.css'; // We'll create this CSS file for styling

const FeaturesSection = () => {
    return (
        <section className="features-section py-5 py-md-5">
            <Container>
                <Row className="text-center justify-content-center">
                    {/* Feature 1: Availability */}
                    <Col md={4} lg={4} className="mb-4 mb-md-0">
                        <div className="feature-item p-3">
                            <FaMapMarkerAlt className="feature-icon mb-3" />
                            <h4 className="fw-bold mb-2">Availability</h4>
                            <p className="text-muted">
                                Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis
                                fermentum.
                            </p>
                        </div>
                    </Col>

                    {/* Feature 2: Comfort */}
                    <Col md={4} lg={4} className="mb-4 mb-md-0">
                        <div className="feature-item p-3">
                            <FaCar className="feature-icon mb-3" />
                            <h4 className="fw-bold mb-2">Comfort</h4>
                            <p className="text-muted">
                                Gravida auctor fermentum morbi vulputate ac egestas orcietium convallis
                            </p>
                        </div>
                    </Col>

                    {/* Feature 3: Savings */}
                    <Col md={4} lg={4}>
                        <div className="feature-item p-3">
                            <FaWallet className="feature-icon mb-3" />
                            <h4 className="fw-bold mb-2">Savings</h4>
                            <p className="text-muted">
                                Pretium convallis id diam sed commodo vestibulum lobortis volutpat
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FeaturesSection;