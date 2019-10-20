var link = document.querySelector(".search-caption");
var popup = document.querySelector(".widget");
var form = popup.querySelector(form);
var arrival = popup.querySelector("[name=data-arrival]");
var departure = popup.querySelector("[name=data-departure]");
var adult = popup.querySelector("[name=adult]");
var child = popup.querySelector("[name=child]");
        
link.addEventListener("click", function (evt){
    evt.preventDefault();
    popup.classList.add("modal-show");
    arrival.focus();
});
        
form.addEventListener("submit", function (evt){
    if(!arrival.value || !departure.value || !adult.value || !child.value){
        evt.preventDefault();
        popup.classList.add("modal-error");
        console.log("Заполните пустые поля");
    }
});