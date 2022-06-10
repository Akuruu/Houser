import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PROPERTY } from '../../utils/queries';
import { CardGroup, Card, Button } from 'react-bootstrap';
import '../../styles/app.css';
import Assets1 from '../../assets/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg';

const PropertyCard = (props) => {
  const { loading, data } = useQuery(QUERY_PROPERTY, {
    variables: { propertyId: props.id }
  });

  const propertyData = data?.properties || {};

  useEffect(() => {
    console.log(propertyData);
  }, [propertyData]);
  // const isTenant = this.state.isTenant;

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Card className="col-5 p-4 affect" key={propertyData._id} border="dark">
          <Card.Img
            src={Assets1}
            className="rentalimage"
            alt="Rental Image"
            variant="top"
          />
          <Card.Body>
            <Card.Title>{propertyData.nickname}</Card.Title>
            <p className="small">{propertyData.due}</p>
            <Card.Text>{propertyData.rent}</Card.Text>
            <Card.Text>{propertyData.street}</Card.Text>
            <Card.Text>
              {propertyData.state}, {propertyData.state} {propertyData.zip}
            </Card.Text>
            <Button className="btn-block rentalbtn">
              I don't know what to put here
            </Button>
            {/* {isTenant ?  <a href="/stripe">Pay Rent</a> : <a href="property/:propertyId">Property/Tenant Info</a>} */}
          </Card.Body>
        </Card>
      )}
      ;
    </>
  );
};

export default PropertyCard;
