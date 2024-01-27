const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "mysql://root:" +
    encodeURIComponent("Ij6lS*H?ScwD") +
    "@localhost:3306/joga_sequelize"
);

const models = require("../../models");

// create new article into data table

const createArticle = (req, res) => {
  // get form data
  let name = req.body.name
  let slug = req.body.slug
  let image = req.body.image
  let body = req.body.body

  const newArticle = models.Article.create({
    name: name,
    slug: slug,
    image: image,
    body: body,
    published: new Date().toISOString().slice(0, 19).replace('T', " ")
  })
  .then(article => {
    console.log(article)
    return res.status(200).json({message: "New article is added"});
  })
  .catch (error => {
    return res.status(500).send(error.message);
  })
}



// export controller functions
module.exports = {
  createArticle
};
