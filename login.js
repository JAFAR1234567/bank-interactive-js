const email = document.querySelector("#email");
const password = document.querySelector("#password");
const login = document.querySelector("#login");

login.addEventListener("click",() =>{
    let emailValue = email.value;
    let passwordlValue = password.value;
    if(emailValue === 'sontan@gmail.com' && passwordlValue === '12345'){
        window.location.href = 'banking.html';
    }
    else{
        console.log("not valid user");
    }
});

