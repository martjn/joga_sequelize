const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "mysql://root:" +
    encodeURIComponent("Ij6lS*H?ScwD") +
    "@localhost:3306/joga_sequelize"
);

const models = require("../models");

// read model data for table representation
const Author = require("../models/author")(sequelize, Sequelize.DataTypes);
const Article = require("../models/article")(sequelize, Sequelize.DataTypes);

// get article data by slug
const getArticlesByAuthor = (req, res) => {
  models.Author.findByPk(req.params.id).then(author => {
    console.log("author => ", author);
    models.Article.findAll({where: {
      author_id: author.id
    }})
    .then(articles => {
      return res.status(200).json({articles})
    })
    .catch((error) => {
      return res.status(500).send(error.message)
    })
  });
};

module.exports = {
  getArticlesByAuthor
}