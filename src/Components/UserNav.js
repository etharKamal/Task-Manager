import "bootstrap/dist/css/bootstrap.min.css";
import * as bs from  'react-bootstrap'
import {Offcanvas, Button} from 'react-bootstrap'
import React, { useState } from 'react';


const NavBar = () =>
{
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <div>
        <bs.Navbar bg="light" expand="lg">
        <bs.Container>
          <bs.Navbar.Brand href="/ShowUserTasks">Task Manager</bs.Navbar.Brand>
          <bs.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <bs.Navbar.Collapse id="basic-navbar-nav">
            <bs.Nav className="me-auto">
              <bs.Nav.Link href="/ShowUserTasks">Users Task</bs.Nav.Link>
            </bs.Nav>
          </bs.Navbar.Collapse>
        </bs.Container>
      </bs.Navbar>
      <Button  onClick={handleShow} style = {{marginTop: "2%" , marginLeft: "2%"}}>
      Click Me!
    </Button>
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>*Note!</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        You Can Sort Tasks Depending On Periority, Using Drag And Drop Task.
      </Offcanvas.Body>
    </Offcanvas>
    </div>
    )
}

export default NavBar;