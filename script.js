
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

            
            const typeInput = document.querySelector('input[name="type"]:checked');
            if (typeInput && this.taskNameInput.value.trim() !== '') {
                this.addTask(this.taskNameInput.value, typeInput.value);
                typeInput.checked = false; 
                this.taskNameInput.value = ''; 
            }
        });
    }


    addTask(name, type) {
        const taskElement = document.createElement('li');
        taskElement.className = `todo__task todo__task--${type}`;
        const uniqueId = `radio-${name.replace(/\s+/g, '-')}`;
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
        radioButton.addEventListener('click', () => {
            if (radioButton.checked && !taskElement.classList.contains('completed')) {
                textSpan.style.textDecoration = 'line-through';
                taskElement.classList.add('completed');
            } else {
                radioButton.checked = false;
                textSpan.style.textDecoration = 'none';
                taskElement.classList.remove('completed');
            }
        });

        // Attach Delete function
        const deleteBtn = taskElement.querySelector('.todo__delete');
        deleteBtn.addEventListener('click', () => {
            taskElement.remove();
        });
    
        // Attach Edit function
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





// class TodoApp {
//     constructor() {
//         this.form = document.getElementById('todo-form');
//         this.taskList = document.getElementById('todo-list');
//         this.taskNameInput = document.getElementById('task-name');
//         this.init();
//     }

//     init() {
//         this.form.addEventListener('submit', (e) => {
//             e.preventDefault();
//             const typeInput = document.querySelector('input[name="type"]:checked');
//             if (typeInput && this.taskNameInput.value.trim() !== '') {
//                 this.addTask(this.taskNameInput.value, typeInput.value);
//                 typeInput.checked = false;
//                 this.taskNameInput.value = '';
//             }
//         });
//     }

//     addTask(name, type) {
//         const taskElement = document.createElement('li');
//         taskElement.className = `todo__task todo__task--${type}`;
//         const uniqueId = `checkbox-${name.replace(/\s+/g, '-')}`;
//         taskElement.innerHTML = `
//             <input type="checkbox" class="todo__checkbox" id="${uniqueId}">
//             <label for="${uniqueId}" class="todo__text">${name}</label>
//             <input type="text" class="todo__text-input" value="${name}" style="display: none;">
//             <span class="todo__edit">Edit</span>
//             <span class="todo__delete">Delete</span>
//         `;
//         this.taskList.appendChild(taskElement);

//         // Toggle completion using checkbox
//         const checkbox = taskElement.querySelector('.todo__checkbox');
//         const textSpan = taskElement.querySelector('.todo__text');
//         checkbox.addEventListener('change', () => {
//             if (checkbox.checked) {
//                 textSpan.style.textDecoration = 'line-through';
//                 taskElement.classList.add('completed');
//             } else {
//                 textSpan.style.textDecoration = 'none';
//                 taskElement.classList.remove('completed');
//             }
//         });

//         // Attach Delete function
//         const deleteBtn = taskElement.querySelector('.todo__delete');
//         deleteBtn.addEventListener('click', () => {
//             taskElement.remove();
//         });

//         // Attach Edit function
//         const editBtn = taskElement.querySelector('.todo__edit');
//         const textInput = taskElement.querySelector('.todo__text-input');
//         editBtn.addEventListener('click', () => {
//             textSpan.style.display = 'none';
//             textInput.style.display = 'inline';
//             textInput.focus();
//         });

//         textInput.addEventListener('blur', () => {
//             textSpan.textContent = textInput.value;
//             textSpan.style.display = '';
//             textInput.style.display = 'none';
//         });
//     }
// }

// new TodoApp();

