const GoTodoList = document.querySelector(".Todo");
const TodoArea = document.querySelector(".todo-area");

const GoAchievement = document.querySelector(".achievement");

GoTodoList.addEventListener("click",function()
{
    TodoArea.style.display = 'block';
});

GoAchievement.addEventListener("click",function()
{
    TodoArea.style.display = 'none';
});