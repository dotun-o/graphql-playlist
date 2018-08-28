const express = require("express");
const graphqlHTTP = require("express-graphql");

const app = express();
app.use("/graphql", graphqlHTTP({

}));

app.listen(8080, () => {
    console.log("::GraphQL Playslist Application is running on Port 8080::")
});