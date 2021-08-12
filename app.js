for (i = 0; i < 100; i++) {
  // Random rotation
  let randomRotation = Math.floor(Math.random() * 360);
  // Random Scale
  let randomScale = Math.random() * 1;
  // Random width & height between 0 and viewport
  let randomWidth = Math.floor(
    Math.random() *
      Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  );
  let randomHeight = Math.floor(
    Math.random() *
      Math.max(document.documentElement.clientHeight, window.innerHeight || 500)
  );

  // Random animation-delay
  let randomAnimationDelay = Math.floor(Math.random() * 15);

  // Random colors
  let colors = [
    "#0CD977",
    "#FF1C1C",
    "#FF93DE",
    "#5767ED",
    "#FFC61C",
    "#8497B0",
    "#f9752a"

  ];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];

  // Create confetti piece
  let confetti = document.createElement("div");
  confetti.className = "confetti";
  confetti.style.top = randomHeight + "px";
  confetti.style.right = randomWidth + "px";
  confetti.style.backgroundColor = randomColor;
  // confetti.style.transform='scale(' + randomScale + ')';
  confetti.style.obacity = randomScale;
  confetti.style.transform = "skew(15deg) rotate(" + randomRotation + "deg)";
  confetti.style.animationDelay = randomAnimationDelay + "s";
  document.getElementById("confetti-wrapper").appendChild(confetti);
}
