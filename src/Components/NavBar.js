import "bootstrap/dist/css/bootstrap.min.css";
import * as bs from  'react-bootstrap'
const NavBar = () =>
{
    const Tasks = [
     
    ]

    return (
        <bs.Navbar bg="light" expand="lg">
        <bs.Container>
          <bs.Navbar.Brand href="/ShowUsers">Task Manager</bs.Navbar.Brand>
          <bs.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <bs.Navbar.Collapse id="basic-navbar-nav">
            <bs.Nav className="me-auto">
              <bs.Nav.Link href="/ShowUsers">Users</bs.Nav.Link>
              <bs.Nav.Link href="/ShowUsersGroup">Users Group</bs.Nav.Link>
              <bs.Nav.Link href="/ShowTasks">Tasks</bs.Nav.Link>
            </bs.Nav>
          </bs.Navbar.Collapse>
        </bs.Container>
      </bs.Navbar>
    )
}

export default NavBar;