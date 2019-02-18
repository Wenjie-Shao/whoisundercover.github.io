import Words from '../assets/words';

function randItem(arr) {
  let len = arr.length;
  let rand = Math.floor(Math.random() * len);
  return {value: arr[rand], index: rand};
}
export default {
  getCards(playerNum, ucNum, emptyNum) {
    let cards = [],
      seeds = [];
    let {value} = randItem(Words.words);
    let dict = value;
    for (let i = 0; i < playerNum; i++) {
      cards.push({
        id: i + 1,
        content: dict[0],
        identity: '平民',
        showWord: false,
        showIdentity: false,
      });
      seeds.push(i);
    }
    while(ucNum > 0) {
      let {value, index} = randItem(seeds);
      seeds.splice(index, 1);
      cards[value].identity = '卧底';
      cards[value].content = dict[1];
      ucNum --;
    }
    while(emptyNum > 0) {
      let {value, index} = randItem(seeds);
      seeds.splice(index, 1);
      cards[value].identity = '白板';
      cards[value].content = '';
      emptyNum --;
    }
    return cards;
  }
}