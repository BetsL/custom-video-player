/* Get Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress_filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build Functions */

// function togglePlay() {
//   if(video.paused) {
//     video.play();
//   } else {
//     video.pause();
//   }
// }      ^ is the same as ...

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
