const todoform = document.querySelector(".todo-form"),
todoInput = todoform.querySelector(".todo");

function drawtodolist(text)
{
    
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