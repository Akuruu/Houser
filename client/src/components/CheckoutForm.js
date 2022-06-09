import React, { useState, useEffect } from "react";
import { Property } from "../../../server/models/Property.js";
import "../styles";

const PayRent = () => (
  <section>
    <div className="product">
      {/* <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      /> */}
      <div className="description">
      <h3>{Property.nickname}</h3>
      <h5>${Property.rent}</h5>
      </div>
    </div>
    <form action="/create-checkout-session" method="POST">
      <button type="submit">
        Pay Now
      </button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Payment was successful!");
    }

    if (query.get("canceled")) {
      setMessage(
        "Payment failed, please try again."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <PayRent />
  );
}