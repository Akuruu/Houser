import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client/react';
import { ADD_CONTACT } from '../utils/mutations';
import Auth from '../utils/auth';

const ContactForm = () => {
  const [contactFormData, setContactFormData] = useState({
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    phone1: '',
    phone2: ''
  });

  const [validated] = useState(false);
  const [addContact, { error }] = useMutation(ADD_CONTACT);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactFormData({ ...contactFormData, [name]: value });
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
      const { data } = await addContact({ variables: { ...contactFormData } });

      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setContactFormData({
      firstName: '',
      lastName: '',
      street: '',
      city: '',
      state: '',
      zipcode: '',
      phone1: '',
      phone2: ''
    });
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
          Your Contact Form is Incomplete.
        </Alert>

        <Form.Group>
          <Form.Label htmlFor="firstName">First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={handleInputChange}
            value={contactFormData.firstName}
            required
          />
          <Form.Control.Feedback type="invalid">
            First name is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="lastName">Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={handleInputChange}
            value={contactFormData.lastName}
            required
          />
          <Form.Control.Feedback type="invalid">
            Last name is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="street">Street Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Street"
            name="street"
            onChange={handleInputChange}
            value={contactFormData.street}
            required
          />
          <Form.Control.Feedback type="invalid">
            Street is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="city">City</Form.Label>
          <Form.Control
            type="text"
            placeholder="City"
            name="city"
            onChange={handleInputChange}
            value={contactFormData.city}
            required
          />
          <Form.Control.Feedback type="invalid">
            City is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="state">State</Form.Label>
          <Form.Control
            as="select"
            name="state"
            onChange={handleInputChange}
            value={contactFormData.state}
            required
          >
            <option value="">N/A</option>
            <option value="AK">Alaska</option>
            <option value="AL">Alabama</option>
            <option value="AR">Arkansas</option>
            <option value="AZ">Arizona</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DC">District of Columbia</option>
            <option value="DE">Delaware</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="IA">Iowa</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="MA">Massachusetts</option>
            <option value="MD">Maryland</option>
            <option value="ME">Maine</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MO">Missouri</option>
            <option value="MS">Mississippi</option>
            <option value="MT">Montana</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="NE">Nebraska</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NV">Nevada</option>
            <option value="NY">New York</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="PR">Puerto Rico</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VA">Virginia</option>
            <option value="VT">Vermont</option>
            <option value="WA">Washington</option>
            <option value="WI">Wisconsin</option>
            <option value="WV">West Virginia</option>
            <option value="WY">Wyoming</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            State is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="zipcode">Zipcode</Form.Label>
          <Form.Control
            type="text"
            placeholder="Zipcode"
            name="Zipcode"
            onChange={handleInputChange}
            value={contactFormData.zipcode}
            required
          />
          <Form.Control.Feedback type="invalid">
            Zipcode is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="phone1">Primary Phone #</Form.Label>
          <Form.Control
            type="text"
            placeholder="(XXX)XXX-XXXX"
            name="phone1"
            onChange={handleInputChange}
            value={contactFormData.phone1}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="phone2">Secondary Phone #</Form.Label>
          <Form.Control
            type="text"
            placeholder="(XXX)XXX-XXXX"
            name="phone2"
            onChange={handleInputChange}
            value={contactFormData.phone2}
          />
        </Form.Group>

        <Button
          disabled={
            !(
              contactFormData.firstName &&
              contactFormData.lastName &&
              contactFormData.street &&
              contactFormData.city &&
              contactFormData.state &&
              contactFormData.zipcode
            )
          }
          type="submit"
          variant="success"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default ContactForm;
