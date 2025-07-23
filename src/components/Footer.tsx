import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light py-5 mt-5">
      <Container>
        <Row>
          <Col md={3}>
            <h5>Featured</h5>
            <ul className="list-unstyled">
              <li>Air Force 1</li>
              <li>Jordan 1</li>
              <li>Air Max Dn</li>
              <li>Vomero</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Shoes</h5>
            <ul className="list-unstyled">
              <li>All Shoes</li>
              <li>Jordan Shoes</li>
              <li>Running Shoes</li>
              <li>Basketball Shoes</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Clothing</h5>
            <ul className="list-unstyled">
              <li>All Clothing</li>
              <li>T-Shirts</li>
              <li>Shorts</li>
              <li>Hoodies & Pullovers</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Kids</h5>
            <ul className="list-unstyled">
              <li>Infant Shoes</li>
              <li>Kids Shoes</li>
              <li>Kids Basketball Shoes</li>
              <li>Kids Running Shoes</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
