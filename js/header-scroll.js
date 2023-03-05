window.onscroll = () => changeHeaderBackground();

function changeHeaderBackground() {
	const header = document.querySelector('.header');
	const headerOffsetTrigger = header.offsetHeight;
	const pageOffset = window.pageYOffset;

	console.log(header, headerOffsetTrigger, pageOffset);

	if (pageOffset > headerOffsetTrigger) {
		header.classList.add('header--active');
	} else {
		header.classList.remove('header--active');
	}
}
