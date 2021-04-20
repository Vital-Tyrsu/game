
(function () {
    'use strict';

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

});


// set up text to print, each item in array is new line

