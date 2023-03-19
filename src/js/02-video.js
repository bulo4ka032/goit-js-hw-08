import Player from '@vimeo/player';

const iframe = document.querySelector('iframe#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', onData);

function onData(data) {
  localStorage.setItem('time', data.seconds);
}

function setTime() {
  const savedTime = localStorage.getItem('time');
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
}

setTime();
