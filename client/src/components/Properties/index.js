import * as React from 'react';
// import Card from 'react-bootstrap/Card';
import { Container, CardGroup, Card, Button } from 'react-bootstrap';
import { QUERY_PROPERTY } from '../../utils/queries';
import { useQuery } from '@apollo/client';

const PropertyCard = () => {
  const { loading, data } = useQuery(QUERY_PROPERTY);
 
  const userData = data?.property || [];


  return (
    <>
    <Container>
        <h2>
          {userData.property.length
            ? `Viewing ${userData.property.length} saved ${userData.property.length === 1 ? 'property' : 'property'}:`
            : 'You have no properties listed!'}
        </h2>
        <CardGroup>
          {userData.property.map((property) => {
            return (
              <Card key={property._id} border='dark'>
                {property.image ? <Card.Img src={property.image} alt={`The cover for ${property.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{property.title}</Card.Title>
                  <p className='small'>Rent: {property.rent}</p>
                  <Card.Text>{property.due}</Card.Text>
                  {/* <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(property._id)}>
                    Delete this Book!
                  </Button> */}
                </Card.Body>
              </Card>
            );
          })}
        </CardGroup>
      </Container>
    </>
  );
};

export default PropertyCard;