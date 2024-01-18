document.getElementById("resetBtn").addEventListener("click", function () {
	window.location.reload();
});

window.addEventListener("load", function () {
	const loadingScreen = document.getElementById("loading-screen");
	const videoPlayer = document.getElementById("player");

	setTimeout(function () {
		loadingScreen.style.display = "none";
		videoPlayer.play();
	}, 2000);
});

// window.addEventListener("load", function () {
// 	const loadingScreen = document.getElementById("loading-screen");
// 	const videoPlayer = document.getElementById("player");

// 	setTimeout(function () {
// 		loadingScreen.style.display = "none"; // Hide the loading screen after 2 seconds

// 		setTimeout(function () {
// 			videoPlayer.play(); // Play the video after another 2 seconds
// 		}, 2000);
// 	}, 2000);
// });
