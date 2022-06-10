import React, { useEffect, useState } from 'react';
// import Card from 'react-bootstrap/Card';
import { Container, CardGroup, Card, Button, Modal } from 'react-bootstrap';
import { QUERY_PROPERTY } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropertyCard from '../PropertyCard';
import '../../styles/app.css';
import Assets1 from '../../assets/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg';
import PropertyForm from '../PropertyForm';
import TenantForm from '../TenantForm';

const Properties = () => {
  const { propertyId } = useParams();
  const { loading, data } = useQuery(QUERY_PROPERTY, {
    // pass URL parameter
    variables: { propertyId: propertyId }
  });

  const ownerData = data?.property || [];

  //modal for edit property
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  useEffect(() => {
    console.log(ownerData);
  }, [ownerData]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Container>
            <h2>Property Information</h2>
            <CardGroup>
              {/* <PropertyCard /> */}

              <Card className="col-5 p-4 affect" border="dark">
                <Card.Img
                  src={Assets1}
                  className="rentalimage"
                  alt="Rental Image"
                  variant="top"
                />
                <Card.Body>
                  <Card.Title>{ownerData.nickname}</Card.Title>
                  {/* <p className='small'>{ownerData.due}</p> */}
                  <Card.Text>Rent Amount: {ownerData.rent}</Card.Text>
                  <Card.Text>{ownerData.street}</Card.Text>
                  <Card.Text>
                    {ownerData.state}, {ownerData.state} {ownerData.zipcode}
                  </Card.Text>
                  <Button className="btn-block rentalbtn" onClick={handleShow1}>
                    Edit Property Info
                  </Button>
                </Card.Body>
              </Card>

              {ownerData.tenants?.map((tenants) => {
                return (
                  <Card className="col-5 p-4" key="" border="dark">
                    <Card.Body>
                      <Card.Title>Tenants:</Card.Title>
                      <Card.Title>
                        {tenants.contact.firstName} {tenants.contact.lastName}
                      </Card.Title>
                      <p className="small">{ownerData.due}</p>

                      <Card.Text>{tenants.contact.street}</Card.Text>
                      <Card.Text>
                        {tenants.contact.city} {tenants.contact.state}{' '}
                        {tenants.contact.zipcode}
                      </Card.Text>
                      <Card.Text>{tenants.contact.phone1}</Card.Text>
                      <Card.Text>{tenants.contact.phone2}</Card.Text>
                      <Button
                        className="btn-block btn-danger"
                        onClick={handleShow2}
                      >
                        Add Tenant
                      </Button>
                    </Card.Body>
                  </Card>
                );
              })}
            </CardGroup>
          </Container>

          {/* Modal for edit property info*/}

          <Modal show={show1} onHide={handleClose1}>
            <Modal.Header closeButton>
              <Modal.Title>My Property</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <PropertyForm />
            </Modal.Body>
          </Modal>

          <Modal show={show2} onHide={handleClose2}>
            <Modal.Header closeButton>
              <Modal.Title>New Tenant</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <TenantForm />
            </Modal.Body>
          </Modal>
        </div>
      )}
    </>
  );
};

export default Properties;
