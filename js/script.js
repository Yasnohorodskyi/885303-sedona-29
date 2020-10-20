let popap = document.querySelector('.searche__form');
let button = document.querySelector('.offer__button');
let arrival = document.querySelector('.searche__form-arrival');
let searcheForm = document.querySelector('.searche__form');

button.addEventListener("click", function (evt) {
    if (popap.classList.contains("popap-show")) {
        evt.preventDefault();
        popap.classList.remove("popap-show");
    } else {
        popap.classList.add("popap-show");
        arrival.focus();
    }
});
