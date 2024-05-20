// For the toggle to make sticky header.
window.onload = setToggleFalse();

function setToggleFalse() {
	let toggle = document.querySelector('#flexSwitchCheckChecked');
	toggle.checked = false;
}

// Toggle to add or remove sticky-top class on header element.
function toggleMe(e) {
	let state = e.checked;
	let header = document.querySelector('header');
	// console.log(header.clientHeight);
	if (!header.classList.contains('sticky-top') && state) {
		header.classList.add('sticky-top');
	} else {
		header.classList.remove('sticky-top');
	}
}

// For the scroll back to top button.
let scrollBtn = document.querySelector('#btn-back-to-top');

// Listen for user scroll.
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (
		document.body.scrollTop > 150 ||
		document.documentElement.scrollTop > 150
	) {
		scrollBtn.style.display = 'block';
	} else {
		scrollBtn.style.display = 'none';
	}
}

function scrollToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
