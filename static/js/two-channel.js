const artworkVideo = document.getElementById('artwork-video');
const lectureVideo = document.getElementById('lecture-video');

function syncPlayPause(source, target) {
  source.addEventListener('play', () => {
    if (target.paused) target.play();
  });
  source.addEventListener('pause', () => {
    if (!target.paused) target.pause();
  });
}

function syncTimeUpdate(source, target) {
  let seeking = false;

  source.addEventListener('seeking', () => {
    seeking = true;
    target.currentTime = source.currentTime;
  });

  source.addEventListener('seeked', () => {
    seeking = false;
  });

  source.addEventListener('timeupdate', () => {
    if (!seeking && Math.abs(target.currentTime - source.currentTime) > 0.1) {
      target.currentTime = source.currentTime;
    }
  });
}

// Sync both ways
syncPlayPause(artworkVideo, lectureVideo);
syncTimeUpdate(artworkVideo, lectureVideo);
//syncTimeUpdate(lectureVideo, artworkVideo);