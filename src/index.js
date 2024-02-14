import "./styles.css";
import { domModule } from "./domModule";
import { projectModule, todoCreationModule, storageModule, eventModule } from "./todoModule";
import { centralModule } from "./centralModule";

centralModule.domModule = domModule;
centralModule.projectModule = projectModule;
centralModule.storageModule = storageModule;
centralModule.eventModule = eventModule;

// When the page inits, it creates all the event listeners, load and display the projects and todos
document.addEventListener("DOMContentLoaded", () => {
    domModule.displayOverlay();
    storageModule.cargarProyectos();
    domModule.displayProjects(projectModule.projects);
    domModule.assignEventsToProjects();
    const projectTaskArraySelected = projectModule.sortTodos();
    domModule.displayTodos(projectTaskArraySelected);
    eventModule.assisgnEventsToButtons();
    domModule.createEventToChangeTheForm();
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