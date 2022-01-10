const { flip, crash } = require('./handler/loadObjects');
const ready = require('./Event/ready');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let crash1 = new crash(9.4, 100);

//rl.question('How much do you want to bet? ', (betAmount) => {
//    if (betAmount.match(/^\d+$/)) {
//        rl.question('Heads or Tails? ', (bet) => {
//            if (bet.match(/^(heads|tails)$/i)) {
//                rl.close();
//                let coin = new flip(bet, betAmount);
//                coin.getWinner();
//            } else {
//                console.log('Please enter heads or tails.');
//                rl.close();
//            }
//        });
//    } else {
//       console.log('Please enter a number.');
//        rl.close();
//    }
//});
