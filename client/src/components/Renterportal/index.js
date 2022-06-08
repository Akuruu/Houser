import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { QUERY_ME } from '../../utils/queries';
import { useQuery, useReactiveVar } from '@apollo/client';
// import ReactDataGrid from "react-data-grid";
import { Container, CardGroup, Card, Button } from 'react-bootstrap';
// import Panel from 'react-bootstrap/Panel';
import '../../styles/app.css';
import Assets1 from '../../assets/blake-wheeler-zBHU08hdzhY-unsplash.jpg';

const Renterportal = () => {
  // const { loading, data} = useQuery(QUERY_ME)

  // const useData = data?.me || [];

  return (
    <>
      <div fluid className="m-3">
        <h1>Hello, George</h1>
        <p>Listed below is the rental property.</p>
        <p>
          <Button bsStyle="primary">Pay Rent</Button>
        </p>
      </div>
      <Container>
      <CardGroup className="display-flex">
      <Card className="col-5 p-4" key="" border='dark'>
        <Card.Img src={Assets1} className= "rentalimage" alt="" variant='top' /> 
                <Card.Body>
                  <Card.Title></Card.Title>
                  <p className='small'>Small House</p>
                  <Card.Text>Rent Due</Card.Text>
                  <Button className='btn-block btn-danger' onClick= "">
                    Delete this Book!
                  </Button>
                </Card.Body>
              </Card>
       
       
        <Card className="col-5 p-4" key="" border='dark'>
                <Card.Body>
                  <Card.Title>Owner Info</Card.Title>
                  <p className='small'>Rent: 1200</p>
                  <Card.Text>Rent Due</Card.Text>
                  <Button className='btn-block btn-danger' onClick= "">
                    Delete this Book!
                  </Button>
                </Card.Body>
              </Card>
        </CardGroup>
      </Container>
    </>
  );
};
export default Renterportal;
