import React from "react";
import {Modal, Button, ButtonToolbar, Col, Row, Form, FormGroup, Label, Input} from 'react-bootstrap';
import "../styles/modal.css";



function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Listing
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

  <Form>
    <Form.Row>
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="email" placeholder="Enter First Name" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="password" placeholder="Enter Last Name" />
      </Form.Group>
    </Form.Row>

    <Form.Group controlId="formGridAddress1">
      <Form.Label>Address</Form.Label>
      <Form.Control placeholder="1234 Main St" />
    </Form.Group>

    <Form.Group controlId="formGridAddress2">
      <Form.Label>E-Mail</Form.Label>
      <Form.Control placeholder="JohnDoe@roomr.com" />
    </Form.Group>

    <Form.Row>
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>Occupation</Form.Label>
        <Form.Control />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Age</Form.Label>
        <Form.Control as="select">
          <option>Choose...</option>
          <option>...</option>
        </Form.Control>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Pets</Form.Label>
        <Form.Control placeholder="#"/>
      </Form.Group>
    </Form.Row>

    <Button variant="primary" type="submit">
      Post
    </Button>
  </Form>


      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <ButtonToolbar>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Create
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}


export default MyModal;