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

function dealCards(players, number) {
  if (players.length * number > 52) { return console.log('Not enough cards to deal to players.'); }

  deck = _.shuffle(deck);

  for (let i = 0, j = 0; i < players.length * number; i++, j++) {
    if (j === players.length) {
      j = 0;
    }
    if (players[j].hand.length !== number) {
      if (deck[i].rank === 'Ace' || deck[i].rank === 'King' || deck[i].rank === 'Queen' || deck[i].rank === 'Jack') {
        deck[i].rank = 11;
      }
      players[j].hand.push(deck[i].rank);
    }
  }
  console.log(players);
}
dealCards(players, 2);

function calculatePoints(players) {
  const sum = _.sum(players.hand);
  return sum;
}
