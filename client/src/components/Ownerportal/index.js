import React from "react";
import { Link } from 'react-router-dom';
import PropertyCard from "../Properties";
import { Container, CardGroup, Button } from 'react-bootstrap';
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";
import { QUERY_ME } from "../../utils/queries";
// import Panel from 'react-bootstrap/Panel';
import "../../styles/app.css";


const Ownerportal = () => {
  
  const { loading, data} = useQuery(QUERY_ME)
   
  const userData = data?.me || [];

  return (
    <div>
      <Container>
        <div fluid className="m-3">
          <h1>Hello, {userData.contact.firstName}</h1>
          <p>
            <Button bsStyle="primary">Edit Contact Info</Button>
          </p>
        </div>
      </Container>

      <Container>
        <h2> Properties Listed
          {userData.property.length
            ? `Viewing ${userData.property.length} saved ${userData.property.length === 1 ? 'property' : 'property'}:`
            : 'You have no properties listed!'}
        </h2>
        <CardGroup className="flex-row">
          {userData.property.map((property) => {
            return (
             <PropertyCard />
            );
          })}

        </CardGroup>   

      </Container>
    </div>
  );
};

export default Ownerportal;