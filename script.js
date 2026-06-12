const form = document.getElementById("jobForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const position = document.getElementById("position").value.trim();
    const message = document.getElementById("message").value.trim();
    const resume = document.getElementById("resume").files.length;

    if(name === "" || position === "" || message === "" || resume === 0){
        alert("Please fill all required fields.");
        return;
    }

    successMessage.style.display = "block";

    form.reset();

    setTimeout(() => {
        successMessage.style.display = "none";
    }, 3000);

});