// let display = document.querySelector("#display");
// let buttons = document.querySelectorAll("button");


// if()

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        let value = button.innerText;

        // Clear
        if (value === "C") {
            display.value = "";
        }

        // Calculate
        else if (value === "=") {
            try {
                display.value = eval(display.value);
            } 
            catch {
                display.value = "Error";
            }
        }

        // Numbers and operators
        else {
            display.value += value;
        }

    });

});