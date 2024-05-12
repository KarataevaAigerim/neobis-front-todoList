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
            this.addTask(this.taskNameInput.value, document.querySelector('input[name="type"]:checked').value);
            this.taskNameInput.value = '';
        });
    }

    addTask(name, type) {
        const taskElement = document.createElement('li');
        taskElement.className = `todo-app__task todo-app__task--${type}`;
        taskElement.innerHTML = `
            <input type="checkbox" class="todo-app__checkbox">
            <span class="todo-app__text">${name}</span>
            <span class="todo-app__edit">Edit</span>
            <span class="todo-app__delete">Delete</span>
        `;
        this.taskList.appendChild(taskElement);

        taskElement.querySelector('.todo-app__delete').addEventListener('click', () => taskElement.remove());
        taskElement.querySelector('.todo-app__checkbox').addEventListener('change', (e) => {
            if (e.target.checked) {
                taskElement.style.textDecoration = 'line-through';
            } else {
                taskElement.style.textDecoration = 'none';
            }
        });
    }
}

new TodoApp();