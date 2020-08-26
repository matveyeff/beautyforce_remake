"use strict";

var langSwitcher = document.querySelector('.dropdown__label');
var langContainer = document.querySelector('.dropdown');
langSwitcher.addEventListener('click', function (e) {
  langContainer.classList.toggle('is-open');

  if (!e.target.classList === 'dropdown__links') {
    langContainer.classList.remove('is-open');
  }
});