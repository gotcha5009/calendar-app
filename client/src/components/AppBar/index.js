import { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

import AddEventModal from '../AddEventModal';
import SignInModal from '../SignInModal';

import 'bootstrap/dist/css/bootstrap.min.css';

const AppBar = () => {
  const [showEventModal, setShowEventModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);

  const handleOpenEventModal = () => {
    setShowEventModal(true);
  };

  const handleCloseEventModal = () => {
    setShowEventModal(false);
  };

  const handleOpenSignInModal = () => {
    setShowSignInModal(true);
  };

  const handleCloseSignInModal = () => {
    setShowSignInModal(false);
  };

  return (
    <>
      <Navbar bg="white" expand="lg">
        <Navbar.Brand href="#home">Calendar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
            <Nav.Link onClick={handleOpenEventModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-calendar-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z" />
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
              </svg>
            </Nav.Link>
          </Nav>
          {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
          <Button variant="success" onClick={handleOpenSignInModal}>
            Sign in
          </Button>
        </Navbar.Collapse>
      </Navbar>

      <AddEventModal
        show={showEventModal}
        handleClose={handleCloseEventModal}
      />

      <SignInModal
        show={showSignInModal}
        handleClose={handleCloseSignInModal}
      />
    </>
  );
};

export default AppBar;
