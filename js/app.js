document.addEventListener("mousemove", (e) => {
  Object.assign(document.documentElement, {
    style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * 0.01}deg;
		`,
  });
});

document.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  if (touch) {
    Object.assign(document.documentElement, {
      style: `
		  --move-x: ${(touch.clientX - window.innerWidth / 2) * -0.005}deg;
		  --move-y: ${(touch.clientY - window.innerHeight / 2) * 0.01}deg;
		  `,
    });
  }
});
