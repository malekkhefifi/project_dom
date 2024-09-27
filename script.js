/**************************************selection ********* */
var products = document.getElementsByClassName("product"); console.log(products)
var trashIcons= document.getElementsByClassName("fa-trash"); console.log(products)
let heartIcons = document.querySelectorAll(".fa-heart");
let plusbuttons = document.querySelectorAll(".plus")
let quantity = document.querySelectorAll(".quantity")
let minusbuttons = document.querySelectorAll(".minus")
let pricebuttons = document.querySelectorAll(".price")
/****************************delete */

function removecart(i) {
    trashIcons[i].closest(".product").remove()
    quantity[i].innerText=0;
    calculatetotalprice()
}

/****************************************heart icons**********/

console.log(heartIcons)
for (let heart of heartIcons) {
    heart.addEventListener("click", function () {
        if (heart.style.color != "red") {
            heart.style.color = "red"
        } else {
            heart.style.color = "black"
        }
    })
}
/*************************increment quantity */


for (let i = 0; i < plusbuttons.length; i++) {
    plusbuttons[i].addEventListener("click", function () {
        quantity[i].innerText++
        calculatetotalprice()

    })
}



/*************************decrement quantity */


for (let i = 0; i < minusbuttons.length; i++) {
    minusbuttons[i].addEventListener("click", function () {
        if (quantity[i].innerText > 0) {
            quantity[i].innerText--
            calculatetotalprice()

        }
    })
}

//************************calculate total price */


function calculatetotalprice() {
    let total = 0
    for (let i = 0; i < quantity.length; i++) {
        total = total + pricebuttons[i].innerText * quantity[i].innerText
    }
    console.log(total)
    return document.querySelector("#total").innerText = total
}
calculatetotalprice()
