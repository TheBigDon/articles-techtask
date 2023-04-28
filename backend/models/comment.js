module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define(
    "comment",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
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
  Comment.associate = function (models) {
    Comment.belongsTo(models.article);
  };

  return Comment;
};
