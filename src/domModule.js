export const domModule = {
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
        array.forEach((obj, index) => {
            const todo = document.createElement("div");
            todo.classList.add("todo");
            todosContainer.appendChild(todo);
            
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
}