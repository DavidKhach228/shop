let cont = document.querySelector(".inner")
let btns = document.querySelector(".btns")
let logout = document.querySelector(".outbtn")

let xhr = new XMLHttpRequest
xhr.open("GET", 'https://dummyjson.com/products')
xhr.onload = function() {
    let xhrdata = JSON.parse(xhr.response)
    let data = xhrdata.products
    
    
    function generate() {
        data.forEach(elem => {
            let inner = document.createElement("div")
            inner.innerHTML = `<h1>${elem.title}</h1> <p>${elem.description}</p> <img src="${elem.thumbnail}">`
            inner.style = "border: 1px solid"
            cont.append(inner)
        });
    }

    function allBtn() {
        let btn = document.createElement("button")
        btn.innerText = "All"
        btns.prepend(btn)
        btn.addEventListener("click", () => {
            cont.innerHTML = ``
            generate()
        })
    }

    generate()
    allBtn()
}   
xhr.send()


    
function btnsfunc() {
        let xhr = new XMLHttpRequest
        xhr.open("GET", `https://dummyjson.com/products/categories`)
        xhr.onload = function() {
            let xhrdata = JSON.parse(xhr.response)
            xhrdata.forEach(element => {
                let btn = document.createElement("button")
                btn.innerText = `${element}`
                btns.append(btn)
                btn.addEventListener("click", () => {
                    cont.innerHTML = ``
                    let xhrbtns = new XMLHttpRequest
                    xhrbtns.open("GET", `https://dummyjson.com/products/category/${element}`)
                    xhrbtns.onload = function() {
                        let btnsdata = JSON.parse(xhrbtns.response)
                        let data = btnsdata.products
                        data.forEach(elem => {
                            let inner = document.createElement("div")
                            inner.innerHTML = `<h1>${elem.title}</h1> <p>${elem.description}</p> <img src="${elem.thumbnail}">`
                            inner.style = "border: 1px solid"
                            cont.prepend(inner)
                        });
                    }
                    xhrbtns.send()
                })
            });
        }
        xhr.send()
    }
    btnsfunc()

function logOut() {
    let btn = document.createElement("button")
    btn.innerText = "Log out"
    logout.append(btn)
    btn.addEventListener("click", () => {
        localStorage.clear()
        window.location.href = "index.html"
    })
}

logOut()