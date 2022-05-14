window.addEventListener('load', () => {


//When clicking the submit button, display an error message for invalid username or password
        center.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.querySelector("#username");
        const password = document.querySelector("#password");
        const form = document.getElementById("#form");
        const center = document.getElementById("#center");
        

        if (username.value === "CodemaniaChica_92" && password.value === "Codeexample1") {
            alert("Login Successful");
            
        } else {
            alert("Invalid username or password!");
     }
    
})








}
)












