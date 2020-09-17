// Practice your JS here!
let itemOL = document.querySelector(".shopping.checkout")
let itemForm = document.querySelector("form#new-item")

//We want to display our seed data

fetch("http://localhost:3000/shopping")
    .then(res => res.json())
    .then(shoppingArr => {
        //we have access to our shopping array in our db json
        //iterate through this array to help faciliate being added to the DOM
        shoppingArr.forEach( itemObj => {
            
            turnItemToLI(itemObj)
        })
    })

let turnItemToLI = (shopping) => {
    
    //1) create the outermost element
    let itemLi = document.createElement("li")
        itemLi.className = "item"
    //2) fill the contents of that element
    itemLi.innerHTML = `<p class="js-item">${shopping.item} - <span>${shopping.count}</span></p>
        <button class="quantity">Quantity</button>
        <button class="delete-button">x</button>
        `
    //3) Slap the outermost element on the DOM
    itemOL.append(itemLi)
   
}
