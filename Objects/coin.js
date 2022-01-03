const logger = require('../Utils/logger');

class flip {
    constructor(bet, betAmount) {
        this.bet = bet;
        this.betAmount = betAmount;
        this.result = this.getResult();
        this.winnings = this.getWinnings();
    }
    getResult() {
        let result = Math.floor(Math.random() * 2);
        return (result == 0) ? 'heads' : 'tails';
    }
    getWinnings() {
        return this.betAmount * 2;
    }
    getWinner() {
        return this.result == this.bet ? logger.win(`You won ${this.winnings}`) : logger.loss(`You lost ${this.betAmount}`);
    }
}

module.exports = flip;
