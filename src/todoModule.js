import { centralModule } from "./centralModule";
import { format } from 'date-fns';

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
    addTodo: function(todo) {
        const projectTaskArraySelected = projectModule.getProjectTaskArraySelected();
        projectTaskArraySelected.push(todo);
    
    },

    removeTodo: function(index) {
        const projectTaskArraySelected = projectModule.getProjectTaskArraySelected();
        projectTaskArraySelected.splice(index, 1);
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
    constructor(title) {
        this.title = title;
        this.taskArray = [];
    }
};

export const projectModule = {
    // The home item it's already created
    projects: [ new Project("Home") ],

    addProject: function(project) {
        this.projects.push(project)
    },

    removeProject: function(index) {
        this.projects.splice(index, 1);
    },

    getProjectSelected: function() {
        const projectSelected = document.querySelector(".project-selected");
        return projectSelected
    },

    // It returns the array that contains the todos / tasks of the project selected
    getProjectTaskArraySelected: function() {
        const projectSelected = document.querySelector(".project-selected");
        const index = projectSelected.dataset.index;
        const projectObj = projectModule.projects[index];
        const projectTaskArray = projectObj.taskArray;
        return projectTaskArray
    },

    sortTodos: function() {
        const projectTaskArraySelected = projectModule.getProjectTaskArraySelected();
        return projectTaskArraySelected.sort((a, b) => b.priority - a.priority);
    }
};

export const todoCreationModule = {
    createFromForm: () => {
        let whatIsCreated = undefined;

        const createForm = document.querySelector('.create-new');
        const formData = new FormData(createForm);
        const selectedOption = document.querySelector(".create-new__sidebar-title-selected");
        
        // Depending of what is created obtains just the neccesary
        if(selectedOption.textContent === "To-Do") {
            const newTodo = new Todo(formData.get('title'), formData.get('description'), formData.get('dueDate'), formData.get('priority'), "not-checked");
            todoModule.addTodo(newTodo);
            whatIsCreated = "Todo";
        } else {
            const newProject = new Project(formData.get('title'));
            projectModule.addProject(newProject);
            whatIsCreated = "Project";
        }

        createForm.reset();

        return whatIsCreated
    }
};

export const eventModule = {
    assisgnEventsToButtons: () => {
        const allStatusCheckbox = document.querySelectorAll(".todo-status-checkbox");
        const allDetailsBtns = document.querySelectorAll(".todo-detail-button");
        const allEditBtns = document.querySelectorAll(".todo-edit-button");
        const allDeleteBtns = document.querySelectorAll(".todo-delete-button");

        // It delete the event listeners< that already exists and create them again
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
        const todoStatusCheckbox = event.target;
        const todo = todoStatusCheckbox.closest('.todo');

        if (todo) {
            todo.classList.toggle("todo-checked");
            const todoTitle = todo.querySelector(".todo-title");
            todoStatusCheckbox.classList.toggle("todo-status-checkbox-checked");
            todoTitle.classList.toggle("todo-title-checked");

            const indexToCheck = event.target.dataset.index;

            const projectTaskArraySelected = projectModule.getProjectTaskArraySelected();
            const checkStatus = projectTaskArraySelected[indexToCheck].checkStatus;

            // Change the status of the todo
            projectTaskArraySelected[indexToCheck].checkStatus =
            checkStatus === "not-checked" ? "checked" : "not-checked";
        }
    },

    // EventListener for the details button
    handleDetail: (event) => {
        const overlayDetails = document.querySelector(".overlay-details");
        overlayDetails.classList.add("overlay-details-displayed");

        const indexToDetail = event.target.dataset.index;
        const projectTaskArraySelected = projectModule.getProjectTaskArraySelected();

        const todoElement = projectTaskArraySelected[indexToDetail];
        const elements = document.querySelectorAll(".element");

        // Reset the content of the elements
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
        const popUpProjectSpan = document.querySelector(".content-project");

        const projectSelected = projectModule.getProjectSelected();
        const projectSelectedTitle = projectSelected.querySelector("span").textContent;

        popUpProject.textContent = "Project:";
        popUpProjectSpan.textContent = projectSelectedTitle;

        // Pop up description
        const popUpDescription = document.querySelector(".pop-up-description");
        const popUpDescriptionSpan = document.querySelector(".content-description");

        popUpDescription.textContent = "Details:";
        popUpDescriptionSpan.textContent = todoElement.description;

        // Pop up due date
        const popUpDueDate = document.querySelector(".pop-up-duedate");
        const popUpDueDateSpan = document.querySelector(".content-duedate");

        const formatedData = format(todoElement.dueDate, "MMMM do, yyyy");

        popUpDueDate.textContent = "Due date:";
        popUpDueDateSpan.textContent = formatedData;

        // Pop up priority
        const popUpPriority = document.querySelector(".pop-up-priority");
        const popUpPrioritySpan = document.querySelector(".content-priority");

        let priority;
        // Depending of the  priority, show the respective text
        if(todoElement.priority == 0) {
            priority = "Low";
        } else if (todoElement.priority == 1) {
            priority = "Medium";
        } else {
            priority = "High";
        }

        popUpPriority.textContent = "Priority:";
        popUpPrioritySpan.textContent = priority;
    },

    // EventListener for the edit button
    displayOverlayEdit: (event) => {
        const editForm = document.querySelector(".edit-todo");
        const indexToEdit = event.target.dataset.index;
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

        const projectTaskArraySelected = projectModule.getProjectTaskArraySelected();
        let todoElement = projectTaskArraySelected[index];
        
        // Get the values of the edit form, and edit the todo
        const formData = new FormData(editForm);
        todoElement = todoModule.editTodo(todoElement, formData.get('title'), formData.get('description'), formData.get('dueDate'), formData.get('priority'));
        overlayEdit.classList.remove("overlay-edit-displayed");
    },

    // EventListener for the delete button
    handleDelete: (event) => {
        const indexToDelete = event.target.dataset.index;
        todoModule.removeTodo(indexToDelete);

        const projectTaskArraySelected = projectModule.sortTodos();

        centralModule.domModule.displayTodos(projectTaskArraySelected);
        eventModule.assisgnEventsToButtons();
    },
}