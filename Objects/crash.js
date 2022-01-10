class crash {
    constructor(bet, betamount) {
        this.bet = bet;
        this.betamount = betamount;
        this.number = this.getNumber();
    }
    getNumber() {
        let number = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
        return number;
    }
}