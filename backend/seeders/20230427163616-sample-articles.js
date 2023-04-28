"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("articles", [
      {
        title:
          "Как Джеймс Ганн помог Стражам Галактики стать популярными, а они помогли ему сохранить карьеру",
        content:
          "В преддверии будущего релиза третьих «Стражей Галактики» The Hollywood Reporter выпустил большой материал, посвященный созданию трилогии и той роли, которую сыграли актеры и глава Marvel Studios в возвращении уволенного Джеймса Ганна.",
        date_creation: new Date(),
        date_modification: new Date(),
      },
      {
        title:
          "«Самый нетипичный фильм Гая Ричи»: что пишут критики о «Переводчике»",
        content:
          "19 апреля появились первые рецензии на фильм Гая Ричи «Переводчик», его следующей картины сразу после «Операции „Фортуна“». На момент написания материала рейтинг критиков на Rotten Tomatoes — 80%, на Metacritic — 66%.",
        date_creation: new Date(),
        date_modification: new Date(),
      },
      {
        title:
          "«Межевой рыцарь»: что известно о новом сериале по «Игре престолов»",
        content:
          "12 апреля на презентации Warner Bros. Discovery подтвердили, что по вселенной «Игры престолов» разрабатывают еще один сериал — «Межевой рыцарь». Об этом писали в январе 2021-го, но с тех пор новостей о спин-оффе не было.",
        date_creation: new Date(),
        date_modification: new Date(),
      },
      {
        title:
          "Сериалы по Гарри Поттеру и «Игре престолов»: что анонсировали на презентации Warner Bros. Discovery",
        content:
          "12 апреля прошла презентация Warner Bros. Discovery. На ней компания подтвердила, что работает над телевозвращением в Хогвартс, анонсировала еще несколько проектов",
        date_creation: new Date(),
        date_modification: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("articles", null, {});
  },
};
