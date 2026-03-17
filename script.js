function submitForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all fields!");
    } else {
        alert("Thank you, " + name + "! I will contact you soon.");
    }
}