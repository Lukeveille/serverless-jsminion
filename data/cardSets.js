import cardList from './cards.json';

export const standardGame = [
  'Village',
  // 'Smithy',
  'Market',
  // 'Chapel',
  'Cellar',
  'Remodel',
  'Mine',
  'Moneylender',
  'Vassal',
  'Workshop',
  'Harbinger',
  'Merchant',
  // 'Festival',
  // 'Laboratory',
];

const cardTypes = ['treasure', 'victory'],

allCards = (set = []) => ({
  victory: cardList.victory,
  treasure: cardList.treasure,
  action: cardList.action.filter(card => ( set.includes(card.name) ))
});

export const startingCards = () => {
  const startingDeck = [];
  cardTypes.forEach(type => {
    for (let j = 0; j < (type === 'treasure'? 7 : 3); j++) {
      startingDeck.push(allCards()[type][0]);
    };
  });
  return startingDeck;
};

export const supplies = (set = []) => {
  const allCardTypes = cardTypes.concat('action'),
  allSupplies = [],
  setSupplies = type => {
    allCards(set)[type].forEach((cardType, i) => {
      const equation = type === 'treasure'? 20 * (3-i) : type === 'action' || cardType.name === 'Curse'? 10 : 8;
      for (let j = 0; j < equation; j++) {
        allSupplies.push(cardType);
      };
    });
  };

  allCardTypes.forEach(setSupplies);

  return allSupplies;
};
