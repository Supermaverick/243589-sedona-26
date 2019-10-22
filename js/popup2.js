var link = document.querySelector(".search-caption");
var popup = document.querySelector(".widget");
var form = popup.querySelector(form);
var arrival = popup.querySelector("[name=data-arrival]");
var departure = popup.querySelector("[name=data-departure]");
var adult = popup.querySelector("[name=adult]");
var child = popup.querySelector("[name=child]");

link.addEventListener("click", function (evt){
    if(display=="none"){
        evt.preventDefault();
        popup.classList.add("modal-show");
        arrival.focus();
    }else{
        popup.classList.remove("modal-show");
    }
});
