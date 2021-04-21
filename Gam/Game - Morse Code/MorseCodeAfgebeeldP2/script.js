let button = document.getElementById('btnSubmit');
button.addEventListener('click', function () {
    let inpCode = document.getElementById('password');

    if (inpCode.value === "9999") {
        console.log(2);
        window.location.replace("communication.html");
    } else {
        console.log("ERROR")
    }
});
// Get the modal
let modal = document.getElementById("myModal");
let i = 0;
let speed = 0.1;
let tekst = document.getElementById("realTekst");

typeWriter();

function typeWriter() {
    if (i < tekst.innerHTML.length) {
        document.getElementById("tekstContainer").innerHTML += tekst.innerHTML.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        modal.style.display = "block";
    }

}