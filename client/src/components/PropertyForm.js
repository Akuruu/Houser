import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client/react';
import { ADD_PROPERTY } from '../utils/mutations';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Auth from '../utils/auth';

const PropertyForm = () => {
  const [propertyFormData, setPropertyFormData] = useState({
    nickname: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    rent: '',
    image: '',
    due: new Date()
  });

  const [validated] = useState(false);
  const [addProperty, { error }] = useMutation(ADD_PROPERTY);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setPropertyFormData({ ...propertyFormData, [name]: value });
  };

  const handleSelected = (event) => {
    setPropertyFormData({ ...propertyFormData, due: event });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const modifiedData = { ...propertyFormData };

      modifiedData.due = JSON.stringify(modifiedData.due);
      console.log(typeof modifiedData.due);
      const { data } = await addProperty({
        variables: { ...modifiedData }
      });

      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setPropertyFormData({
      nickname: '',
      street: '',
      city: '',
      state: '',
      zipcode: '',
      rent: '',
      image: '',
      due: new Date()
    });
  };

  return (
    <>
      <div className="d-flex p-3 flex-column ">
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          {/* show alert if server response is bad */}
          <Alert
            dismissible
            onClose={() => setShowAlert(false)}
            show={showAlert}
            variant="danger"
          >
            Your Property Form is Incomplete.
          </Alert>

          <Form.Group>
            <Form.Label htmlFor="nickname">Property Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Property Name"
              name="nickname"
              onChange={handleInputChange}
              value={propertyFormData.nickname}
              required
            />
            <Form.Control.Feedback type="invalid">
              Property Name is required!
            </Form.Control.Feedback>

            <Form.Label htmlFor="street">Street Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Street"
              name="street"
              onChange={handleInputChange}
              value={propertyFormData.street}
              required
            />
            <Form.Control.Feedback type="invalid">
              Street is required!
            </Form.Control.Feedback>

            <Form.Label htmlFor="city">City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              name="city"
              onChange={handleInputChange}
              value={propertyFormData.city}
              required
            />
            <Form.Control.Feedback type="invalid">
              City is required!
            </Form.Control.Feedback>

            <Form.Label htmlFor="state">State</Form.Label>
            <Form.Control
              as="select"
              name="state"
              onChange={handleInputChange}
              value={propertyFormData.state}
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

            <Form.Label htmlFor="zipcode">Zipcode</Form.Label>
            <Form.Control
              type="text"
              placeholder="Zipcode"
              name="zipcode"
              onChange={handleInputChange}
              value={propertyFormData.zipcode}
              required
            />
            <Form.Control.Feedback type="invalid">
              Zipcode is required!
            </Form.Control.Feedback>

            <Form.Label htmlFor="zipcode">Monthly Rent</Form.Label>
            <Form.Control
              type="text"
              placeholder="Rent"
              name="rent"
              onChange={handleInputChange}
              value={propertyFormData.rent}
              required
            />
            <Form.Control.Feedback type="invalid">
              Rent is required!
            </Form.Control.Feedback>

            <Form.Label htmlFor="image">Image URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Link to an image of the property"
              name="image"
              onChange={handleInputChange}
              value={propertyFormData.image}
            />
          </Form.Group>

          <div className="my-2 text-lg-start">
            <Form.Label htmlFor="due">Due Date:</Form.Label>
            <DatePicker
              selected={propertyFormData.due}
              onSelect={handleSelected}
              name="due"
              value={propertyFormData.due}
            />
          </div>

          <div className="d-flex justify-content-end p-3">
            <Button
              disabled={
                !(
                  propertyFormData.nickname &&
                  propertyFormData.street &&
                  propertyFormData.city &&
                  propertyFormData.state &&
                  propertyFormData.zipcode &&
                  propertyFormData.rent &&
                  propertyFormData.due
                )
              }
              type="submit"
              variant="success"
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default PropertyForm;
