"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("comments", [
      {
        content: "Ну нормально",
        date_creation: new Date(),
        date_modification: new Date(),
        articleId: 1,
      },
      {
        content: "Хорошо",
        date_creation: new Date(),
        date_modification: new Date(),
        articleId: 1,
      },
      {
        content: "Не очень",
        date_creation: new Date(),
        date_modification: new Date(),
        articleId: 1,
      },
      {
        content: "Ладно",
        date_creation: new Date(),
        date_modification: new Date(),
        articleId: 1,
      },
      {
        content: "Ну нормально",
        date_creation: new Date(),
        date_modification: new Date(),
        articleId: 2,
      },
      {
        content: "Хорошо",
        date_creation: new Date(),
        date_modification: new Date(),
        articleId: 2,
      },
      {
        content: "Не очень",
        date_creation: new Date(),
        date_modification: new Date(),
        articleId: 2,
      },
      {
        content: "Ладно",
        date_creation: new Date(),
        date_modification: new Date(),
        articleId: 2,
      },
      {
        content: "Ну нормально",
        date_creation: new Date(),
        date_modification: new Date(),
        articleId: 3,
      },
      {
        content: "Хорошо",
        date_creation: new Date(),
        date_modification: new Date(),
        articleId: 3,
      },
      {
        content: "Не очень",
        date_creation: new Date(),
        date_modification: new Date(),
        articleId: 3,
      },
      {
        content: "Ладно",
        date_creation: new Date(),
        date_modification: new Date(),
        articleId: 3,
      },
      {
        content: "Ну нормально",
        date_creation: new Date(),
        date_modification: new Date(),
        articleId: 4,
      },
      {
        content: "Хорошо",
        date_creation: new Date(),
        date_modification: new Date(),
        articleId: 4,
      },
      {
        content: "Не очень",
        date_creation: new Date(),
        date_modification: new Date(),
        articleId: 4,
      },
      {
        content: "Ладно",
        date_creation: new Date(),
        date_modification: new Date(),
        articleId: 4,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("comments", null, {});
  },
};
