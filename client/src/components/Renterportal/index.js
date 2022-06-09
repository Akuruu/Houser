import React, { useState } from 'react';
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Container>
            <div className="m-3">
              <h1>Hello, {userData.contact.firstName} </h1>
              <p>
                <Button variant="primary" onClick={handleShow}>
                  Edit Contact Info
                </Button>
                {/* The onclick is need for modal */}
              </p>
            </div>
          </Container>

          <Container className="">
            <CardGroup className="display-flex">
              {/* Identified by the tenant, the property they are attached to. */}
              <PropertyCard />
              {/* Property manager information */}
              <Card className="col-5 p-4" key="" border="dark">
                <Card.Body>
                  <Card.Title>Owner Info</Card.Title>
                  <p className="small">{userData.properties.due}</p>
                  <Card.Text>{userData.properties.rent}</Card.Text>
                  <Button className="btn-block btn-danger" onClick="">
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
        </div>
      )}
      ;
    </>
  );
};
export default Renterportal;
