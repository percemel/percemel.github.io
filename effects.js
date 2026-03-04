document.addEventListener("mousemove", (e) => {
  const star = document.createElement("div");
  star.className = "trail-star";
  star.style.left = e.pageX + "px";
  star.style.top = e.pageY + "px";

  // SVG yıldız (inline)
  star.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M12 2l2.7 6.6 7.1.6-5.4 4.6 1.7 6.9L12 17.8 5.9 20.7 7.6 13.8 2.2 9.2l7.1-.6L12 2z"
        fill="rgba(255,255,255,0.95)"/>
    </svg>
  `;

  document.body.appendChild(star);
  setTimeout(() => star.remove(), 700);
});