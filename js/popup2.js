var link = document.querySelector(".search-caption");
var popup = document.querySelector(".widget");
var form = popup.querySelector(form);

link.addEventListener("click", function (evt){
if() {
    evt.preventDefault();
    popup.classList.add("modal-show");
    arrival.focus();
} else {
    popup.classList.remove("modal-show");   
}
});


if (form.hasClass('active')) {
    form.fadeOut('slow').removeClass('active');
} else {
    form.fadeIn('slow').addClass('active');
}
});