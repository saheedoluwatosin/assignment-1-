const add = document.getElementById("add")
const item_buy = document.getElementById("Item_buy")
const List = document.getElementById("List")

add.addEventListener("click",()=>{
    List.innerHTML +=`<li>${item_buy.value}</li>`
})