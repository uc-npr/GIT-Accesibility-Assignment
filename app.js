// Accessibility Js file

var model = document.querySelector(".model");
var heading = document.querySelector("#heading");
var ok = document.querySelector(".ok");
var cancel = document.querySelector(".cancel");

var focusableElements = model.querySelectorAll(
    'a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls], summary, [tabindex^="0"], [tabindex^="1"], [tabindex^="2"], [tabindex^="3"], [tabindex^="4"], [tabindex^="5"], [tabindex^="6"], [tabindex^="7"], [tabindex^="8"], [tabindex^="9"]'
);
focusableElements = Array.prototype.slice.call(focusableElements);

var firstElement = focusableElements[0];
var lastElement = focusableElements[focusableElements.length - 1];

// heading.focus();

// Event Listener start
document.addEventListener("keydown", check);

function check(event) {
    console.log(event.keyCode);
    fun();
    if (event.keyCode === 71) {
        console.log("enter");
        ok.focus();
    } else if (event.keyCode === 8) {
        console.log("backspace");
        cancel.focus();
    }
}

function fun() {
    model.addEventListener("keydown", trap);
    function trap(event) {
        if (event.keyCode === 9) {
            // Shift is held down
            if (event.shiftKey) {
                if (document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                }
            } else {
                if (document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        }
    }
}


ok.addEventListener("click", () => {alert("Congratulation!")});
cancel.addEventListener("click", () => {heading.focus()});