// ============================================================
// Easter Eggs 🎃 🪓 ☕
// ============================================================


// ------------------------------------------------------------
// Console easter egg (Java themed)
// ------------------------------------------------------------
console.log(
  '%c\n' +
  '  _                            \n' +
  ' | |    ___   __ _  __ _ _ __  \n' +
  ' | |   / _ \\ / _` |/ _` | \'_ \\ \n' +
  ' | |__| (_) | (_| | (_| | | | |\n' +
  ' |_____\\___/ \\__, |\\__,_|_| |_|\n' +
  '             |___/             \n',
  'color: #f89820; font-family: monospace; font-size: 12px; line-height: 1.2;'
);
console.log(
  '%cSystem.out.println("Hey! Stop snooping. 🤫");',
  'color: #f89820; font-family: monospace; font-size: 13px;'
);
console.log(
  '%c// TODO: fix life',
  'color: #555555; font-family: monospace; font-size: 12px;'
);


// ------------------------------------------------------------
// Halloween theme on 🎃 click
// ------------------------------------------------------------
let halloweenAudio = null;

function playHalloweenTheme() {
  if (halloweenAudio && !halloweenAudio.paused) {
    halloweenAudio.pause();
    halloweenAudio.currentTime = 0;
    return;
  }
  halloweenAudio = new Audio('/assets/halloween.m4a');
  halloweenAudio.play();
}

const pumpkin = document.getElementById('pumpkin');
if (pumpkin) {
  pumpkin.style.cursor = 'pointer';
  pumpkin.addEventListener('click', playHalloweenTheme);
}


// ------------------------------------------------------------
// Draven sound on Gamer / joystick click
// ------------------------------------------------------------
function playDravenSound() {
  const audio = new Audio('/assets/Draven_Select.ogg');
  audio.play();
}


// ------------------------------------------------------------
// Knife cursor 🔪 on pumpkin / Horror Buff hover
// ------------------------------------------------------------
const horrorBuff = document.getElementById('horror-buff');

[pumpkin, horrorBuff].forEach(el => {
  if (!el) return;
  el.addEventListener('mouseenter', () => document.body.classList.add('knife-cursor'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('knife-cursor'));
});

// ------------------------------------------------------------
// Java cursor on Coder / coffee hover
// ------------------------------------------------------------
const coder = document.getElementById('coder');
const coffee = document.getElementById('coffee');

[coder, coffee].forEach(el => {
  if (!el) return;
  el.addEventListener('mouseenter', () => document.body.classList.add('java-cursor'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('java-cursor'));
});

if (coffee) {
  coffee.style.cursor = 'pointer';
  coffee.addEventListener('click', () => {
    window.open('https://www.youtube.com/watch?v=MLksirK9nnE', '_blank');
  });
}

// ------------------------------------------------------------
// Axe cursor 🪓 on Gamer / joystick hover
// ------------------------------------------------------------
const gamer = document.getElementById('gamer');
const joystick = document.getElementById('joystick');

[gamer, joystick].forEach(el => {
  if (!el) return;
  el.addEventListener('mouseenter', () => document.body.classList.add('axe-cursor'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('axe-cursor'));
});

if (joystick) {
  joystick.addEventListener('click', playDravenSound);
}
