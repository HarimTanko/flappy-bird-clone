import { updateBird, setupBird, getBirdRect } from './bird.js';

document.addEventListener('keypress', handleStart, { once: true });
const title = document.querySelector('[data-title]');
const subtitle = document.querySelector('[data-subtitle]');

let lastTime;
function updateLoop(time) {
  if (lastTime == null) {
    lastTime = time;
    window.requestAnimationFrame(updateLoop);
    return;
  }
  const delta = time - lastTime;
  updateBird(delta);
  if (checkLose()) return handleLose();
  lastTime = time;
  window.requestAnimationFrame(updateLoop);
}

function checkLose() {
  const birdRect = getBirdRect();
  const outsideWord = birdRect.top < 0 || birdRect.bottom > window.innerHeight;
  return outsideWord;
}

function handleStart() {
  setupBird();
  title.classList.add('hide');
  window.requestAnimationFrame(updateLoop);
}

function handleLose() {
  title.classList.remove('hide');
  subtitle.classList.remove('hide');
}
