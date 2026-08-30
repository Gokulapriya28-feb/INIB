 const addBtn = document.getElementById('add-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Add Task
    addBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if(taskText === '') {
            alert('Please enter a task!');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        // Complete task on click
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent toggling completed
            taskList.removeChild(li);
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        taskInput.value = '';
    });

    // Allow Enter key to add task
    taskInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') {
            addBtn.click();
        }
    });