const clock = document.querySelector("span.clock");
const header = document.querySelector("i.fa-chevron-up");
const contents = document.querySelector("div.friends-screen__channel-contents");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);

function clickChannel() {
  contents.classList.toggle("hidden");
}

header.addEventListener("click", clickChannel);
