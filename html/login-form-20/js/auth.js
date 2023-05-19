function auth() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "admin@gmail.com" && password === "user") {
        window.location.replace("./upload.html");
        // alert("You Are a ADMIN");

    } else {
        alert("Invalid information");
        return;
    }
}