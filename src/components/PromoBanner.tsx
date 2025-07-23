import { Container, Row, Col } from 'react-bootstrap';

const PromoBanner = () => {
  return (
    <div className="bg-dark text-light py-3">
      <Container>
        <Row className="text-center">
          <Col md={4}>
            <p className="mb-0">BACK TO SCHOOL SALE</p>
          </Col>
          <Col md={4}>
            <p className="mb-0">EXTRA 20% OFF SELECT STYLES</p>
          </Col>
          <Col md={4}>
            <p className="mb-0">EARLY ACCESS</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PromoBanner;
