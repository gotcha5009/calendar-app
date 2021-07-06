import { Form, Row, Col, Button } from 'react-bootstrap';

const AddEventForm = ({ handleClose }) => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="What are you going to do?" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Description (Optional)</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Tell me more about it..."
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>From when?</Form.Label>
        <Row>
          <Col>
            <Form.Control type="date" />
          </Col>
          <Col>
            <Form.Control type="time" />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group>
        <Form.Label>To when?</Form.Label>
        <Row>
          <Col>
            <Form.Control type="date" />
          </Col>
          <Col>
            <Form.Control type="time" />
          </Col>
        </Row>
      </Form.Group>

      <Row className="justify-content-end">
        <Col className="flex-grow-0">
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Col>
        <Col className="flex-grow-0 text-nowrap">
          <Button variant="success" type="submit">
            Add event
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AddEventForm;
