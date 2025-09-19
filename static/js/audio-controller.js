(() => {
  const artworkContainer = document.getElementById('artwork-container');

  artworkContainer.addEventListener('click', (e) => {
    console.log(e.target)
    if (e.target && e.target.closest('button.media-toggle')) {
      const figure = e.target.closest('figure');
      const audio = figure.querySelector('audio');
      const button = figure.querySelector('button.media-toggle');
      const img = button.querySelector('img');

      if (audio.paused) {
        // Pause all other audio elements
        document.querySelectorAll('#artwork-container audio').forEach((otherAudio) => {
          if (otherAudio !== audio) {
            otherAudio.pause();
            const otherButton = otherAudio.closest('figure').querySelector('button.media-toggle');
            if (otherButton) {
              const otherImg = otherButton.querySelector('img');
              otherImg.src = 'static/img/play.svg';
              otherImg.alt = 'Play';
            }
          }
        });

        audio.play();
        img.src = 'static/img/pause.svg';
        img.alt = 'Pause';

        audio.addEventListener('ended', () => {
          img.src = 'static/img/play.svg';
          img.alt = 'Play';
        }, { once: true });
      } else {
        audio.pause();
        img.src = 'static/img/play.svg';
        img.alt = 'Play';
      }
    }
  })
})();