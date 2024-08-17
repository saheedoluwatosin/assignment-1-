
const div = document.querySelector(".container")



 async function fetch_data(){
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        json.forEach((each)=>{
            div.innerHTML +=`
            <div>
                <h4>${each.id}</h4>
                <h5>${each.username}</h5>
                <h5>${each.email}</h5>
            </div>
            
            `
        })
      } )
}







