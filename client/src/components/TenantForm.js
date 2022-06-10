import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client/react';
import { ADD_TENANT } from '../utils/mutations';

const TenantForm = () => {
  const [tenantFormData, setTenantFormData] = useState('');
  const [validated] = useState(false);
  const [addTenant, { error }] = useMutation(ADD_TENANT);
  const [showAlert, setShowAlert] = useState(false);
  // const { propertyId } = useParams();
  const { propertyId } = useParams();

  const handleInputChange = (event) => {
    const { value } = event.target;
    setTenantFormData(value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      console.log(tenantFormData);
      return await addTenant({
        variables: { propertyId: propertyId, username: tenantFormData }
      });
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setTenantFormData('');
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Unable to locate username.
        </Alert>
        <Form.Group>
          <Form.Label htmlFor="username">Tenant's Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="username"
            name="username"
            onChange={handleInputChange}
            value={tenantFormData}
            required
          />
          <Form.Control.Feedback type="invalid">
            Username is required to add a tenant!
          </Form.Control.Feedback>
        </Form.Group>
        <Button disabled={!tenantFormData} type="submit" variant="success">
          Submit
        </Button>
      </Form>
    </>
  );
};
export default TenantForm;
