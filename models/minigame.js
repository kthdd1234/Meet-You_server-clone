'use strict';
module.exports = (sequelize, DataTypes) => {
  const miniGame = sequelize.define(
    'miniGame',
    {
      problem: DataTypes.STRING,
      solution: DataTypes.STRING,
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
  miniGame.associate = function (models) {
    miniGame.belongsToMany(models.users, {
      through: 'miniGame_Data',
      foreignKey: 'miniGameId',
    });
  };
  return miniGame;
};
