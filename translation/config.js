const path = require('path')
const { I18n } = require('i18n')

const i18n = new I18n({
    locales: ['uz', 'en'],
    directory: path.join(__dirname),
    defaultLocale: 'uz',
})

module.exports = i18n