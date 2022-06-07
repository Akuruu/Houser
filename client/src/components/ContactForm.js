import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client/react';
import { QUERY_ME } from '../utils/queries'
import { ADD_CONTACT } from '../utils/mutations';
import Auth from '../utils/auth';

const contactForm = () => {
  const { loading, data } = useQuery(QUERY_ME);

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

