const todoform = document.querySelector(".todo-form"),
todoInput = todoform.querySelector(".todo");

const todolist = document.querySelector(".todolist");

let arr = [];

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

    const div_list_Single = document.createElement("div");
    const div_menu_Single = document.createElement("div");
    const div_menu_Single_box1 = document.createElement("div");

    const li = document.createElement("li");
    const span = document.createElement("span");

    div_list_Single.className = "list-single";
    div_menu_Single.className = "menu-single";
    div_menu_Single_box1.className = "menu-single-box1";

    span.innerHTML = text;
    div_menu_Single_box1.innerHTML = `<i class="delete-Single fa fa-trash-o fa-lg" style="color:gray; cursor: pointer;" aria-hidden="true"></i>`;

    li.appendChild(span);
    div_list_Single.appendChild(li); //final

    div_menu_Single.appendChild(div_menu_Single_box1);

    div_list_Single.appendChild(div_menu_Single); //final
    todolist.appendChild(div_list_Single);
    
    const listSingles = document.querySelectorAll("div .list-single");
    const deleteSingle = document.querySelectorAll("div .delete-Single");
    
    li.addEventListener("click",function()
    {
        li.classList.toggle("single-clear");
        const singleClear = document.querySelectorAll(".single-clear");
        countNumCalcul(singleClear.length)  ;
    });

    deleteSingle.forEach(function(single)
    {
        single.addEventListener("click",function(event)
        {
            const bigParent = single.closest(".list-single");
            bigParent.remove();

            
            // totalNulCalcul(listSingles.length);
        })
        
    });
    totalNulCalcul(listSingles.length);

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