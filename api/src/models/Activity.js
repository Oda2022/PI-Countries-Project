const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
   

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    hard: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        min:1,
        max:5,
      }
    },

    season: {
      type: DataTypes.ENUM("summer","winter","autumn","spring"),
      allowNull: false,
    },

  },
  {timestamps:false});
};