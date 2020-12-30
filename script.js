
for (let button of document.querySelectorAll('.menu__list_item')) {
  button.addEventListener('click', function(event) {
    document.querySelector('.active').classList.remove('active');
    this.classList.add('active');
  });
}

document.querySelector('.menu__list_button').addEventListener('click', function(event) {
  let cardsArr = [];

  document.querySelector('.menu').classList.add('off');
  document.querySelector('.game-page').classList.remove('off');
  document.querySelector('.game-page__levels').classList.remove('off');

  let level = document.querySelector('.active').dataset.level;
setLevel = Number(level);

  for (let i=0; i<level; i++) {
    let card = document.querySelector('.hidden-page .levels__item').cloneNode(true);

    card.addEventListener('click', function(event) {
      if (card.classList.contains('opened')) {
        location.reload();
      } else {
        let setCollection = document.querySelectorAll('.game-page__levels .levels__item');
        let cardIndex = [ ...setCollection ].indexOf(this);

        if (cardsArr.length === 0) {
          cardsArr = getGameData(setLevel);
        }

        if (cardsArr[cardIndex] > 0) {
          card.classList.add('card-bonus', 'opened');
        } else {
          card.classList.add('card-game-over', 'opened');
        }
      }
    });

    document.querySelector('.game-page__levels').append(card);
  }
});

function getCards(arrLength) {
  let arr = Array(arrLength).fill(0);
  let rand = Math.floor(Math.random() * arrLength);
  arr[rand] = 1;

  return arr;
}

function getGameData(level) {
  let gameData = getCards(level);
  return gameData;
}
