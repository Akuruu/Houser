import React, { useState, useEffect } from 'react';
import { QUERY_ME } from '../../utils/queries';
import { useQuery, useReactiveVar } from '@apollo/client';
import {
  Container,
  CardGroup,
  Card,
  Button,
  Form,
  Modal
} from 'react-bootstrap';
import '../../styles/app.css';
import Assets1 from '../../assets/blake-wheeler-zBHU08hdzhY-unsplash.jpg';
import PropertyCard from '../PropertyCard';
import ContactForm from '../ContactForm';

const Renterportal = () => {
  const { loading, data } = useQuery(QUERY_ME);

  const userData = data?.me || [];

  // for modal 1- edit info button
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//for modal 2, pay rent modal
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
    <>
    {loading ? (
          <div>Loading...</div>
        ) : (
    <div>
      
        <div className="m-3 firstName">
          <h1>Hello,  {userData.contact.firstName} </h1>
            <p>
              <Button variant="primary" onClick={handleShow}>Edit Contact Info</Button>
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
                  Pay Rent
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
            <a href="#" className="btn btn-primary">
              Pay Rent
            </a>
          </Container>

          {/* Modal for edit contact info*/}

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>My Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ContactForm />
            </Modal.Body>
          </Modal>

          {/* Modal for pay rent*/}

          <Modal show={show2} onHide={handleClose2}>
            <Modal.Header closeButton>
              <Modal.Title>Pay Rent</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* this will be payment form I think< /> */}
            </Modal.Body>
          </Modal>
        </div>
      )}
      ;
    </>
  );
};
export default Renterportal;
