import React, { useState } from "react";
import ReactDOM from "react-dom";
import { QUERY_ME } from '../../utils/queries';
import { useQuery, useReactiveVar } from '@apollo/client';
// import ReactDataGrid from "react-data-grid";
import { Jumbotron, Container, Button } from 'react-bootstrap';
// import Panel from 'react-bootstrap/Panel';
import "../../styles/app.css";
import Assets1 from '../../assets/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg'



const Renterportal = () => {
    // const { loading, data} = useQuery(QUERY_ME)

    // const useData = data?.me || [];

    return (
      <>
    <div fluid className="m-3">
      <h1>Hello, George</h1>
        <p>
           Listed below is the rental property.
        </p>
        <p>
          <Button bsStyle="primary">Pay Rent</Button>
        </p>
    </div>
    <Container>
    <div className="card flex-row flex-wrap">
        <div className="card-header border-0">
            <img className="rentalimage" src={Assets1} alt="Rental placeholder image"/>
        </div>
        <div className="card-block px-2">
            <h4 className="card-title">Title</h4>
            <p className="card-text">Street</p>
            <p classname="card-text">City, State Zipcode</p>
            <a href="mailto:canrob0522@gmail.com" className="btn btn-primary">Contact Owner</a>
        </div>
        <div className="w-100"></div>
        <div className="card-footer w-100 text-muted">
            Rent Amount
        </div>
    </div>
    </Container>
    <Container>
    <a href="#" className="btn btn-primary">Pay Rent</a>
    </Container>
      </>
)
};
export default Renterportal;

