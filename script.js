const button = document.querySelector("#enter");

const deleteButton = document.createElement("button");

//method to add item 
const addItem = (event) => {

    // console.dir(event.target.newText.value); 

    const toDoItem = document.createElement("li");
    
    console.dir(event.target)

    const inputField = document.querySelector("#new-todo");

    toDoItem.textContent = inputField.value;

    const toDoList = document.querySelector("#list");
    toDoList.appendChild(toDoItem);
    // toDoItem.appendChild(deleteButton);

}

//event
button.addEventListener('click', addItem);

//method to delete item
const deleteItem = (event) => {
    if (deleteButton.onclick === "Delete") {
    inputField.value.remove();
  }
}

deleteButton.removeEventListener("click", deleteItem);

// function delt(event) {
//     if (button.onclick === "Delete") {
//     event.target.parentNode.remove();
//   }
// }

