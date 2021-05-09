const express = require('express');
const app = express();
const cors = require('cors');
//const connectDB = require('./config/db.js');
const dotenv = 'dotenv';
//const productRoutes = require('./routes/productRoutes.js')

//import mybuildRoutes from './routes/mybuildRoutes.js'

//connectDB()

//Mongoose connection
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`${process.env.MONGO_URI}`, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
.then(() => console.log("Established a connection to the database"))
.catch((err) => console.log("Something went wrong when connecting to the database", err));

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Bring in Routes
require("./config/db")
require("./routes/productRoutes")(app)

//app.use('/api/mybuild', mybuildRoutes)
//app.use('/api', productRoutes)
//const PORT = process.env.PORT || 5000

app.listen(5000, () => console.log("Listening on Port 5000"))