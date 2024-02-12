//Selectors
const inputName = document.querySelector("#inputName")
const inputEmail = document.querySelector("#inputEmail")
const inputPassword = document.querySelector("#inputPassword")
const formSingIn =document.querySelector("#formSingIn")

//Events

formSingIn.addEventListener("submit", (event)=>{
    event.preventDefault();
    singInUser()
    
});

//Funciones
//Funcion para comprobar las credenciales de un usuario

async function singInUser(){
    try {
       const response = await fetch(`http://localhost:3000/users?email=${inputEmail.value}`)
       const data = await response.json()

       if(data.length){
        if(data.length[0].password == inputPassword.value){
            window.location.href = "index.html"
        }else{("Correo registrado pero contraseña incorrecta")}

       }else{
        alert("El correo no esta registrado") 
     }
    } catch (error) {
        console.error(error)
    }
}

