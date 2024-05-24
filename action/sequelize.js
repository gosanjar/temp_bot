const { Sequelize, DataTypes } = require("sequelize")
const { v4: uuidv4 } = require('uuid')

const sequelize = new Sequelize("base_name", "postgres", "root", {
    host: "127.0.0.1",
    dialect: "postgres",
    logging: false
})

const User = sequelize.define('User', {
    user_id: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING }
})

async function initSequelize() {
    await sequelize.authenticate()
        .then(data => {
            console.log("Successfully sequelize authenticated")
        })
        .catch(err => {
            console.log(err)
        })

    await sequelize.sync({ alter: true })
        .then(data => {
            console.log("Successfully sequelize syncing")
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports = {
    sequelize,
    initSequelize,

    User
}
