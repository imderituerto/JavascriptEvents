const button = document.querySelector("#enter");



//method to add item 
const addItem = (event) => {

    // console.dir(event.target.newText.value); 

    const toDoItem = document.createElement("li");

    // creating the button
    const deleteButton = document.createElement("button");
    // adding text to button
    deleteButton.textContent = "delete";
    // adding a class to button to edit in CSS
    deleteButton.className = "delete-button";
    // adding an event listener to button that calls the deleteItem function (below)
    deleteButton.addEventListener('click', () => deleteItem (toDoItem))

    console.dir(event.target)

    const inputField = document.querySelector("#new-todo");

    toDoItem.textContent = inputField.value;

    const toDoList = document.querySelector("#list");
    toDoList.appendChild(toDoItem);
    toDoItem.appendChild(deleteButton);

}

//event
button.addEventListener('click', addItem);

//method to delete item - calling in the parameter to delete: toDoItem
const deleteItem = (toDoItem) => {
    const toDoList = document.querySelector("#list");
    toDoList.removeChild(toDoItem);
}


const showDate = (event) => {

}
