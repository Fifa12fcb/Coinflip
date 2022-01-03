class hilo {
    constructor (bet, betAmount) {
        this.bet = bet;
        this.betAmount = betAmount;
        this.number = this.getNumber();
        this.result = this.getResult();
        this.winnings = this.getWinnings();
    }
    getNumber() {
        let result = Math.floor(Math.random() * 13);
        return result;
    }
    getResult() {
        let result = this.getNumber();
        if (result >= 1 && result <= 9) {
            return result;
        }
        else if (result == 10) {
            return 'J';
        }
        else if (result == 11) {
            return 'Q';
        }
        else if (result == 12) {
            return 'K';
        }
        else if (result == 13) {
            return 'A';
        }
    }
    getWinnings() {
        return this.betAmount * 2;
    }
    getWinner() {
        if (this.bet == 'hilo') {
            if (this.result == this.number) {
                return logger.win(`You won ${this.winnings}`);
            }
            else {
                return logger.loss(`You lost ${this.betAmount}`);
            }
        }
        else if (this.bet == 'lower') {
            if (this.result < this.number) {
                return logger.win(`You won ${this.winnings}`);
            }
            else {
                return logger.loss(`You lost ${this.betAmount}`);
            }
        }
        else if (this.bet == 'higher') {
            if (this.result > this.number) {
                return logger.win(`You won ${this.winnings}`);
            }
            else {
                return logger.loss(`You lost ${this.betAmount}`);
            }
        }
    }
}