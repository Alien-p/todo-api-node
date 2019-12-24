/**
 * Required External Modules
 */

const express = require("express");


/**
 * App variables
 */

const app = express();
const PORT = process.env.PORT || "8000";


/**
 * Routes definition
 */

app.get("/", (req, res) => {
  res.status(200).send("All works fine");
});

app.get("/api/todo", (req, res) =>{
  
})


/**
 * Server activation
 */

 app.listen(PORT, () => {
  console.log(`Listening to requestes on http://localhost/${PORT}`);
})