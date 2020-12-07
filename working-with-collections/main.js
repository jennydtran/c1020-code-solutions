/* global _ */
/* eslint-disable no-console */
console.log('Lodash is loaded:', typeof _ !== 'undefined');

const players = [{ name: 'Jen', hand: [] }, { name: 'TimD', hand: [] }, { name: 'Cody', hand: [] }, { name: 'Uzair', hand: [] }];

let deck = [
  { rank: 'Ace', suit: 'clubs' }, { rank: 2, suit: 'clubs' }, { rank: 3, suit: 'clubs' }, { rank: 4, suit: 'clubs' }, { rank: 5, suit: 'clubs' }, { rank: 6, suit: 'clubs' }, { rank: 7, suit: 'clubs' }, { rank: 8, suit: 'clubs' }, { rank: 9, suit: 'clubs' }, { rank: 10, suit: 'clubs' }, { rank: 'Jack', suit: 'clubs' }, { rank: 'Queen', suit: 'clubs' }, { rank: 'King', suit: 'clubs' },
  { rank: 'Ace', suit: 'diamonds' }, { rank: 2, suit: 'diamonds' }, { rank: 3, suit: 'diamonds' }, { rank: 4, suit: 'diamonds' }, { rank: 5, suit: 'diamonds' }, { rank: 6, suit: 'diamonds' }, { rank: 7, suit: 'diamonds' }, { rank: 8, suit: 'diamonds' }, { rank: 9, suit: 'diamonds' }, { rank: 10, suit: 'diamonds' }, { rank: 'Jack', suit: 'diamonds' }, { rank: 'Queen', suit: 'diamonds' }, { rank: 'King', suit: 'diamonds' },
  { rank: 'Ace', suit: 'hearts' }, { rank: 2, suit: 'hearts' }, { rank: 3, suit: 'hearts' }, { rank: 4, suit: 'hearts' }, { rank: 5, suit: 'hearts' }, { rank: 6, suit: 'hearts' }, { rank: 7, suit: 'hearts' }, { rank: 8, suit: 'hearts' }, { rank: 9, suit: 'hearts' }, { rank: 10, suit: 'hearts' }, { rank: 'Jack', suit: 'hearts' }, { rank: 'Queen', suit: 'hearts' }, { rank: 'King', suit: 'hearts' },
  { rank: 'Ace', suit: 'spades' }, { rank: 2, suit: 'spades' }, { rank: 3, suit: 'spades' }, { rank: 4, suit: 'spades' }, { rank: 5, suit: 'spades' }, { rank: 6, suit: 'spades' }, { rank: 7, suit: 'spades' }, { rank: 8, suit: 'spades' }, { rank: 9, suit: 'spades' }, { rank: 10, suit: 'spades' }, { rank: 'Jack', suit: 'spades' }, { rank: 'Queen', suit: 'spades' }, { rank: 'King', suit: 'spades' }
];

const cardsDealt = 2;

playGame(players, cardsDealt);

function playGame(players, number) {
  if (players.length * number > 52) { return console.log('Not enough cards to deal to players.'); }
  dealCards(players, number);
  calculatePoints(players);
  determineWinner(players);
}

function dealCards(players, number) {
  deck = _.shuffle(deck);

  let count = 0;
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < number; j++) {
      if (players[i].hand.length !== number) {
        players[i].hand.push(deck[count].rank);
        count++;
      }
    }
    console.log(`  ${players[i].name} was dealt ${cardsDealt} cards: ${players[i].hand}`);
  }
}

function calculatePoints(players) {
  for (let i = 0; i < players.length; i++) {
    const points = [];
    for (let j = 0; j < players[i].hand.length; j++) {
      if (players[i].hand[j] === 'Ace' || players[i].hand[j] === 'King' || players[i].hand[j] === 'Queen' || players[i].hand[j] === 'Jack') {
        points.push(11);
      } else {
        points.push(players[i].hand[j]);
      }
    }
    players[i].points = _.sum(points);
  }
}

function determineWinner(players) {
  const xPoints = [];
  for (let i = 0; i < players.length; i++) {
    xPoints.push(players[i].points);
  }
  const highestPoints = _.max(_.uniq(xPoints));

  let winnerCount = 0;
  const winners = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].points === highestPoints) {
      winnerCount++;
      winners.push(players[i]);
    }
  }
  if (winnerCount === 1) {
    return console.log(`\nThe winner is ${winners[0].name} with ${winners[0].points} points!`);
  } else if (winnerCount > 1) {
    console.log(`\nThere is a ${winners.length}-way tie with each player having ${highestPoints} points! A tiebreaker game is about to start!`);
    for (let i = 0; i < winners.length; i++) {
      winners[i].hand = [];
      delete winners[i].points;
    }
    playGame(winners, cardsDealt);
  }
}
