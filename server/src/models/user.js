'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
  
    static associate(models) {
      
    }
  }
  User.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hash: DataTypes.VIRTUAL,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  
  User.addHook('beforeSave', async cryptPassword => {
    if(cryptPassword.password_hash) {
      cryptPassword.password = await bcrypt.hash(cryptPassword.password_hash, 8)
    }
  })
  return User;
};