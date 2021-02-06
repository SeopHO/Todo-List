const todoform = document.querySelector(".todo-form"),
todoInput = todoform.querySelector(".todo");

function handleSubmit(event)
{
    event.preventDefault();
    const value = todoInput.value;
    todoInput.value="";
    console.log(value);
}

function init()
{
    todoform.addEventListener("submit",handleSubmit);
}

init();