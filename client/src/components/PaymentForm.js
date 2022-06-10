import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_PAYMENT } from '../utils/queries';
import { useParams } from 'react-router-dom';

const PaymentForm = () => {
  const stripe = useStripe();

  const elements = useElements();
  const [payment, { error }] = useLazyQuery(QUERY_PAYMENT);
  const propertyId = useParams();
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    });

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (!error) {
      try {
        const { id } = paymentMethod;
        const { data } = await payment({
          variables: { id: id, propertyId: propertyId }
        });
        return data;
      } catch (err) {
        console.error(err);
        setShowAlert(true);
      }
    }
  };

  return (
    <div>
      <h1>Rental Payment</h1>
      <CardElement />
      <Button onClick={handleSubmit}>Pay Now</Button>
      <Alert
        dismissible
        onClose={() => setShowAlert(false)}
        show={showAlert}
        variant="danger"
      >
        Please Enter a Valid Payment Option
      </Alert>
    </div>
  );
};

export default PaymentForm;
