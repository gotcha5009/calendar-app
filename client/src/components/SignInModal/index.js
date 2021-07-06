import { Modal, Form, Row, Col, Button } from 'react-bootstrap';

const SignInModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Row>
          <Col>
            <Modal.Title> Sign in</Modal.Title>
          </Col>
        </Row>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <br />
          <Row>
            <Col>
              <Button variant="primary" type="submit" block>
                Sign In
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default SignInModal;
