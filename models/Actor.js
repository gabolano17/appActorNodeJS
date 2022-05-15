const { DataTypes } = require('sequelize');
const db = require('../database/db');

const Actor = db.define('actor', {
    actor_id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    first_name : {
        type: DataTypes.STRING
    },
    last_name : {
        type: DataTypes.STRING,
    },
    last_update : {
        type: DataTypes.DATE
    }
}, {
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: "actor"
});

module.exports = Actor;