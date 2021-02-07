const todoform = document.querySelector(".todo-form"),
todoInput = todoform.querySelector(".todo");

const todolist = document.querySelector(".todolist");

let arr = [];

let totalNum;
let CountNum;

function drawtodolist(text)
{
    const list_Single = document.createElement("div");
    const menu_Single = document.createElement("div");
    const menu_Single_1 = document.createElement("div");

    list_Single.className = "list-single";
    menu_Single.className = "menu-single";
    menu_Single_1.className = "menu-single-1";
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = text;
    li.appendChild(span);

    list_Single.appendChild(li);
    menu_Single.appendChild(menu_Single_1);
    list_Single.appendChild(menu_Single);
    menu_Single_1.innerHTML = `<i class="deleteSingle fa fa-trash-o fa-lg" style="color:gray; cursor: pointer;" aria-hidden="true"></i>`;
    todolist.appendChild(list_Single);

    
    li.addEventListener("click",function()
    {
        // span.innerHTML = `<hr width="100%" align="center">`;
        // const line = document.createElement("hr");
        // li.appendChild(line);
        li.classList.toggle("single-clear");
    });
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