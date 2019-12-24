/**
 * Required dependencies
 */
const express = require("express");
const todoRoutes = require("./routes/todos")
const bodyParser = require("body-parser");


/**
 * App variables
 */
const app = express();
const PORT = process.env.PORT || "8000";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/**
 * Routes
 */
app.get("/", (req, res) => {
  res.status(200).send("All works fine");
});

app.use("/api/todos", todoRoutes);


/**
 * Server activation
 */
app.listen(PORT, () => {
  console.log(`Listening to requestes on http://localhost/${PORT}`);
})