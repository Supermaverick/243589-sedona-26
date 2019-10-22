var link = document.querySelector(".search-caption");
var popup = document.querySelector(".widget");
var arrival = popup.querySelector("[name=data-arrival]");
var form = popup.querySelector("form");
var departure = popup.querySelector("[name=data-departure]");
var adult = popup.querySelector("[name=adult]");
var child = popup.querySelector("[name=child]");
link.addEventListener("click", function(evt) {
    evt.preventDefault();
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
    if (!arrival.value || !departure.value || !adult.value || !child.value) {
        evt.preventDefault();
        popup.classList.add("modal-error");
    }
});