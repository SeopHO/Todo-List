let listArray=[];
let clearlistArray=[];

let LIST_LS="list-local";
//Selector
const todoform = document.querySelector(".todo-form"),
todoInput = todoform.querySelector(".todo");
const todolist = document.querySelector(".todolist");

const todoDeleteAllBtn = document.querySelector(".head-area-menu .deleteAll");
const todoSubmitBtn = document.querySelector(".head-area-menu .add-button");

//Event Listener
todoform.addEventListener("submit",handleSubmit);
todoSubmitBtn.addEventListener("click",handleSubmit);

todoDeleteAllBtn.addEventListener("click",listDeleteAll);

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
function listFinishLoad(boolean)
{
    return boolean;
}
function saveList()
{
    localStorage.setItem(LIST_LS,JSON.stringify(listArray));
}

function loadList()
{
    const loadLIST = localStorage.getItem(LIST_LS);
    if(loadLIST !== null)
    {
        const parsedList = JSON.parse(loadLIST);
        parsedList.forEach(function(single)
        {
            drawtodolist(single.text);
        });
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
        finish:null,
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
            listFinishLoad(true);

        }
        else if(!(li.classList.contains("single-clear")))
        {
            listArray[liId].finish=false;
            listFinishLoad(false);
        }
        saveList(liId,li);
        todoFinishCount();
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
        todoFinishCount();
        saveList();
    });
    todoTotalCount();
    saveList();
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
function todoFinishCount()
{
    const countingContentNum = document.querySelector(".number");
    let cnt=0;
    for(let i=0;i<listArray.length;i++)
    {
        if(listArray[i].finish === true)
        {
            cnt++;
        }
    }
    countingContentNum.innerHTML=cnt;

    if(cnt === listArray.length)
    {
        console.log('축하합니다!');
        
    }
}
function listDeleteAll()
{
    const findSingleLists = todolist.getElementsByClassName("list-single");
    console.log(findSingleLists);
    findSingleLists.remove();
    
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