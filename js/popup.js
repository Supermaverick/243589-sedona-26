var link = document.querySelector(".search-caption");
var popup = document.querySelector(".widget");
var arrival = popup.querySelector("[name=data-arrival]");
var form = popup.querySelector("form");
var validation = popup.querySelectorAll(".validation");
window.addEventListener("load", function(evt) {
    evt.preventDefault();
    popup.classList.add("close-js");
});
link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("close-js");
    popup.classList.toggle("modal-show");
    arrival.focus(); 
});      
window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});
form.addEventListener("submit", function(evt) {
    for (var i = 0; i < validation.length; i++) {
        if (!validation[i].value) {
            evt.preventDefault();
            popup.classList.add("modal-error");
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.remove("modal-error");
        }
    }  
});
