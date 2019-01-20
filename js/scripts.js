const SRSettings = {
	reset: true,
	useDelay: 'onload',
	// * Disabeled for horizontal scroll on mobile clients
	mobile: false,
};

const SrClassOptions = {
	duration: 3250,
	scale: 0.85,
	easing: 'ease-in-out',
}

const RightOptions = {
	duration: 2000,
	origin: 'right',
	easing: 'ease-in-out',
	distance: '10%'
};

const LeftOptions = {
	duration: 2000,
	origin: 'left',
	easing: 'ease-in-out',
	distance: '10%'
};

const TopOptions = {
	duration: 2000,
	origin: 'top',
	easing: 'ease-in-out',
	distance: '10%'
};

const BottomOptions = {
	duration: 2000,
	origin: 'bottom',
	easing: 'ease-in-out',
	distance: '10%'
};

const LogoOptions = {
	duration: 2000,
	origin: 'top',
	distance: '10%'
};

document.addEventListener('DOMContentLoaded', function (event) {
	ScrollReveal(SRSettings);
	ScrollReveal().reveal('.reveal-logo', LogoOptions);
	ScrollReveal().reveal('.right-reveal', RightOptions);
	ScrollReveal().reveal('.left-reveal', LeftOptions);
	ScrollReveal().reveal('.top-reveal', TopOptions);
	ScrollReveal().reveal('.bot-reveal', BottomOptions);
});
