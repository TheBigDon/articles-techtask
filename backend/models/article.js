module.exports = (sequelize, Sequelize) => {
  const Article = sequelize.define(
    "article",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date_creation: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      date_modification: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  Article.associate = function (models) {
    Article.hasMany(models.comment, {
      onDelete: "CASCADE",
    });
  };

  return Article;
};
