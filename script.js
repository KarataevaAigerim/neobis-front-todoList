
class TodoApp {
    constructor() {
        this.form = document.getElementById('todo-form');
        this.taskList = document.getElementById('todo-list');
        this.taskNameInput = document.getElementById('task-name');
        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Check if a task type is selected and the task name input is not empty
            const typeInput = document.querySelector('input[name="type"]:checked');
            if (typeInput && this.taskNameInput.value.trim() !== '') {
                this.addTask(this.taskNameInput.value, typeInput.value);
                typeInput.checked = false; // Uncheck the selected task type
                this.taskNameInput.value = ''; // Clear the task name input
            }
        });
    }


    addTask(name, type) {
        const taskElement = document.createElement('li');
        taskElement.className = `todo__task todo__task--${type}`;
        const uniqueId = `radio-${name.replace(/\s+/g, '-')}`; // Replace spaces with dashes for a valid ID
        taskElement.innerHTML = `
            <input type="radio" class="todo__radio" id="${uniqueId}" name="task-radio">
            <label for="${uniqueId}" class="todo__text">${name}</label>
            <input type="text" class="todo__text-input" value="${name}" style="display: none;">
            <span class="todo__edit">Edit</span>
            <span class="todo__delete">Delete</span>
        `;
        this.taskList.appendChild(taskElement);
    
        // Toggle completion using radio button
        const radioButton = taskElement.querySelector('.todo__radio');
        const textSpan = taskElement.querySelector('.todo__text');
        radioButton.addEventListener('change', (e) => {
            textSpan.style.textDecoration = radioButton.checked ? 'line-through' : 'none';
        });
    
        // Attach Delete functionality
        const deleteBtn = taskElement.querySelector('.todo__delete');
        deleteBtn.addEventListener('click', () => {
            taskElement.remove();
        });
    
        // Attach Edit functionality
        const editBtn = taskElement.querySelector('.todo__edit');
        const textInput = taskElement.querySelector('.todo__text-input');
        editBtn.addEventListener('click', () => {
            textSpan.style.display = 'none';
            textInput.style.display = 'inline';
            textInput.focus();
        });
    
        textInput.addEventListener('blur', () => {
            textSpan.textContent = textInput.value;
            textSpan.style.display = '';
            textInput.style.display = 'none';
        });
    }
}

new TodoApp();







