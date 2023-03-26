const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {

    id:{
      type: DataTypes.STRING(3),
<<<<<<< HEAD
      primaryKey: true
=======
      primaryKey: true,
>>>>>>> a5fd5c261b01ee910c77ad3bf9fb91cde5036aa6
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

<<<<<<< HEAD
    flags: {
=======
    flags:{
>>>>>>> a5fd5c261b01ee910c77ad3bf9fb91cde5036aa6
      type: DataTypes.STRING,
      allowNull: false,
    },

<<<<<<< HEAD
    continents: {
=======
    continents:{
>>>>>>> a5fd5c261b01ee910c77ad3bf9fb91cde5036aa6
      type: DataTypes.STRING,
      allowNull: false,
    },

<<<<<<< HEAD
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
=======
    capital:{
      type: DataTypes.STRING,
      allowNull: false
    },

    population:{
      type: DataTypes.INTEGER,
>>>>>>> a5fd5c261b01ee910c77ad3bf9fb91cde5036aa6
    },
  },
  {timestamps:false});
};
