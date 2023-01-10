let username = document.querySelector("#username")
let pass = document.querySelector("#pass")
let send = document.querySelector(".send")
let logOut = document.querySelector(".out")
let empty = ``

// Get data from login and password
send.addEventListener("click", () => {
    let a = username.value;
    let b = pass.value;

    let login = {
        username: `${a}`,
        password: `${b}`
    }
    
    let checker = {
        username: `kminchelle`,
        password: `0lelplR`
    }
    console.log(login);

    let loginStr = JSON.stringify(login)
    let checkerStr = JSON.stringify(checker)

    if(loginStr === checkerStr){
        alert("Login successful")
    }else{
        username.value = empty;
        pass.value = empty;
        alert("Login failed");
    }

    
    localStorage.setItem('login', JSON.stringify(login));    
    if(login.username === empty || login.password === empty){
        localStorage.clear()
    }
}) 

logOut.addEventListener("click", () => {
    if(window.localStorage.length === 0){
        username.value = empty;
        pass.value = empty;
        alert("You haven't logged in yet!")
    }else{
        localStorage.clear()
    }
})



//send login and password information to server to cheak if its true.


// let xhr = new XMLHttpRequest;
// // xhr.setRequestHeader('authorization', localStorage.token)
// xhr.open("POST", "https://dummyjson.com/auth/login")
// xhr.setRequestHeader('Content-Type', 'application/json;  charset=UTF-8')
// xhr.onload = function(res) {
//     console.log(res);
//     let data = localStorage.setItem('user',  res.currentTarget.response)
    
// }
// xhr.send(json)