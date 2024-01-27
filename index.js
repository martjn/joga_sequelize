const express = require("express");
const app = express();
const {Sequelize} = require("sequelize")

const PORT = 3000;

app.use(express.json());

app.use(express.urlencoded({extended: true}))

// connect to database

const sequelize = new Sequelize("mysql://root:" + encodeURIComponent("Ij6lS*H?ScwD") + "@localhost:3306/joga_sequelize");


// testing connection
sequelize.authenticate().then(() => {
  console.log("Connected to the database")
})
.catch(err => {
  console.error("Unable to connect to the database:", err);
})

app.get('/', (req, res) => {
  res.json({message:"welcome to sequelize application"})
})

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`)
})