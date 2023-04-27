"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("comments", [
      {
        id: 1,
        content: "Ну нормально",
        date_creation: new Date(),
        date_modification: new Date(),
        articleId: 1,
      },
      {
        id: 2,
        content: "Хорошо",
        date_creation: new Date(),
        date_modification: new Date(),
        articleId: 1,
      },
      {
        id: 3,
        content: "Не очень",
        date_creation: new Date(),
        date_modification: new Date(),
        articleId: 1,
      },
      {
        id: 4,
        content: "Ладно",
        date_creation: new Date(),
        date_modification: new Date(),
        articleId: 1,
      },
      {
        id: 5,
        content: "Ну нормально",
        date_creation: new Date(),
        date_modification: new Date(),
        articleId: 2,
      },
      {
        id: 6,
        content: "Хорошо",
        date_creation: new Date(),
        date_modification: new Date(),
        articleId: 2,
      },
      {
        id: 7,
        content: "Не очень",
        date_creation: new Date(),
        date_modification: new Date(),
        articleId: 2,
      },
      {
        id: 8,
        content: "Ладно",
        date_creation: new Date(),
        date_modification: new Date(),
        articleId: 2,
      },
      {
        id: 9,
        content: "Ну нормально",
        date_creation: new Date(),
        date_modification: new Date(),
        articleId: 3,
      },
      {
        id: 10,
        content: "Хорошо",
        date_creation: new Date(),
        date_modification: new Date(),
        articleId: 3,
      },
      {
        id: 11,
        content: "Не очень",
        date_creation: new Date(),
        date_modification: new Date(),
        articleId: 3,
      },
      {
        id: 12,
        content: "Ладно",
        date_creation: new Date(),
        date_modification: new Date(),
        articleId: 3,
      },
      {
        id: 13,
        content: "Ну нормально",
        date_creation: new Date(),
        date_modification: new Date(),
        articleId: 4,
      },
      {
        id: 14,
        content: "Хорошо",
        date_creation: new Date(),
        date_modification: new Date(),
        articleId: 4,
      },
      {
        id: 15,
        content: "Не очень",
        date_creation: new Date(),
        date_modification: new Date(),
        articleId: 4,
      },
      {
        id: 16,
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
