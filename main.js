function updateStars() {
  const stars = document.getElementsByClassName("star");
  while (stars.length > 0) {
    stars[0].parentNode.removeChild(stars[0]);
  }

  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.className = "star";
    var randomNumber = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    star.style.width = randomNumber + "px";
    star.style.height = randomNumber + "px";
    const randomTop = Math.floor(Math.random() * window.innerHeight);
    const randomLeft = Math.floor(Math.random() * window.innerWidth);
    star.style.position = "absolute";
    star.style.top = randomTop + "px";
    star.style.left = randomLeft + "px";
    star.style.zIndex = "-111";
    document.body.appendChild(star);
  }
}
updateStars();

setTimeout(() => {
  setInterval(updateStars, 3000);
}, 1500);
