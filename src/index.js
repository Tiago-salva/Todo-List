import "./styles.css";
import { domModule } from "./domModule";
import { projectModule, todoCreationModule, eventModule } from "./todoModule";
import { centralModule } from "./centralModule";

// When the page inits, it creates all the event listeners and display the projects
document.addEventListener("DOMContentLoaded", () => {
    domModule.displayOverlay();
    centralModule.domModule = domModule;
    centralModule.eventModule = eventModule;
    centralModule.projectModule = projectModule;
    domModule.assignEventsToProjects();
    domModule.createEventToChangeTheForm();
    domModule.displayProjects(projectModule.projects);
});

// When the form it's submit, it obtains the values of each input
const form = document.querySelector(".create-new");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const whatIsCreated = todoCreationModule.createFromForm();

    // If the user is creating a todo, sort, display and assign the events to all of them
    // Otherwise, display and assing the event to all the projects, and display their tasks 
    if(whatIsCreated === "Todo") {
        const projectTaskArraySelected = projectModule.sortTodos();
        domModule.displayTodos(projectTaskArraySelected);
        eventModule.assisgnEventsToButtons();    
    } else {
        domModule.displayProjects(projectModule.projects);
        domModule.assignEventsToProjects();
        const newProjectTaskArraySelected = projectModule.sortTodos();
        domModule.displayTodos(newProjectTaskArraySelected);
        eventModule.assisgnEventsToButtons();
    }   
});

// EventListener for when the editForm it's submit
const editForm = document.querySelector('.edit-todo');
editForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Obtain the index of the element to edit
    const indexToEdit = editForm.dataset.index;
    // And display the overlay 
    eventModule.handleEdit(indexToEdit);

    // Get the project selected and his tasks to display them
    const projectTaskArraySelected = projectModule.sortTodos();
    domModule.displayTodos(projectTaskArraySelected);
    eventModule.assisgnEventsToButtons();
    editForm.reset();
});