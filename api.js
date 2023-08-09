// fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response =>response.json())
//       .then(json => console.log(json.slice(0,10)))
//       console.log("*********************")


// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response =>response.json())
// .then(json => json.slice(0,10).map((data)=>data.completed))
// .then(data=>console.log(data))
// console.log("*********************")

// fetch("https://jsonplaceholder.typicode.com/todos", {
//     method: "POST",
//     body: JSON.stringify({
//         userId: "78",
//         title: "chaitu boi",
//         completed: true
        
//     }),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
// })
// .then(response => response.json())
// .then((json) => console.log(json))
  
//  async await  promise 

async function apiBolte(){
    try{
        var newa = await fetch("https://jsonplaceholder.typicode.com/todos")   
        var kewa = await newa.json()
        console.log(kewa)
    }catch(err){
        console.log(err)
    }
    }
    
apiBolte()

async function babu(){
    try{
        var chand = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            body: JSON.stringify({
                userId: "78",
                title: "chaitu boi",
                completed: true
                
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        var chandu = await chand.json()
        console.log(chandu)
        


    }catch(err){

    }
}

babu()