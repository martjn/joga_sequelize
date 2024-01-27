const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.json());

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.json({message:"welcome to sequelize application"})
})

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`)
})