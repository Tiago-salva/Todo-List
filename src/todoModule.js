import { centralModule } from "./centralModule";

class Todo {
    constructor(title, description, dueDate, priority, checkStatus) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checkStatus = checkStatus;
    };
};

export const todoModule = {
    todos: [],

    addTodo: function(todo) {
        this.todos.push(todo)
    },

    removeTodo: function(index) {
        this.todos.splice(index, 1);
    },

    editTodo: function(obj, newTitle, newDescription, newDueDate, newPriority, newCheckStatus) {
        obj.title = newTitle;
        obj.description = newDescription;
        obj.dueDate = newDueDate;
        obj.priority = newPriority;

        return obj
    }
};

class Project {
    constructor(title, projectId) {
        this.title = title;
        this.projectId = projectId;
    }
};

export const projectModule = {
    projects: [],

    addProject: function(project) {
        this.projects.push(project)
    },

    removeProject: function(index) {
        this.projects.splice(index, 1);
    }
};

export const todoCreationModule = {
    createFromForm: () => {
        const createForm = document.querySelector('.create-new');
        const formData = new FormData(createForm);

        const selectedOption = document.querySelector(".create-new__sidebar-title-selected");
        if(selectedOption.textContent === "To-Do") {
            const newTodo = new Todo(formData.get('title'), formData.get('description'), formData.get('dueDate'), formData.get('priority'), "not-checked");
            todoModule.addTodo(newTodo);
        } else {
            const newProject = new Project(formData.get('title'));
            projectModule.addProject(newProject);
        }

        createForm.reset();
    }
};

export const eventModule = {
    assisgnEventsToButtons: () => {
        const allStatusCheckbox = document.querySelectorAll(".todo-status-checkbox");
        const allDetailsBtns = document.querySelectorAll(".todo-detail-button");
        const allEditBtns = document.querySelectorAll(".todo-edit-button");
        const allDeleteBtns = document.querySelectorAll(".todo-delete-button");

        eventModule.removeAddEventListener(allStatusCheckbox, "click", eventModule.handleCheckStatus);
        eventModule.removeAddEventListener(allDetailsBtns, "click", eventModule.handleDetail);
        eventModule.removeAddEventListener(allEditBtns, "click", eventModule.displayOverlayEdit);
        eventModule.removeAddEventListener(allDeleteBtns, "click", eventModule.handleDelete);
    },

    removeAddEventListener: (elements, event, handler) => {
        elements.forEach((element) => {
          element.removeEventListener(event, handler);
          element.addEventListener(event, handler);
        });
    },

    // EventListener for the todo status checkbox
    handleCheckStatus: (event) => {
        console.log(event);
        const todoStatusCheckbox = event.target;
        const todoContainer = todoStatusCheckbox.closest('.todo');

        if (todoContainer) {
            const todoTitle = todoContainer.querySelector(".todo-title");
            todoStatusCheckbox.classList.toggle("todo-status-checkbox-checked");
            todoTitle.classList.toggle("todo-title-checked");

            const indexToCheck = event.target.dataset.index;
            const checkStatus = todoModule.todos[indexToCheck].checkStatus;

            todoModule.todos[indexToCheck].checkStatus =
            checkStatus === "not-checked" ? "checked" : "not-checked";
        }
    },

    // EventListener for the details button
    handleDetail: (event) => {
        console.log(event);
        const overlayDetails = document.querySelector(".overlay-details");

        overlayDetails.classList.add("overlay-details-displayed");

        const indexToDetail = event.target.dataset.index;
        const todoElement = todoModule.todos[indexToDetail];
        const elements = document.querySelectorAll(".element");

        elements.forEach(element => {
            element.textContent = "";
        })

        // Pop up close button
        const form = document.querySelector('.create-new');
        const popUpCloseBtn = document.querySelector(".pop-up-close-button");
        popUpCloseBtn.textContent = "X";
        popUpCloseBtn.addEventListener("click", () => {
            overlayDetails.classList.remove("overlay-details-displayed");
            form.reset();
        });

        // Pop up title
        const popUpTitle = document.querySelector(".pop-up-title");
        popUpTitle.textContent = `${todoElement.title}`;

        // Pop up project
        const popUpProject = document.querySelector(".pop-up-project");
        // Necesito agregar una propiedad al construcor Todo
        popUpProject.textContent = "Project: Home";

        // Pop up description
        const popUpDescription = document.querySelector(".pop-up-description");
        popUpDescription.textContent = `Description: ${todoElement.description}`;

        // Pop up due date
        const popUpDueDate = document.querySelector(".pop-up-duedate");
        popUpDueDate.textContent = `Due date: ${todoElement.dueDate}`;

        // Pop up priority
        const popUpPriority = document.querySelector(".pop-up-priority");
        popUpPriority.textContent = `Priority: ${todoElement.priority}`;
    },

    // EventListener for the edit button
    displayOverlayEdit: (event) => {
        console.log(event);
        const editForm = document.querySelector(".edit-todo");
        const indexToEdit = event.target.dataset.index;
        console.log(indexToEdit);        
        editForm.dataset.index = indexToEdit;

        const overlayEdit = document.querySelector(".overlay-edit");
        overlayEdit.classList.add("overlay-edit-displayed");
        const editTodoCloseBtn = document.querySelector(".edit-todo-close-button");
        editTodoCloseBtn.addEventListener("click", () => {
            overlayEdit.classList.remove("overlay-edit-displayed");
            editForm.reset();
        });
    },  

    handleEdit: (index) => {   
        const editForm = document.querySelector(".edit-todo");
        const overlayEdit = document.querySelector(".overlay-edit");

        let todoElement = todoModule.todos[index];
        const formData = new FormData(editForm);
        console.log(todoElement);
        todoElement = todoModule.editTodo(todoElement, formData.get('title'), formData.get('description'), formData.get('dueDate'), formData.get('priority'));
        console.log(todoElement);
        overlayEdit.classList.remove("overlay-edit-displayed");
    },

    // EventListener for the delete button
    handleDelete: (event) => {
        const indexToDelete = event.target.dataset.index;
        todoModule.removeTodo(indexToDelete);
        centralModule.domModule.displayTodos(todoModule.todos);
        eventModule.assisgnEventsToButtons();
    },
}