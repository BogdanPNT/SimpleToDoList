const addNewList = () => {
    const listsContainer = document.querySelector("div.listsContainer");
    const newListInput = document.getElementById("newListName");
    const newListBackgroundInput = document.getElementById("newListBackgroundColor");

    if(newListInput.value.length > 0){
        //Create new list element
        const cardContainer = document.createElement("div");
        cardContainer.className = "cardContainer";
    
        const cardTitle = document.createElement("div");
        cardTitle.className = "cardTitle";
        cardTitle.innerText = newListInput.value;
        const cardAddToList = document.createElement("div");
        cardAddToList.className = "cardAddToList";
        cardAddToList.innerHTML = `
            <input class="itemName" type="text" placeholder="Item">
            <img class="addToList" src="assets/images/plusSign50x50.png" alt="Add sign">`;        

        const cardListContainer = document.createElement("div");
        cardListContainer.className = "cardListContainer";
    
        const cardList = document.createElement("ul");
        cardList.className = "cardList";
    
        cardListContainer.appendChild(cardList);
        cardContainer.appendChild(cardTitle);
        cardContainer.appendChild(cardAddToList);
        cardContainer.appendChild(cardListContainer);
    
        // If the background color selected is anything else but black, set it as
        // background to the newly created list
        if(newListBackgroundInput.value !== "#000000" ){
            cardContainer.style.backgroundColor = newListBackgroundInput.value;
        }

        //Add the element created to the parent DIV
        listsContainer.appendChild(cardContainer);

        //Add event listener to the button
        const currentAddToListButton = cardContainer.querySelector("img.addToList");
        const currentAddToListInput = cardContainer.querySelector("input.itemName");
        currentAddToListButton.addEventListener("click", addNewItem);
        currentAddToListInput.addEventListener("keydown", addNewItemKeydown);

        //Set the field value to nothing so you can't run it again
        newListInput.value = "";
    }
};

const addNewItem = (event) => {
    const parentDiv = event.target.parentElement;
    let parentList = parentDiv.parentElement.querySelector("ul.cardList");
    let currentInput = parentDiv.querySelector("input");

    const listItem = document.createElement("li");
    listItem.className = "listItem";


    if(currentInput.value.length > 0){
        listItem.innerHTML = `
            <span class="checkbox"><input type="checkbox"></span>
            <span class="listItemDescription">${currentInput.value}</span>`;
        parentList.appendChild(listItem);

        const currentCheckButton = listItem.querySelector("span.checkbox input");
        currentCheckButton.addEventListener("click", toggleItems);

        currentInput.value = "";
    }
};

const addNewListKeydown = (event) => {
    if(event.code === "Enter"){
        addNewList();
    }
};

const addNewItemKeydown = (event) => {
    if(event.code === "Enter"){
        addNewItem(event);
    }
};

const toggleItems = (event) => {
    targetItem = event.target.parentElement.parentElement.querySelector("span.listItemDescription");
    targetItem.classList.toggle("crossed");
};

const addToListButtons = document.querySelectorAll("img.addToList");
const addToListInput = document.querySelectorAll("div.cardAddToList input");
const checkboxButtons = document.querySelectorAll("span.checkbox input");
const createNewListButton = document.querySelector("img.createNewList");
const createNewListInput = document.getElementById("newListName");
const createNewListBackgroundInput = document.getElementById("newListBackgroundColor");

//Add event Listener
addToListButtons.forEach((element) => {
    element.addEventListener("click", addNewItem);
});

checkboxButtons.forEach((element) => {
    element.addEventListener("click", toggleItems);
});

addToListInput.forEach((element) => {
    element.addEventListener("keydown", addNewItemKeydown);
});

createNewListButton.addEventListener("click", addNewList);
createNewListInput.addEventListener("keydown", addNewListKeydown);
createNewListBackgroundInput.addEventListener("keydown", addNewListKeydown);
