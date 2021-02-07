const todoform = document.querySelector(".todo-form"),
todoInput = todoform.querySelector(".todo");

const todolist = document.querySelector(".todolist");

let arr = [];

let totalNum;
let CountNum;

function totalNulCalcul(num)
{
    const CntTotal = document.querySelector(".total");
    CntTotal.innerHTML = num;
}
function countNumCalcul(num)
{
    const CntNum = document.querySelector(".number");
    CntNum.innerHTML = num;
}

function drawtodolist(text)
{
    const list_Single = document.createElement("div");
    const menu_Single = document.createElement("div");
    const menu_Single_box1 = document.createElement("div");

    const li = document.createElement("li");
    const span = document.createElement("span");

    list_Single.className = "list-single";
    menu_Single.className = "menu-single";
    menu_Single_box1.className = "menu-single-box1";

    span.innerHTML = text;
    menu_Single_box1.innerHTML = `<i class="deleteSingle fa fa-trash-o fa-lg" style="color:gray; cursor: pointer;" aria-hidden="true"></i>`;

    li.appendChild(span);
    list_Single.appendChild(li); //final

    menu_Single.appendChild(menu_Single_box1);

    list_Single.appendChild(menu_Single); //final
    todolist.appendChild(list_Single);
    
    const listSingle = document.querySelectorAll(".list-single");

    totalNum = listSingle.length;
    totalNulCalcul(totalNum);

    li.addEventListener("click",function()
    {
        li.classList.toggle("single-clear");
        const singleClear = document.querySelectorAll(".single-clear");
        countNumCalcul(singleClear.length);
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

function test(num)
{
    listSingle[num].style.display="none";
}


init();