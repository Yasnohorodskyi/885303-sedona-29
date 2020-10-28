let popap = document.querySelector('.searche__form');
let button = document.querySelector('.offer__button');
let popapArrival = popap.querySelector('.searche__form-arrival');
let popapDeparture = popap.querySelector('.searche__form-departure');

button.addEventListener("click", function (evt) {
    if (popap.classList.contains("popap-show")) {
        evt.preventDefault();
        popap.classList.remove("popap-show");
    } else {
        popap.classList.add("popap-show");
        popapArrival.focus();
    }
});

popap.addEventListener("submit", function (evt) {
    if (!popapArrival.value || !popapDeparture.value || !popapButton.value) {
        evt.preventDefault();
        popap.classList.add("popap-error");
    }
});






