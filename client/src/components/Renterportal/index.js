import React, { useState, useEffect } from 'react';
import { QUERY_ME } from '../../utils/queries';
import { useQuery, useReactiveVar } from '@apollo/client';
import { Container, CardGroup, Card, Button, Form, Modal } from 'react-bootstrap';
import '../../styles/app.css';
import Assets1 from '../../assets/blake-wheeler-zBHU08hdzhY-unsplash.jpg';
import PropertyCard from "../PropertyCard";

const Renterportal = (props) => {
  const { loading, data} = useQuery(QUERY_ME)

  const userData = data?.me || [];
  useEffect(()=> {
      console.log(userData)
    },[userData])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    {loading ? (
          <div>Loading...</div>
        ) : (
    <div>
      
        <div className="m-3 firstName">
          <h1>Hello,  {userData.contact.firstName} </h1>
            <p>
              <Button variant="primary" className="rentalbtn" onClick={handleShow}>Edit Contact Info</Button>
                {/* The onclick is need for modal */}
            </p>
        </div>
     
   
      <Container className= "">
        <CardGroup className="display-flex renterbox">
            {/* Identified by the tenant, the property they are attached to. */}
          {/* <PropertyCard /> */}

          <Card className="col-5 p-4 m-3 affect" key="" border='dark'>
            <Card.Img src={Assets1} className= "rentalimage" alt="Rental Image" variant='top' /> 
              <Card.Body>
                <Card.Title>{userData.properties[0].nickname}</Card.Title>
                <p className='small'>{userData.properties[0].due}</p>
                <Card.Text>Rent Amount: ${userData.properties[0].rent}</Card.Text>
                <Card.Text>{userData.properties[0].street}</Card.Text>
                <Card.Text>{userData.properties[0].state}, {userData.properties[0].state} {userData.properties[0].zipcode}</Card.Text>
                <Button className='btn-block rentalbtn'>
                  I don't know what to put here
                </Button>
                  {/* {isTenant ?  <a href="/stripe">Pay Rent</a> : <a href="property/:propertyId">Property/Tenant Info</a>} */}
              </Card.Body>
          </Card>

            {/* Property manager information */}
          <Card className="col-5 p-4 m-3 affect" border='dark'>
            <Card.Body>
              <Card.Title>Owner Info</Card.Title>
                {/* <p className='small'>Due Date: {userData.properties[0].due}</p> */}
                <p className='small'>Due Date: July 01, 2022</p>
                <Card.Text>Rent Amount: {userData.properties[0].rent}</Card.Text>
                  <Button className='btn-block rentalbtn' >
                    Contact Owner
                  </Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>

      <Container>
        <a href="#" className="btn pay">Pay Rent</a>
      </Container>

    {/* Modal for edit contact info*/}

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>My Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="firstName"
                placeholder="Sam"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="lastName"
                placeholder="Smith"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Street</Form.Label>
              <Form.Control
                type="street"
                placeholder="123 Main Street"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="city"
                placeholder="Orlando"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="state"
                placeholder="Florida"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
              <Form.Label>Zipcode</Form.Label>
              <Form.Control
                type="zipcode"
                placeholder="12345"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
              <Form.Label>Primary Phone Number</Form.Label>
              <Form.Control
                type="phone1"
                placeholder="(555-555-1234)"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
              <Form.Label>Secondary Phone Number</Form.Label>
              <Form.Control
                type="phone2"
                placeholder="(555-555-4321)"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    )
  };
  </>
)
};
export default Renterportal;