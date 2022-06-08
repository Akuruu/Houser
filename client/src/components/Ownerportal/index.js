import React from "react";
import { Link } from 'react-router-dom';
import Properties from "../Properties";
import { Jumbotron, Container, Button } from 'react-bootstrap';
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";
// import Panel from 'react-bootstrap/Panel';
import "../../styles/app.css";


const Ownerportal = () => {
  // const {data} = useQuery(QUERY_USER);
  // let user;
  // if (data) {
  //   user= data.user;
  // }

  return (
    <div>
      <div fluid className="m-3">
          <h1>Hello, George</h1>
            <p>
               Listed below is your rental properties.
            </p>
      </div>
      <div>
        <Properties />
      </div>
    </div>
  );
};

export default Ownerportal;