const chalk = require('chalk');
const figlet = require('figlet');

function win(message) {
    console.log(chalk.green('[LOGGER - Win] » ' + message));
}

function loss(message) {
    console.log(chalk.red('[LOGGER - Loss] » '+ message));
}

function ascii(message) {
    console.log(chalk.red(figlet.textSync(message, {
        font: 'Bloody',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 300,
        whitespaceBreak: true
    })))
}

function text(message) {
    console.log(chalk.blue(message));
}

function space(integer) {
    console.log(chalk.white('\n'.repeat(integer)));
}

module.exports = {
    win,
    loss,
    ascii,
    text,
    space
}