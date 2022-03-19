    import React from 'react'
    import NavBar from '../../Components/NavBar'
    import 'rsuite/dist/rsuite.min.css';
    import "bootstrap/dist/css/bootstrap.min.css";
    import * as bs from 'react-bootstrap'
    import { Grid, Row, Col } from 'rsuite';
    import { useSelector, useDispatch } from "react-redux";
    import { addUser, deleteUser } from "../../State-Management/features/Users";
    import { Button, ButtonToolbar } from 'rsuite';
    import { DatePicker } from 'rsuite';
    import { useState } from "react";
    import Table from 'rsuite/Table';
    import { Modal } from 'rsuite';
    import LogOut from '../../Components/LogOut';
    
    function ShowUsersGroup() {
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
      const dispatch = useDispatch();
      const userList = useSelector((state) => state.users.value);
      console.log ("users",userList)
    
      const [group_name, setGroupName] = useState ()
      const [group_created_date, setCreatedDate] = useState ()
 
              return (
                <div>
                    <NavBar />
                    <LogOut/>
                <div className="modal-container">
        </div>
                <div>       
                <Grid>
        <Row className="show-grid">
        <Col xs={24} sm={24} md={8} lg={6} style = {{marginTop : "5%"  }} >
         
        <ButtonToolbar>
        <Button color="green" appearance="primary" onClick={handleOpen}>
            create group</Button>
        </ButtonToolbar>
        <Modal open={open} onClose={handleClose}>
            <Modal.Header>
            </Modal.Header>
            <Modal.Body>
            <bs.Card style={{ width: '30rem' , marginTop: '5%'}}>
      <bs.Card.Img  style = {{maxWidth : '10%' , maxHeight: '10%'}} variant="top" src="https://findicons.com/files/icons/2711/free_icons_for_windows8_metro/512/businessman.png" />
      <bs.Card.Body>
        <bs.Card.Title>Create New Group</bs.Card.Title>
        {" "}
        <bs.Form>
        <bs.Form.Group className="mb-3" controlId="formBasicEmail">
          <bs.Form.Control 
          type="text" 
          placeholder="Enter Group Name"
          value={group_name}
          onChange={(e) => setGroupName(e.target.value)}
          />
          <bs.Form.Text className="text-muted">
          </bs.Form.Text>
        </bs.Form.Group>
      
      <DatePicker 
       placeholder="group Date"
       value={group_created_date}
       onChange={(e) => setCreatedDate(e.target.value)}
      />
      <br /> 
      <br />
      </bs.Form>
      </bs.Card.Body>
    </bs.Card>
            </Modal.Body>
            <Modal.Footer>
            <bs.Button variant="primary" type="submit"  
        onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                group_name,
                group_created_date,
              })
            );
          }}
        >
            {" "}
          Submit
        </bs.Button>
              <Button onClick={handleClose} appearance="subtle">
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
        <Col xs={30} sm={12} md={8} lg={12}>
      
        <Table style = {{marginTop : "8%"  }}
        height={400}
        data={userList}
        onRowClick={data => {
        console.log("data", data.group_name);
        }}
        >
        <Table.Column width={40} align="center" fixed>
        <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.Cell dataKey="id" />
        </Table.Column>
        
        <Table.Column width={200} fixed>
        <Table.HeaderCell>Group Name</Table.HeaderCell>
        <Table.Cell dataKey= "group_name"/>
        </Table.Column>

        <Table.Column width={200}>
        <Table.HeaderCell>Join Date</Table.HeaderCell>
        <Table.Cell dataKey="group_created_date" />
        </Table.Column>
        <Table.Column width={120} fixed="right">
        <Table.HeaderCell>Action</Table.HeaderCell>
        
        <Table.Cell>
        {rowData => {
        function handleAction() {
          alert(`id:${rowData.id}`);
        }
        return (
          <span>
             <a   onClick={() => {
                      dispatch(deleteUser({ id: rowData.id }));
                    }}> Remove </a>
          </span>
        );
        }}
        </Table.Cell>
        </Table.Column>
        </Table>
   
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
        </Col>
        </Row>
        </Grid>
                </div>
                </div>
              );
                }
    
    export default ShowUsersGroup;