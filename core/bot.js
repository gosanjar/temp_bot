const { Telegraf, session } = require('telegraf')
const { initSequelize, } = require('../action/sequelize')
const dotenv = require('dotenv').config()

const bot = new Telegraf(process.env.TOKEN)
bot.use(session())
bot.use((ctx, next) => { if (!ctx.session) { ctx.session = {}; }; next() });
bot.launch()
initSequelize()

module.exports = {
    bot
}
