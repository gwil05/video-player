// Get our  elements

const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');

const toggle = document.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const playBtn = document.querySelector('.img');
const viewer = document.querySelector(".viewer");
const fullScreenBtn = document.querySelector(".fullScreenBtn");


function openFullscreen() {
    if (viewer.requestFullscreen) {
      viewer.requestFullscreen();
    } else if (viewer.mozRequestFullScreen) { /* Firefox */
      viewer.mozRequestFullScreen();
    } else if (viewer.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      viewer.webkitRequestFullscreen();
    } else if (viewer.msRequestFullscreen) { /* IE/Edge */
      viewer.msRequestFullscreen();
    }
  }




function togglePlay() {
    const method = video.paused ? 'play': 'pause';
    video[method]();

   
}


// play and pause button update
function updateButton() {
    const icon = video.paused ?  '►' : '❚ ❚';

    toggle.textContent = icon;

    console.log(icon);
}

// skip function reading our data-skip 
function skip() {
console.log(this.dataset.skip);
video.currentTime += parseFloat(this.dataset.skip);

}

function volumeAndSpeed() {
    video[this.name] = this.value;

}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  }

function scrubber(e) {
    const scrubberTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubberTime;
    console.log(e);
}



// Hook up the event listeners
video.addEventListener('click', togglePlay);

toggle.addEventListener('click', togglePlay);

video.addEventListener('timeupdate', handleProgress);
fullScreenBtn.addEventListener('click', openFullscreen);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', volumeAndSpeed));
ranges.forEach(range => range.addEventListener('mouseMove', volumeAndSpeed));

//function to control where the video is with our mouse
// let mousedown = false;
progress.addEventListener('click', scrubber);






