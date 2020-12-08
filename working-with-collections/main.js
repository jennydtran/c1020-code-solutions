/* global _ */
/* eslint-disable no-console */
console.log('Lodash is loaded:', typeof _ !== 'undefined');

const players = [{ name: 'Jen', hand: [] }, { name: 'TimD', hand: [] }, { name: 'Cody', hand: [] }, { name: 'Uzair', hand: [] }];

let deck = [];
const ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
const suits = ['clubs', 'diamonds', 'hearts', 'spades'];

for (var i = 0; i < suits.length; i++) {
  for (var j = 0; j < ranks.length; j++) {
    deck.push({ suit: suits[i], rank: ranks[j] });
  }
}

const cardsDealt = 2;

playGame(players, cardsDealt);

function playGame(players, number) {
  if (players.length * number > 52) {
    return console.log('Not enough cards to deal to players.');
  }
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
    console.log(`\nThere is a ${winners.length}-way tie with each player having ${highestPoints} points!\nA tiebreaker game is about to start!`);
    for (let i = 0; i < winners.length; i++) {
      winners[i].hand = [];
      delete winners[i].points;
    }
    playGame(winners, cardsDealt);
  }
}
