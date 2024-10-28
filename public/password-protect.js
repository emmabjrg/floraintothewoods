const password = prompt("Enter the password to access this site:");

if (password !== "intothewoods") {
    alert("Incorrect password!");
    window.location.href = "https://netlify.com";
}