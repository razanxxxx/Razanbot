const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.yellow(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

const RazanLog = (text, color) => {
	return !color ? chalk.green('[ WHATSAPP BOT ] ') + chalk.magenta(text) : chalk.cyan('[Razanxx] ') + chalk.keyword(color)(text)
}

module.exports = {
	color,
	bgcolor,
    RazanLog
}