const button = document.querySelector("#enter");

//method
const addItem = (event) => {

    // console.dir(event.target.newText.value); 

    const toDoItem = document.createElement("li");
    console.dir(event.target)

    const inputField = document.querySelector("#new-todo");

    toDoItem.textContent = inputField.value;

    const toDoList = document.querySelector("#list");
    toDoList.appendChild(toDoItem);
}

//event
button.addEventListener('click', addItem);