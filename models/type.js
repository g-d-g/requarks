"use strict";

module.exports = function(sequelize, DataTypes) {

  var Type = sequelize.define("Type",
  {
    name:         DataTypes.STRING,
    description:  DataTypes.STRING,
    color:        DataTypes.STRING,
    icon:         DataTypes.STRING
  },
  {
    timestamps: true,
    classMethods: {
      associate(models) {


      }
    }
  });

  return Type;
};