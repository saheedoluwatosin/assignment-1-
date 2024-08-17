const text = document.querySelector("h1")

function Response(stage){
    if(stage=='Successful'){
       text.style.backgroundColor='green'
    }
    else if(stage=='Failed'){
        text.style.backgroundColor='red'
    }
}
Response('Successful')




//document.body.style.backgroundColor='green'