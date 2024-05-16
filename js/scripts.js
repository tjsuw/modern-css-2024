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
