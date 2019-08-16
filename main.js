const input = document.querySelector('input');
const form = document.querySelector('form');
const ulToBuy = document.querySelector('toBuy');
const ulBought = document.querySelector('Bought');
const ulToBuyArray = [];
const ulBoughtArray = [];

const renderListToBuy = () => {

};

const addItem = (e) => {
    e.preventDefault();
    const inputText = input.value;
    if (inputText === "") return;
    input.value = "";
    const newItem = document.createElement('li');
    newItem.innerHTML = `<div></div><p>${inputText}</p><button>X</button>`;

}

form.addEventListener('submit', addItem);