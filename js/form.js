
const searchLink = document.querySelector(".button_search");
const searchForm = document.querySelector(".search_form");
const inputDate1 = document.querySelector("#arrival");
const inputDate2 = document.querySelector("#departure");
const inputQuantity1 = document.querySelector("#adults");
const inputQuantity2 = document.querySelector("#children");
const formContainer = document.querySelector(".form_container");
const mapImg = document.querySelector(".map_img");
const mapIframe = document.querySelector(".map_iframe");

let isStorageSupport = true;
let storage = {};

document.addEventListener("DOMContentLoaded", function () {
  mapImg.classList.add("map_hidden");
  mapIframe.classList.remove("map_hidden");
  searchForm.classList.add("form_hide");
});

try {
  storage.date_of_arrival = localStorage.getItem("date_of_arrival");
  storage.date_of_departure = localStorage.getItem("date_of_departure");
  storage.adults = localStorage.getItem("adults");
  storage.children = localStorage.getItem("children");
  console.log(storage)
} catch (err) {
  isStorageSupport = false;
};

let getStorage = function (arg){
  storage.arg = localStorage.getItem("arg");
};

searchLink.addEventListener("click", function (evt) {
   evt.preventDefault();
   searchForm.classList.toggle("form_hide");
   searchForm.classList.add("form_animation");
   formContainer.classList.remove("form_error");
    if (storage) {
      inputDate1.value = storage.date_of_arrival;
      inputDate2.value = storage.date_of_departure;
      inputQuantity1.value = storage.adults;
      inputQuantity2.value = storage.children;
    }
});

searchForm.addEventListener("submit", function (evt) {
  if (!inputDate1.value || !inputDate2.value || !inputQuantity1.value || !inputQuantity2.value) {
    evt.preventDefault();
    formContainer.classList.remove("form_error");
    searchForm.offsetWidth = searchForm.offsetWidth;
    formContainer.classList.add("form_error"); 
    
  } else {
  	if (isStorageSupport) {
      localStorage.setItem("date_of_arrival", inputDate1.value);
      localStorage.setItem("date_of_departure", inputDate2.value);
      localStorage.setItem("adults", inputQuantity1.value);
      localStorage.setItem("children", inputQuantity2.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (searchForm.classList.contains("form_show")) {
      evt.preventDefault();
      searchForm.classList.remove("form_show");
      searchForm.classList.remove("form_error");
    }
  }
});









