let xhr = new XMLHttpRequest
xhr.open("GET", 'https://dummyjson.com/products')
xhr.onload = function() {
    let xhrdata = JSON.parse(xhr.response)
    let data = xhrdata.products
    let cont = document.querySelector(".inner")
    let btns = document.querySelector(".btns")

    function generate() {
        data.forEach(elem => {
            let inner = document.createElement("div")
            inner.innerHTML = `<h1>${elem.title}</h1> <p>${elem.description}</p> <img src="${elem.thumbnail}">`
            inner.style = "border: 1px solid"
            cont.append(inner)
        });
    }
    generate()
}   
    
    
    // function category() {
    //     categories.forEach(elem => {
    //         let item = document.createElement("button")
    //         item.innerText = `${elem}`
    //         btns.append(item)
    //         item.addEventListener("click", () => {
    //             cont.innerHTML = ``
    //             if(elem = 'all') {
    //                 generate()
    //             }
    //         })
    //     });
    // }
    // category()
  
xhr.send()


