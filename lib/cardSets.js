const cardTypes = ['treasure', 'victory'],

allCards = (cards, set = []) => ({
  victory: cards.victory,
  treasure: cards.treasure,
  action: cards.action.filter(card => ( set.includes(card.name) ))
});

export const startingCards = (cards) => {
  const startingDeck = [];
  cardTypes.forEach(type => {
    for (let j = 0; j < (type === 'treasure'? 7 : 3); j++) {
      startingDeck.push(cards[type][0]);
    };
  });
  return startingDeck;
};

export const supplies = (cards, set) => {

  const allCardTypes = cardTypes.concat('action'),
  allSupplies = [],
  setSupplies = type => {
    allCards(cards, set)[type].forEach((cardType, i) => {
      const equation = type === 'treasure'? 20 * (3-i) : type === 'action' || cardType.name === 'Curse'? 10 : 8;
      for (let j = 0; j < equation; j++) {
        allSupplies.push(cardType);
      };
    });
  };

  allCardTypes.forEach(setSupplies);

  return allSupplies;
};
