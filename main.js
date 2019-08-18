const input = document.querySelector('.addingItem');
const form = document.querySelector('form');
const ulToBuy = document.querySelector('.toBuy');
const ulBought = document.querySelector('.bought');
const ulToBuyArray = [];
const ulBoughtArray = [];
const resetBtn = document.querySelector('.resetBtn');
const inputSearch = document.querySelector('.search');

const removeItem = (e, buy, bought) => {
    const choosenElementKey = e.target.parentNode.dataset.key;
    const ulClass = e.target.parentNode.parentNode.className;
    if (ulClass === "toBuy") {
        buy.splice(choosenElementKey, 1);
    } else if (ulClass === "bought") {
        bought.splice(choosenElementKey, 1);
    }
    renderList(buy, ulToBuy);
    renderList(bought, ulBought);
}

const moveItem = (e, buy, bought) => {
    const choosenElementKey = e.target.parentNode.dataset.key;
    const ulClass = e.target.parentNode.parentNode.className;
    if (ulClass === "toBuy") {
        bought.push(buy[choosenElementKey]);
        buy.splice(choosenElementKey, 1);
    } else if (ulClass === "bought") {
        buy.push(bought[choosenElementKey]);
        bought.splice(choosenElementKey, 1);
    }
    renderList(buy, ulToBuy);
    renderList(bought, ulBought);
}

const renderList = (array, ulContainer) => {
    ulContainer.textContent = "";
    array.forEach((item, index) => {
        item.dataset.key = index;
        ulContainer.appendChild(item);
    })
}

const addItem = (e) => {
    e.preventDefault();
    const inputText = input.value;
    if (inputText === "") return;
    input.value = "";
    const newItem = document.createElement('li');
    newItem.classList.add("toBuy");
    newItem.innerHTML = `<i></i><span>${inputText}</span><i></i>`;
    newItem.querySelector('i').className = "far fa-square";
    newItem.querySelector('i').addEventListener('click', (e) => {
        moveItem(e, ulToBuyArray, ulBoughtArray)
    });
    newItem.querySelector('i:nth-of-type(2)').className = "fas fa-window-close";
    newItem.querySelector('i:nth-of-type(2)').addEventListener('click', (e) => {
        removeItem(e, ulToBuyArray, ulBoughtArray)
    })
    ulToBuyArray.push(newItem);
    renderList(ulToBuyArray, ulToBuy);
};

const resetList = (e, buy, bought) => {
    ulToBuyArray.splice(0, ulToBuyArray.length)
    ulBoughtArray.splice(0, ulBoughtArray.length)
    input.value = "";

    renderList(buy, ulToBuy);
    renderList(bought, ulBought);
};

form.addEventListener('submit', addItem);
document.body.addEventListener('keyup', (e) => {
    if (e.target.value === "13") addItem(e)
})

resetBtn.addEventListener('click', (e) => {
    resetList(e, ulToBuyArray, ulBoughtArray);
})