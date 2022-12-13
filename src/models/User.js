'use strict';

const Sq = require("sequelize");
const sequelize = require("../dbconfig");

const User = sequelize.define(
    "User",
    {
        id: {
            type: Sq.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        first_name: {
          type: Sq.STRING,
          defaultValue: null,
        },
        last_name: {
          type: Sq.STRING,
          defaultValue: null,
        },
        email: {
          type: Sq.STRING,
          defaultValue: null,
        },
        password: {
          type: Sq.STRING,
          defaultValue: null,
        },

        user_type: { 
          type: Sq.ENUM('Admin', 'vendor'),
          defaultValue: "vendor",
        },
        email_verified_at:{
          type: Sq.DATE,
          defaultValue: null,
        },
        reset_password_expires:{
          type: Sq.DATE,
          defaultValue: null,
        },
        user_status:{
          defaultValue: true,
          type: Sq.BOOLEAN,
        }
    },
    {
        timestamps: true,
        freezeTableName: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deleted_at: "deleted_at",
    }
);

module.exports = User;
