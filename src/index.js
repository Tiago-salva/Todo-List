import "./styles.css";
import { domModule } from "./domModule";
import { todoModule, todoCreationModule, eventModule } from "./todoModule";
import { centralModule } from "./centralModule";

// When the page inits, it creates the eventListener to display the overlay
document.addEventListener("DOMContentLoaded", () => {
    domModule.displayOverlay();
    centralModule.domModule = domModule;
    centralModule.eventModule = eventModule;
});

// When the form it's submit, it obtains the values of each input
const form = document.querySelector(".create-new");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    todoCreationModule.createTodoFromForm();
    domModule.displayTodos(todoModule.todos);
    eventModule.assisgnEventsToButtons();
});


// EventListener for the editForm submit
const editForm = document.querySelector('.edit-todo');
editForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const indexToEdit = editForm.dataset.index;

    eventModule.handleEdit(indexToEdit);
    
    domModule.displayTodos(todoModule.todos);
    eventModule.assisgnEventsToButtons();
    editForm.reset();
});