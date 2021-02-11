let listArray=[];
let ClearlistArray=[];
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
    if(value==="")
    {
        console.log('제대로 적어라');
    }
    else
    {
        drawtodolist(value);
    }

    todoInput.value="";
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
    trashBtn.addEventListener('click',function(event)
    {   
        const bigParent = trashBtn.closest(".list-single");
        bigParent.remove();
        todoTotalCount(span.textContent,"decrease");
    });

    todoTotalCount(text,"increase");

}

function todoTotalCount(value,check)
{
    const countingContentTotal = document.querySelector(".total");
    if(check === "increase")
    {
        listArray.push(`${value}`);
        console.log(listArray);
    }
    else if(check === "decrease")
    {
        for(let i=0;i<listArray.length;i++)
        {
            if(listArray[i] === `${value}`)
            {
                const idx = listArray.indexOf(`${value}`);
                console.log('find it!',value,idx);
                if(idx>-1)
                    listArray.splice(idx,1);
            }
        }
        console.log(listArray);
        
    }
    countingContentTotal.innerHTML = listArray.length;
}
function todoClearCount()
{
    const countingContentNum
}