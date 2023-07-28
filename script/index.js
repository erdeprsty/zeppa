const btnPayRespect = document.getElementById("btn-pay-respect");

const randomBetween = (min = 0, max = 0) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

const blinkRespectIcon = () => {
	const respectIcon = document.getElementById("zp-respect-icon");
	const [viewportWidth, viewportHeight] = [
		window.innerWidth,
		window.innerHeight,
	];
	const randomPosX = randomBetween(0, viewportWidth);
	const randomPosY = randomBetween(0, viewportHeight);

	respectIcon.style.transitionDuration = `0s`;
	respectIcon.style.top = `${randomPosY}px`;
	respectIcon.style.left = `${randomPosX}px`;
	respectIcon.style.opacity = "1";
	setTimeout(() => {
		respectIcon.style.transitionDuration = `.3s`;
		respectIcon.style.opacity = "0";
	}, 100);
};

btnPayRespect.addEventListener("click", () => {
	blinkRespectIcon();
});

document.addEventListener("keypress", (ev) => {
	if (ev.key === "z") {
		blinkRespectIcon();
	}
});