import { useState } from 'react';
import { Modal } from 'react-bootstrap';

import AddEventForm from './AddEventForm';

const AddEventModal = ({ show, handleClose }) => {
  return (
    <Modal animation={true} show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add an event</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddEventForm handleClose={handleClose} />
      </Modal.Body>
    </Modal>
  );
};

export default AddEventModal;
