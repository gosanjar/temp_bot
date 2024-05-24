const { Markup } = require('telegraf')
const i18n = require('../translation/config')

const start_btn = Markup.keyboard([
    [i18n.__("start_btn").techniques, i18n.__("start_btn").orders],
    [i18n.__("start_btn").lang, i18n.__("start_btn").cart],
    [i18n.__("start_btn").admin],
]).resize()

const receive_offer = Markup.keyboard([i18n.__("receive_offer")]).resize()

const requestPhoneKeyboard = {
    "reply_markup": {
        "keyboard": [
            [{
                text: i18n.__("phone_key"),
                request_contact: true
            }]
        ], resize_keyboard: true
    }
}

module.exports = {
    start_btn,
    receive_offer,

    requestPhoneKeyboard
}