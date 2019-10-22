var link = document.querySelector(".search-caption");
var popup = document.querySelector(".widget");
var popupClose = document.querySelector(".close-popup");
var form = popup.querySelector("form");
var arrival = popup.querySelector("[name=data-arrival]");
var departure = popup.querySelector("[name=data-departure]");
var adult = popup.querySelector("[name=adult]");
var child = popup.querySelector("[name=child]");
link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    arrival.focus()
});
popupClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error")
});       
form.addEventListener("submit", function(evt) {
    for (var i = 0; i < validation.length; i++) {
        if (!arrival.value || !departure.value || !adult.value || !child.value) {
            evt.preventDefault();
            popup.classList.remove("modal-error");
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("modal-error");
            console.log("Заполните пустые поля");
        }
    }
})
