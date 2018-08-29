localStorage.setItem("username", "Admin");
localStorage.setItem("password", "Admin@123");

function logIn(){
 usr = localStorage.getItem("username");
 pwd = localStorage.getItem("password");
    if(usr == document.getElementById('usr').value && pwd == document.getElementById('pwd').value){
    window.location='main.html';
    }
    else
    {
        alert("enter valid password");
    }
}




