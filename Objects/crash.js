const logger = require('../Utils/logger');

class crash {
    constructor(bet, betamount) {
        this.bet = bet;
        this.betamount = betamount;
        this.number = this.getNumber();
        this.winnings = this.getWinnings();
    }
    getNumber() {
        return Math.floor(Math.random() * (1000 - 100) + 100) / 100;
    }
    getWinnings() {
        logger.text(`You bet ${this.betamount} on ${this.bet}`);
        logger.text(`The number is ${this.number}`);
        return this.bet < this.number ? logger.win(`Yon won ${this.betamount * 2}`) : logger.loss(`You lost ${this.betamount}`);
    }
}

module.exports = crash;