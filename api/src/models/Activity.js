const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
<<<<<<< HEAD
   
=======

    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique:true
    },
>>>>>>> a5fd5c261b01ee910c77ad3bf9fb91cde5036aa6

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

<<<<<<< HEAD
    hard: {
=======
    hard:{
>>>>>>> a5fd5c261b01ee910c77ad3bf9fb91cde5036aa6
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        min:1,
        max:5,
      }
    },

<<<<<<< HEAD
    season: {
      type: DataTypes.ENUM("summer","winter","autumn","spring"),
=======
    season:{
      type: DataTypes.ENUM('summer', 'winter', 'autumn', 'spring'),
>>>>>>> a5fd5c261b01ee910c77ad3bf9fb91cde5036aa6
      allowNull: false,
    },

  },
  {timestamps:false});
};