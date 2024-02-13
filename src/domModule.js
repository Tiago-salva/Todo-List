import { centralModule } from "./centralModule";

export const domModule = {

    assignEventsToProjects: () => {
        const allProjects = document.querySelectorAll(".project");
        domModule.removeAddEventListener(allProjects, "click", domModule.createEventToShowProjectSelected);
    },

    // Function to remove and add a single event listener
    removeAddEventListener: (elements, event, handler) => {
        elements.forEach((element) => {
          element.removeEventListener(event, handler);
          element.addEventListener(event, handler);
        });
    },

    // It creates the event to show wich project is selected
    // And display his tasks
    createEventToShowProjectSelected : (event) => {     
        const allProjects = document.querySelectorAll(".project");
  
        allProjects.forEach(project => {
            project.classList.remove("project-selected");
        });

        event.currentTarget.classList.add("project-selected");

        const projectTaskArraySelected = centralModule.projectModule.sortTodos();
        domModule.displayTodos(projectTaskArraySelected);
        centralModule.eventModule.assisgnEventsToButtons();
    },

    // It creates the event to change the form depending on what you want to create 
    createEventToChangeTheForm: () => {
        const createNewEntry = document.querySelector(".create-new__entry");
        const optionTodo = document.getElementById("option-to-do");
        const optionProject = document.getElementById("option-project");
        
        optionTodo.addEventListener("click", () => {
            optionProject.classList.remove('create-new__sidebar-title-selected');
            optionTodo.classList.add('create-new__sidebar-title-selected');
            createNewEntry.innerHTML = "";
            createTodoForm();
        });

        optionProject.addEventListener("click", () => {
            optionTodo.classList.remove('create-new__sidebar-title-selected');
            optionProject.classList.add('create-new__sidebar-title-selected');
            createNewEntry.innerHTML = "";
            createProjectForm();
        });

        function createProjectForm() {
            createNewEntry.innerHTML = `
            <input type="text" class="create-new__entry-input input" placeholder="Name" maxlength="30" name="title" required>
            <button class="create-project-btn" type="submit">Create project</button>`;
        }

        function createTodoForm() {
            createNewEntry.innerHTML = `
            <input type="text" class="create-new__entry-input input" placeholder="Name" maxlength="30" name="title" required>
            <textarea class="create-new__entry-input-big input" placeholder="Description" name="description" required></textarea>
            <div class="create-new__date">
                <span class="create-new__date-title">Due Date:</span>
                <input type="date" class="create-new__date-input input" name="dueDate" required>
            </div>
            <div class="create-new__priority">
                <span class="create-new__priority-title">Priority:</span>
                <div class="create-new__priority-btns">
                    <input type="radio" name="priority" class="priority-btn input" id="low" value=0 required>
                    <label for="low">Low</label>
                    <input type="radio" name="priority" class="priority-btn input" id="medium" value=1 required>
                    <label for="medium">Medium</label>
                    <input type="radio" name="priority" class="priority-btn input" id="high" value=2 required>
                    <label for="high">High</label>
                </div>
            </div>
            <button class="add-todo-btn" type="submit">Add todo</button>`;
        };
    },
    
    // It display the overlay to create a new todo or project
    displayOverlay: function() {
        const form = document.querySelector(".create-new");
        const overlayNew = document.querySelector(".overlay-new");
        const closeOverlay = document.getElementById("create-new__header-close");
        const createBtn = document.getElementById("create-btn");
        
        createBtn.addEventListener("click", () => {
            overlayNew.classList.add("overlay-new-displayed");
        });

        closeOverlay.addEventListener("click", () => {
            overlayNew.classList.remove("overlay-new-displayed");
        });

        form.addEventListener("submit", () => {
            overlayNew.classList.remove("overlay-new-displayed");
        });
    },
    
    displayTodos: function(array) {
        const todosContainer = document.querySelector(".todo-container");
        todosContainer.innerHTML = "";

        // If the project that is selected it's empty, show a message and a button to delete it
        const projectSelected = centralModule.projectModule.getProjectSelected();
        const projectSelectedTitle = projectSelected.querySelector("span").textContent;

        if(projectSelectedTitle !== "Home" && array.length === 0) {
            todosContainer.classList.add("empty-project");

            const title = document.createElement("h2");
            title.textContent = "The project is empty!";
            title.classList.add("empty-project-title");


            const subTitle = document.createElement("p");
            subTitle.textContent = "Delete it or create a to-do!";
            subTitle.classList.add("empty-project-subtitle");

            const deleteProjectBtn = document.createElement("button");
            deleteProjectBtn.textContent = "Delete project";
            deleteProjectBtn.classList.add("empty-project-btn");

            todosContainer.appendChild(title);
            todosContainer.appendChild(subTitle);
            todosContainer.appendChild(deleteProjectBtn);
            
            const index = projectSelected.dataset.index;

            deleteProjectBtn.removeEventListener("click", domModule.deleteProject);
            deleteProjectBtn.addEventListener("click", domModule.deleteProject);

            return
        }

        // Otherwise, create the elements for each todo
        array.forEach((obj, index) => {
            const todo = document.createElement("div");
            todo.classList.add("todo");

            // Add the class when the todo it's checked 
            if(obj.checkStatus === "checked") {
                todo.classList.add("todo-checked");
            }

            todosContainer.appendChild(todo);

            // Each priority have his respective color
            const priorityColors = [
                "#60b160",
                "#ebeb02",
                "#f75454"
            ];

            // Depending on the priority of the todo, change the color of it
            const todoPriority = document.createElement("div");
            todoPriority.classList.add("todo-priority");
            todoPriority.style.backgroundColor = priorityColors[obj.priority];
            todo.appendChild(todoPriority);

            // Todo Status
            const todoStatus = document.createElement("button");
            if(obj.checkStatus === "not-checked") {
                todoStatus.classList.add("todo-status-checkbox");
            } else {
                todoStatus.classList.add("todo-status-checkbox");
                todoStatus.classList.add("todo-status-checkbox-checked");
            };

            todoStatus.dataset.index = index;
            todo.appendChild(todoStatus);

            // Todo Title
            const title = document.createElement("h3");
            title.textContent = obj.title;

            if(obj.checkStatus === "not-checked") {
                title.classList.add("todo-title");
            } else {
                title.classList.add("todo-title");
                title.classList.add("todo-title-checked");
            };

            todo.appendChild(title);
            
            // Todo Details Button
            const detailBtn = document.createElement("button");
            detailBtn.textContent = "Details";
            detailBtn.classList.add("todo-detail-button");
            detailBtn.dataset.index = index;
            todo.appendChild(detailBtn);

            // Todo Edit Button
            const editBtn = document.createElement("button");
            editBtn.classList.add("todo-edit-button");
            editBtn.dataset.index = index;
            todo.appendChild(editBtn);
            
            // Todo Delete Button
            const deleteBtn = document.createElement("button");
            deleteBtn.classList.add("todo-delete-button");
            deleteBtn.dataset.index = index;
            todo.appendChild(deleteBtn);
        }); 
    },

    // Delete the project, select the other ones and display their todos
    deleteProject: function() {
        const index = centralModule.projectModule.getProjectSelected().dataset.index;
        centralModule.projectModule.removeProject(index);
        domModule.displayProjects(centralModule.projectModule.projects);
        domModule.assignEventsToProjects();
        const newProjectTaskArraySelected = centralModule.projectModule.sortTodos();
        domModule.displayTodos(newProjectTaskArraySelected);
        centralModule.eventModule.assisgnEventsToButtons();
    },

    displayProjects: function(array) {
        const homeItem = document.getElementById("homeItem");
        
        const listOfProjects = document.querySelector(".projects");
        listOfProjects.innerHTML = "";
        array.forEach((obj, index) => {
            // If the project selected it's not the home item, display the rest of the projects
            if(index !== 0) {
                homeItem.classList.remove("project-selected");
                
                const project = document.createElement("li");
                project.dataset.index = index;
                project.classList.add("project", "nav-item", (index === array.length - 1) && "project-selected");

                const projectName = document.createElement("span");
                projectName.textContent = obj.title;
                projectName.classList.add("project-name");

                project.appendChild(projectName);
                listOfProjects.appendChild(project);
            } else {
                homeItem.classList.add("project-selected");
                homeItem.dataset.index = index;
            }
        })
    },
}