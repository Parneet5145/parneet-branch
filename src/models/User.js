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
        user_type: { 
          type: Sq.ENUM('Admin', 'User'),
          defaultValue: null,
        },
    },
    {
        timestamps: true,
        freezeTableName: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

module.exports = User;