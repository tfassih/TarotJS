function deckClickEvent(deckContainer){
    if (deckContainer.length === 0) {
        document.getElementById("deck").removeEventListener(this, deckClickEvent);
        document.getElementById("deck").className = 'emptyPlayArea';
        document.getElementById("deck").innerHTML = '';

        let text = document.createElement('p');
        text.id = 'text';
        text.className = 'emptyPlayAreaText';
        text.innerHTML = "<p>DECK IS EMPTY</p>";
        document.getElementById("container").appendChild(text);
        document.getElementById("deck").inert = true;

    } else {
        if (document.getElementById("playArea").innerHTML.length === 0) {
            document.getElementById("playArea").innerHTML = '<img src="' + deckContainer[0].path + '" alt="" width="300" height="567">';
            deckContainer.shift();
        } else if (document.getElementById("playArea2").innerHTML.length === 0) {
            document.getElementById("playArea2").innerHTML = '<img src="' + deckContainer[0].path + '" alt="" width="300" height="567">';
            deckContainer.shift();
        } else if (document.getElementById("playArea3").innerHTML.length === 0) {
            document.getElementById("playArea3").innerHTML = '<img src="' + deckContainer[0].path + '" alt="" width="300" height="567">';
            deckContainer.shift();
        } else {
            document.getElementById("playArea").innerHTML = '';
            document.getElementById("playArea2").innerHTML = '';
            document.getElementById("playArea3").innerHTML = '';
        }
    }
}
function card(index, name, path){
    this.num = index;
    this.name = name;
    this.path = path;
}
function deck(){
    this.indexes = ['0', '1', '2', '3', '4', '5',
                    '6', '7', '8', '9', '10', '11',
                    '12', '13', '14', '15', '16',
                    '17', '18', '19', '20', '21'];
    this.names = ['The Fool', 'The Magician', 'The High Priestess', 'The Empress',
                 'The Emperor', 'The Hierophant', 'The Lovers', 'The Chariot',
                 'Strength', 'The Hermit', 'Wheel of Fortune', 'Justice',
                 'The Hanged Man', 'Death', 'Temperance', 'The Devil',
                 'The Tower', 'The Star', 'The Moon', 'The Sun',
                 'Judgement', 'The World'];
    this.path = ['00-TheFool.png', '01-TheMagician.png', '02-TheHighPriestess.png',
                 '03-TheEmpress.png', '04-TheEmperor.png', '05-TheHierophant.png',
                 '06-TheLovers.png', '07-TheChariot.png', '08-Strength.png',
                 '09-TheHermit.png', '10-WheelOfFortune.png', '11-Justice.png',
                 '12-TheHangedMan.png', '13-Death.png', '14-Temperance.png',
                 '15-TheDevil.png', '16-TheTower.png', '17-TheStar.png',
                 '18-TheMoon.png', '19-TheSun.png', '20-Judgement.png',
                 '21-TheWorld.png'];
    let cards = [];

    for (let i = 0; i < this.indexes.length; i++){
            cards.push(new card(i, this.names[i], '/assets/images/Cards/' + this.path[i]));
    }
    return cards;
}

function shuffle(o) {
    for(let j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function init(){
    let deckContainer = new deck();
    deckContainer = shuffle(deckContainer);
    let container = document.createElement('div');
    container.className = 'container';
    container.id = "container";
    document.body.appendChild(container);

    let div = document.createElement('div');
    div.className = 'card';
    div.id = 'deck';
    div.innerHTML = '<img src="/assets/images/Cards/CardBacks.png" alt="" width="300" height="567" >';
    div.addEventListener("click", () => {deckClickEvent(deckContainer)});
    container.appendChild(div);

    let div2 = document.createElement('div');
    div2.className = 'playArea';
    div2.id = 'playArea';
    container.appendChild(div2);

    let div3 = document.createElement('div');
    div3.className = 'playArea';
    div3.id = 'playArea2';
    container.appendChild(div3);

    let div4 = document.createElement('div');
    div4.className = 'playArea';
    div4.id = "playArea3";
    container.appendChild(div4);

}

window.onload = init;
