const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = 'dotenv';
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const jwt = require('jsonwebtoken')

// Bodyparser middleware
app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.json())
app.use(cookieParser())

//Mongoose connection
require('dotenv').config();

mongoose.connect(`${process.env.MONGO_URI}`, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
.then(() => console.log("Established a connection to the database"))
.catch((err) => console.log("Something went wrong when connecting to the database", err));

app.use(cors({
	credentials: true,
	origin: "http://localhost:3000"
}))
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// tokens


// Bring in Routes
//require("./config/db")
require("./routes/productRoutes")(app)
require("./routes/userRoutes")(app)

//app.use('/api/mybuild', mybuildRoutes)
//app.use('/api', productRoutes)
//const PORT = process.env.PORT || 5000

app.listen(5000, () => console.log("Listening on Port 5000"))