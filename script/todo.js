const todoform = document.querySelector(".todo-form"),
todoInput = todoform.querySelector(".todo");

const todolist = document.querySelector(".todolist");

function drawtodolist(text)
{
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = text;
    li.appendChild(span);
    todolist.appendChild(li);
}

function handleSubmit(event)
{
    event.preventDefault();
    const value = todoInput.value;
    todoInput.value="";
    drawtodolist(value);
    console.log(value);
}

function init()
{
    todoform.addEventListener("submit",handleSubmit);
}

init();