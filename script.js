window.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector('.cursor');
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    cursor.style.transform = `translate(${cursorX-20}px, ${cursorY-20}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});
