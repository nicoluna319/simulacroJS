//Selectors
const inputName = document.querySelector("#inputName")
const inputEmail = document.querySelector("#inputEmail")
const inputPassword = document.querySelector("#inputPassword")
const formSingup =document.querySelector("#formSingup")

//Events

formSingup.addEventListener("submit", (event)=>{
    event.preventDefault();
    addNewUser()

    // const name = inputName.value 
    
});

//Funciones

async function addNewUser(){
   
try{
    const response = await fetch(`http://localhost:3000/users?email=${inputEmail.value}`)
    const data = await response.json()
    console.log(data)

    if(!data.length){
        await fetch("http://localhost:3000/users",{
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({

                "name": inputName.value,
                "email": inputEmail.value,
                "password": inputPassword.value
            })
        })
   
}  else{
    alert("El correo ya esta registrado")
    formSingup.reset()
 }
} catch(error){
    console.error(error)
}
}