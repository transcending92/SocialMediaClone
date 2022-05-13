var selectedRow = true

function validateUserCreds(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == true){
            console.log("User is granted access")
		}
        else{
            console.log("Invalid username or password!");
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData[]
}