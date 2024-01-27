const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "mysql://root:" +
    encodeURIComponent("Ij6lS*H?ScwD") +
    "@localhost:3306/joga_sequelize"
);

const models = require("../models")

// read model data for table representation
const Article = require("../models/article")(sequelize, Sequelize.DataTypes);

// get all data from table
const getAllArticles = (req, res) => {
  models.Article.findAll().then(articles => {
    console.log(articles)
    return res.status(200).json({articles})
  })
  .catch(error => {
    return res.status(500).send(error.message);
  })

}
// get article data by slug
const getArticleBySlug = (req, res) => {
  models.Article.findOne({
    where: {
      slug: req.params.slug
    },
    include: [{
      model: models.Author
    }],
  })
  .then(article => {
    console.log(article)
    return res.status(200).json({article})
  })
  .catch(error => {
    return res.status(500).send(error.message)
  })

}

// export controller functions
module.exports = {
  getAllArticles,
  getArticleBySlug,
}