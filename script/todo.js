//Selector
const todoform = document.querySelector(".todo-form"),
todoInput = todoform.querySelector(".todo");
const todolist = document.querySelector(".todolist");

//Event Listener
todoform.addEventListener("submit",handleSubmit);

//function
function handleSubmit(event)
{
    event.preventDefault();
    const value = todoInput.value;
    todoInput.value="";
    drawtodolist(value);
    // console.log(value);
}

function drawtodolist(text)
{
    //create Element
    const div_list_Single = document.createElement("div");
    div_list_Single.className = "list-single";

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = text;

    const div_menu_Single = document.createElement("div");
    div_menu_Single.className = "menu-single";
    const div_menu_Single_box1 = document.createElement("div");
    div_menu_Single_box1.className = "menu-single-box1";
    const trashBtn = document.createElement("i");
    trashBtn.classList.add("trashBtn");
    trashBtn.classList.add("fa");
    trashBtn.classList.add("fa-trash-o");
    trashBtn.classList.add("fa-lg");

    li.appendChild(span);
    div_list_Single.appendChild(li);

    div_menu_Single_box1.appendChild(trashBtn);
    div_menu_Single.appendChild(div_menu_Single_box1);
    div_list_Single.appendChild(div_menu_Single);

    todolist.appendChild(div_list_Single); //final

    //animation
    li.addEventListener("click",function()
    {
        li.classList.toggle("single-clear");
    })

    //trashBtn
    trashBtn.addEventListener('click',function()
    {
        const bigParent = trashBtn.closest(".list-single");
        bigParent.remove();

    });
}

function todoTotalCount(num)
{
       
}
function todoNumCount(num)
{

}