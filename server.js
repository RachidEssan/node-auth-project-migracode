const express = require("express");
const cors = require("cors");
const path = require('path');

const user = require("./routes/user");
// initializing express application
const app = express();


// parse requests of content-type - application/json
app.use(express.json());
app.use(express.urlencoded({extended: true}));


const corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));  // enable CORS

app.use(express.static(path.join(__dirname, 'reactapp/build')));


// simple route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'reactapp/build', 'index.html'));
});
app.use("/user", user);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
