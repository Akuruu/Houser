import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import PropertyCard from "../Properties";
import { Container, CardGroup, Card, Button } from 'react-bootstrap';
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
      <Container>
        <div className="m-3">
          <h1>Hello, {userData.contact.firstName}</h1>
          <p>
             <Button variant="primary" onClick={handleShow}>Edit Contact Info</Button>
          {/* The onclick is need for modal */}
          </p>
        </div>
      </Container>

      <Container>
        <h2> Properties Listed
          {/* {userData.property.length
            ? `Viewing ${userData.property.length} saved ${userData.property.length === 1 ? 'property' : 'property'}:`
            : 'You have no properties listed!'} */}
        </h2>
        <CardGroup className="flex-row">
          {userData.properties?.map((propertyData) => {
            return (
             <PropertyCard />
            );
          //   return ( 

          //     <Card className="col-5 p-4" key="" border='dark'>
          //       <Card.Img src={Assets1} className= "rentalimage" alt="Rental Image" variant='top' /> 
          //         <Card.Body>
          //           <Card.Title>{propertyData.nickname}</Card.Title>
          //           <p className='small'>{propertyData.due}</p>
          //           <Card.Text>{propertyData.rent}</Card.Text>
          //           <Card.Text>{propertyData.street}</Card.Text>
          //           <Card.Text>{propertyData.state}, {propertyData.state} {propertyData.zip}</Card.Text>
          //           <Button className='btn-block btn-danger' onClick= "">
          //             I don't know what to put here
          //           </Button>
          //         </Card.Body>
          //     </Card>
          // ) 
          })}

        </CardGroup>   

      </Container>
    </div>
    )
  }
  </>
  );
};

export default Ownerportal;