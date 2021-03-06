import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import PropertyCard from "../Properties";
import { Container, CardGroup, Card, Button, Modal } from 'react-bootstrap';
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";
import { QUERY_ME } from "../../utils/queries";
// import Panel from 'react-bootstrap/Panel';
import "../../styles/app.css";
import Assets1 from '../../assets/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg'
import ContactForm from "../ContactForm";


const Ownerportal = (props) => {
  
  const { loading, data} = useQuery(QUERY_ME)
   
  const userData = data?.me || [];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

useEffect(()=> {
  console.log(userData)
},[userData])
  return (
    <>
    {loading ? (
          <div>Loading...</div>
        ) : (
    <div>
  
        <div className="m-3 firstName">
          <h1>Hello, {userData.contact.firstName}</h1>
          <p>
             <Button variant="primary" onClick={handleShow}>Edit Contact Info</Button>
          {/* The onclick is need for modal */}
          </p>
        </div>


      <Container>
        <h2> Properties Listed
          {/* {userData.property.length
            ? `Viewing ${userData.property.length} saved ${userData.property.length === 1 ? 'property' : 'property'}:`
            : 'You have no properties listed!'} */}
        </h2>
        <CardGroup className="flex-row">
          {userData.properties?.map((propertyData) => {
            {/* return (
             <PropertyCard />
            ); */}
             return ( 

              <Card className="col-5 p-4 affect" key="" border='dark'>
                <Card.Img src={Assets1} className= "rentalimage" alt="Rental Image" variant='top' /> 
                  <Card.Body>
                     <Card.Title>{propertyData.nickname}</Card.Title>
                  <p className='small'>{propertyData.due}</p>
                    <Card.Text>{propertyData.rent}</Card.Text>
                   <Card.Text>{propertyData.street}</Card.Text>
                    <Card.Text>{propertyData.state}, {propertyData.state}  {propertyData.zipcode}</Card.Text>
                    <Link className='btn btn-block rentalbtn' to={`/Ownerportal/${propertyData._id}`}>
                     Property and Tenant Info
                    </Link>
                   {/* <Button className='btn-block btn-danger' onClick= "">
                     I don't know what to put here
                  </Button> */}
                  </Card.Body>
               </Card>
           ) 
          })}

        </CardGroup>   

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
    )
  }
  </>
  );
};

export default Ownerportal;