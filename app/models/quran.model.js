module.exports = (sequelize, Sequelize) => {
  const Quran = sequelize.define('quran', {
    index: {
      type: Sequelize.INTEGER,
    },
    sura: {
      type: Sequelize.INTEGER,
    },
    aya: {
      type: Sequelize.INTEGER,
    },
    text: {
      type: Sequelize.STRING,
    },
  });

  return Quran;
};
