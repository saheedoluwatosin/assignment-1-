const food= []
const btn_r = document.getElementById("Rice")
const btn_b = document.getElementById("Bean")
const btn_y = document.getElementById("Yam")
const btn = document.getElementById("final")
const foodlist = document.getElementById("foodlist")

btn_r.addEventListener("click",()=>{
    food.push("Rice")
    btn_r.disabled=true
})
btn_b.addEventListener("click",()=>{
    food.push("Bean")
    btn_b.disabled=true
})
btn_y.addEventListener("click",()=>{
    food.push("Yam")
    btn_y.disabled=true
    
})





btn.addEventListener('click', ()=>
    
    {
        food.forEach((each)=>{
           foodlist.innerHTML += `<li>${each}</li>`
        })

    })




