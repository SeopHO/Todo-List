let listArray=[];
let clearlistArray=[];

let LIST_LS="list-local";
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
    // console.log(value);
    
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
function saveList()
{
    localStorage.setItem(LIST_LS,listArray);
}
function loadList()
{
    const loadLIST = localStorage.getItem(LIST_LS);
    if(loadLIST !== null)
    {

    }
}
function drawtodolist(text)
{
    //create Element
    const div_list_Single = document.createElement("div");
    div_list_Single.className = "list-single";

    const li = document.createElement("li");
    li.id = listArray.length;
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

    const listObj={
        id:listArray.length,
        text:text,
        finish:false,
    }
    listArray.push(listObj);
    console.log(listArray);
    

    todolist.appendChild(div_list_Single); //final

    //animation
    li.addEventListener("click",function(single)
    {
        li.classList.toggle("single-clear");
        const liId = li.id;
        if(li.classList.contains("single-clear"))
        {
            listArray[liId].finish=true;
        }
        else if(!(li.classList.contains("single-clear")))
        {
            listArray[liId].finish=false;
        }
    })

    //trashBtn
    trashBtn.addEventListener('click',function(event)
    {   
        const bigParent = trashBtn.closest(".list-single");
        bigParent.remove();
        const liId = li.id;
        console.log('id',liId);
        todoTotalCount(listObj,liId,"decrease");
        for(let i=0;i<listArray.length;i++)
        {
            listArray[i].id = i;

        }
        const liAll = document.querySelectorAll("li");
        let numId=0;
        liAll.forEach(function(single_li)
        {
            single_li.id = numId++;
        });
        // todoClearCount(span.textContent,"decrease");
    });
    todoTotalCount();
    // saveList();
}
function todoTotalCount(obj=null,num=0,check="increase")
{
    const countingContentTotal = document.querySelector(".total");
    if(check === "decrease")
    {
        listArray.splice(num,1);
        console.log(listArray);
    }
    countingContentTotal.innerHTML = listArray.length;
    createScrollbar();

}
function todoClearCount(value,check)
{
    const countingContentNum = document.querySelector(".number");
    if(check==="increase")
    {
        clearlistArray.push(`${value}`);
        // console.log(clearlistArray);
        
    }
    else if(check === "decrease")
    {
        for(let i=0;i<clearlistArray.length;i++)
        {
            if(clearlistArray[i] === `${value}`)
            {
                const idx = clearlistArray.indexOf(`${value}`);
                // console.log('clear it!',value,idx);
                if(idx>-1)
                clearlistArray.splice(idx,1);
            }
        }
        // console.log(clearlistArray);
    }
    countingContentNum.innerHTML=clearlistArray.length;
}

function createScrollbar()
{
    const todoArea = document.querySelector(".todo-area");
    if(listArray.length <= 10)
    {
        todoArea.style.overflow = "hidden";
    }
    else
    {
        todoArea.style.overflow = "auto";
    }
}

function init()
{
    loadList();
}

init();