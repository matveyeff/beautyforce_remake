const langSwitcher = document.querySelector('.dropdown__label');
const langContainer = document.querySelector('.dropdown');

langSwitcher.addEventListener('click', (e) => {
	langContainer.classList.toggle('is-open');

	if (!e.target.classList === 'dropdown__links') {
		langContainer.classList.remove('is-open');
	}
});
