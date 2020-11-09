let searchForm = document.querySelector('.search__form');
let button = document.querySelector('.offer__button');
let searchFormArrival = searchForm.querySelector('.search__form-arrival');
let searchFormDeparture = searchForm.querySelector('.search__form-departure');

searchForm.classList.add('search__form-show');

button.addEventListener('click', function (evt) {
    if (searchForm.classList.contains('search__form-show')) {
        evt.preventDefault();
        searchForm.classList.remove('search__form-show');
        searchForm.classList.remove('search__form-error');
    } else {
        searchForm.classList.add('search__form-show');
        searchFormArrival.focus();
    }
});

searchForm.addEventListener('submit', function (evt) {
    if (!searchFormArrival.value || !searchFormDeparture.value || !searchFormButton.value) {
        evt.preventDefault();
        searchForm.classList.remove('search__form-error');
        searchForm.offsetWidth = searchForm.offsetWidth;
        searchForm.classList.add('search__form-error');
    }
});