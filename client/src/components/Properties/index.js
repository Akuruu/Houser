import React, { useEffect }from 'react';
// import Card from 'react-bootstrap/Card';
import { Container, CardGroup, Card, Button } from 'react-bootstrap';
import { QUERY_PROPERTY } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropertyCard from '../PropertyCard';
import "../../styles/app.css";
import Assets1 from '../../assets/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg';

const Properties = (props) => {
  const {propertyId} = useParams();
  const { loading, data } = useQuery(QUERY_PROPERTY, {
    // pass URL parameter
    variables: { propertyId: propertyId },
  });

  const ownerData = data?.property || [];

  useEffect(()=> {
    console.log(ownerData)
  },[ownerData])

  return (
    <>
    {loading ? (
          <div>Loading...</div>
        ) : (
    <div>
    <Container>
        <h2>
           Property Information  
           {ownerData.nickname}
        </h2>
        <CardGroup>
          
             {/* <PropertyCard /> */}

             <Card className="col-5 p-4 affect" border='dark'>
                <Card.Img src={Assets1} className= "rentalimage" alt="Rental Image" variant='top' /> 
                  <Card.Body>
                     <Card.Title>{ownerData.nickname}</Card.Title>
                    {/* <p className='small'>{ownerData.due}</p> */}
                    <Card.Text>Rent Amount: {ownerData.rent}</Card.Text>
                    <Card.Text>{ownerData.street}</Card.Text>
                    <Card.Text>{ownerData.state}, {ownerData.state}  {ownerData.zipcode}</Card.Text>
                    <Button variant="primary" onClick={handleShow}>Edit Contact Info</Button>
                  </Card.Body>
               </Card>

             {ownerData.properties?.map((tenants) => {
            return (
             
             <Card className="col-5 p-4" key="" border='dark'>
                <Card.Body>
                  <Card.Title>Tenant Info</Card.Title>
                  <Card.Title>{ownerData.tenants.firstName} {ownerData.tenants.lastName}</Card.Title>
                  <p className='small'>{ownerData.due}</p>
                  <Card.Text>{ownerData.rent}</Card.Text>
                  <Card.Text>{ownerData.street}</Card.Text>
                  <Card.Text>{ownerData.city} {ownerData.state} {ownerData.zipcode}</Card.Text>
                  <Card.Text>{ownerData.phone1}</Card.Text>
                  <Card.Text>{ownerData.phone2}</Card.Text>
                  <Button className='btn-block btn-danger' onClick= "">
                    Delete this Book!
                  </Button>
                </Card.Body>
              </Card>
               );
              })}
        </CardGroup>   
    </Container> 
    </div>
    )
  }
    </>
  );
};

export default Properties;