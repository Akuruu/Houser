const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { authMiddleware } = require("./utils/auth");
// Stripe
const stripe = require('stripe')('pk_test_51L8mxwGjPT5TzhsrgAnNQn9oljKi7JKrQU9ZsfnZJvJ3O5DoeFM7FUdRvTkDrQ5ErwKedjXeOqRRPzBf21IAKqUr00h8FQYBH2');
// PUBLISHABLE KEY: pk_test_51L8mxwGjPT5TzhsrgAnNQn9oljKi7JKrQU9ZsfnZJvJ3O5DoeFM7FUdRvTkDrQ5ErwKedjXeOqRRPzBf21IAKqUr00h8FQYBH2
// SECRET KEY: sk_test_51L8mxwGjPT5TzhsrTHLLIadqjZiaVPlHPmktYlhNcHbyfO0yfWPOmcQ8zty6WH8vwC2MyqvdLIK1RxJ62KPYyIFa00oJnoKLIp


const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Stripe
app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1,
      },
    ],
    // redirection to a success/fail page
    // mode: 'payment',
    // success_url: `${YOUR_DOMAIN}?success=true`,
    // cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });
  // redirects to checkout 
  res.redirect(303, session.url);
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);

//done
