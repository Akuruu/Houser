import * as React from 'react';
// import Card from 'react-bootstrap/Card';
import { Container, CardGroup, Card, Button } from 'react-bootstrap';
import { QUERY_PROPERTIES } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import PropertyCard from '../PropertyCard';
import "../../styles/app.css";

const Properties = () => {
  const { loading, data } = useQuery(QUERY_PROPERTIES);

  const ownerData = data?.properties || [];


  return (
    <>
    <Container>
        <h2>
           Propert Information  
        </h2>
        <CardGroup>
          
             <PropertyCard />

             {ownerData.properties.map((tenants) => {
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
    </>
  );
};

export default Properties;