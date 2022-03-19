import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import * as bs from  'react-bootstrap'
import ShowUsers from '../Pages/AdminPage/ShowUsers'
import ShowUserTasks from '../Pages/UserPage/ShowUserTasks';
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';




const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function handleSubmit(event) {
    event.preventDefault();
    console.log (email, password)
    if ((email == "user@gmail.com") && (password == "123")){
      window.location.href = "/ShowUserTasks";
    }else if ((email == "admin@gmail.com") && (password == "123")){
      window.location.href = "/ShowUsers";
    } else alert ("Wrong Email or Password!")
  }

  return (
    <bs.Container>
  <bs.Row>
    <bs.Col>  
      <img src = "https://miro.medium.com/max/1400/1*8ygFKYb0Yo6Hc-vnScGA9A.png" style = {{maxWidth: "40rem", maxHeight: "50rem"}}/>
      </bs.Col>
    <bs.Col xs={5}>
      <bs.Card style={{ width: '22rem' , marginTop : "40%" }}>
      <bs.Card.Body>
    <bs.Form onSubmit={handleSubmit}>
    <bs.Form.Group className="mb-3" controlId="formBasicEmail">
      <bs.Form.Label>Email address</bs.Form.Label>
      <bs.Form.Control 
      type="email" 
      placeholder="Enter email"
      name={email}
      onChange={(e) => setEmail(e.target.value)}
      />
      <bs.Form.Text className="text-muted">
      </bs.Form.Text>
    </bs.Form.Group>
  
    <bs.Form.Group className="mb-3" controlId="formBasicPassword">
      <bs.Form.Label>Password</bs.Form.Label>
      <bs.Form.Control 
      type="password" 
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
    </bs.Form.Group>
    <bs.Button variant="primary" type="submit" >
      Submit
    </bs.Button>
  </bs.Form>
  </bs.Card.Body>
  </bs.Card>
  </bs.Col>
    <bs.Col>
  
    </bs.Col>
  </bs.Row>
</bs.Container>
    
  );
}
export default Login;