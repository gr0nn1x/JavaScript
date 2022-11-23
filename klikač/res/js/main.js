const player = document.getElementById("player");
const attack = document.getElementById("attack");
const playerhp = document.getElementById("playerhp");
const enemyhp = document.getElementById("enemyhp");
const info = document.getElementById("info");

attack.onmousedown = () => {
  player.style.left = "200px";

  if (enemyhp.innerHTML > 0 && playerhp.innerHTML > 0) {
    enemyhp.innerHTML--;
    player.style.left = "200px";
  }
  if (enemyhp.innerHTML == 0) {
    info.innerHTML = "Info: Nepritel Zemrel";
    clearInterval(enemyAttackInterval);
    player.style.left = "0px";
  }
};
attack.onmouseup = () => {
  player.style.left = "0px";
};

const enemyAttackInterval = setInterval(() => {
  playerhp.innerHTML--;
  if (playerhp.innerHTML <= 0) {
    clearInterval(enemyAttackInterval);
    info.innerHTML = "Info: Hrač zemřel";
  }
}, 500);
