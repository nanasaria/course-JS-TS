const inputTask = document.querySelector('.input-task');
const btn = document.querySelector('.btn-task');
const tasks = document.querySelector('.tasks');

function createLi(){
    const li = document.createElement('li');
    return li;
}

function createBtnDelete(li){
    li.innerText += ' ';
    const btnDelete = document.createElement('button');
    btnDelete.innerText = 'Delete';
    btnDelete.setAttribute('class', 'delete')
    li.appendChild(btnDelete);
}

function clearInput(){
    inputTask.value = '';
    inputTask.focus();
}

function createTask(textInput){
    const li = createLi();
    li.innerText = textInput;
    tasks.appendChild(li);
    clearInput();
    createBtnDelete(li);
    saveTasks();
}

function saveTasks(){
    const liTasks = tasks.querySelectorAll('li');
    const listTasks = [];

    for(let task of liTasks){
        let taskText = task.innerText;
        taskText = taskText.replace('Delete', '').trim();
        listTasks.push(taskText)
    }

    const tasksJson = JSON.stringify(listTasks);
    localStorage.setItem('tasks', tasksJson)
}

function addSaveTask(){
    const tasks = localStorage.getItem('tasks');
    const taskList = JSON.parse(tasks)
    
    for(let task of taskList){
        createTask(task);
    }
}

btn.addEventListener('click', function(){
    if(!inputTask.value) return;
    createTask(inputTask.value);
})

inputTask.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTask.value) return;
        createTask(inputTask.value);
    }
});

document.addEventListener('click', function(e) {
    const el = e.target;

    if(el.classList.contains('delete')) {
        el.parentElement.remove();
        saveTasks();
    }
})

addSaveTask();