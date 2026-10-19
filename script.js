const openSurprise = document.getElementById('openSurprise');
const surprise = document.getElementById('surprise');
const memories = document.getElementById('memories');
const letter = document.getElementById('letter');
const flame = document.getElementById('flame');
const wishMessage = document.getElementById('wishMessage');

function reveal(section) {
  section.classList.remove('hidden');
  setTimeout(() => section.scrollIntoView({behavior:'smooth', block:'center'}), 80);
}
openSurprise.addEventListener('click', () => {
  reveal(surprise);
  confettiBurst(24);
});
document.getElementById('candleButton').addEventListener('click', () => {
  flame.classList.add('out');
  wishMessage.textContent = 'Wish made! May your year be as lovely as your smile. 💖✨';
  confettiBurst(55);
});
document.getElementById('showPhotos').addEventListener('click', () => reveal(memories));
document.getElementById('showLetter').addEventListener('click', () => reveal(letter));
document.getElementById('replay').addEventListener('click', () => {
  [surprise, memories, letter].forEach(s => s.classList.add('hidden'));
  flame.classList.remove('out');
  wishMessage.textContent = 'One tiny wish, one big smile. 💕';
  window.scrollTo({top:0, behavior:'smooth'});
  setTimeout(() => document.getElementById('home').scrollIntoView({behavior:'smooth'}), 100);
});
function confettiBurst(count) {
  const layer = document.getElementById('confettiLayer');
  const colors = ['#f18ab5','#ffcfdf','#ffd166','#d7b8ff','#ffffff','#e65b96'];
  for (let i=0;i<count;i++) {
    const bit = document.createElement('span');
    bit.className = 'confetti';
    bit.style.left = Math.random()*100 + 'vw';
    bit.style.background = colors[Math.floor(Math.random()*colors.length)];
    bit.style.animationDelay = (Math.random()*.7) + 's';
    bit.style.animationDuration = (2.2+Math.random()*1.8) + 's';
    bit.style.transform = `rotate(${Math.random()*180}deg)`;
    layer.appendChild(bit);
    setTimeout(() => bit.remove(), 4500);
  }
}
