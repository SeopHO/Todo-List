const userEditBtn = document.querySelector(".side-area-user-name i");
const AreaUserName = document.querySelector(".side-area-user-name");
const userNameText = document.querySelector(".side-area-user-name p");

const USER_LS = "username-local";

userEditBtn.addEventListener("click",createUserEdit);

function createUserEdit()
{
    const userForm = document.createElement("form");
    userForm.classList.add("user-form");
    const userInput = document.createElement("input");
    userInput.classList.add("user-input");
    userInput.type = "text";
    userInput.placeholder = "Write your name";
    userInput.maxLength = '10';

    userForm.appendChild(userInput);
    AreaUserName.appendChild(userForm);

    userNameText.style.display = 'none';
    userEditBtn.style.display = 'none';


    userForm.addEventListener("submit",function(){
        const bigParent = userForm.closest(".user-form");
        bigParent.remove();
        const uText = userInput.value;
        userSubmitHandle(uText);
    });

}
function saveUser(text)
{
    localStorage.setItem(USER_LS,text)
}
function loadUser()
{
    loadusername = localStorage.getItem(USER_LS);
    if(loadusername!==null)
    {
        userNameText.innerHTML = loadusername;
    }
}

function drawUserName(value)
{
    userNameText.style.display = 'block';
    userEditBtn.style.display = 'inline';

    userNameText.innerHTML = value;
    saveUser(value);

}

function userSubmitHandle(value)
{
    event.preventDefault();
    drawUserName(value);
}

function uInit()
{
    loadUser();
}
uInit();