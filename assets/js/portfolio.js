const canvas = document.querySelector(".portfolio-constellation, .portfolio-page-canvas");

if (canvas) {
  const context = canvas.getContext("2d");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let width = 0;
  let height = 0;
  let pixelRatio = 1;
  let dots = [];
  let targetX = 0;
  let targetY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let targetPresence = 0;
  let cursorPresence = 0;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

  const random = (seed) => {
    const value = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
    return value - Math.floor(value);
  };

  const resize = () => {
    const bounds = canvas.getBoundingClientRect();
    width = bounds.width;
    height = bounds.height;
    pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    dots = [];

    const spacing = Math.max(70, Math.min(112, width / 12));
    const columns = Math.ceil(width / spacing) + 2;
    const rows = Math.ceil(height / spacing) + 2;

    for (let row = -1; row < rows; row += 1) {
      for (let column = -1; column < columns; column += 1) {
        const index = (row + 1) * columns + column + 1;
        const x = column * spacing + (row % 2) * spacing / 2;
        const y = row * spacing * 0.78;
        const radius = spacing * (0.25 + random(index + 91) * 0.2);
        const points = [];

        for (let side = 0; side < 6; side += 1) {
          const angle = Math.PI / 3 * side + Math.PI / 6;
          const variation = 0.78 + random(index * 7 + side) * 0.35;
          points.push([
            x + Math.cos(angle) * radius * variation,
            y + Math.sin(angle) * radius * variation
          ]);
        }

        const colorIndex = random(index + 13);
        dots.push({
          x,
          y,
          points,
          radius: 3 + random(index + 5) * 15,
          color: colorIndex > 0.96 ? "gold" : colorIndex > 0.91 ? "orange" : colorIndex > 0.76 ? "teal" : null,
          phase: random(index + 33) * Math.PI * 2
        });
      }
    }
  };

  const draw = (time = 0) => {
    const dark = document.documentElement.getAttribute("data-theme") === "dark";
    const cellFill = dark ? "#1b1d21" : "#e8f3ff";
    const cellStroke = dark ? "#303237" : "#bfd6ef";
    const teal = dark ? "#367a83" : "#3978b8";
    const orange = dark ? "#42c7e8" : "#c62839";
    const gold = dark ? "#8ce7e8" : "#d6a300";

    cursorX += (targetX - cursorX) * 0.075;
    cursorY += (targetY - cursorY) * 0.075;
    cursorPresence += (targetPresence - cursorPresence) * 0.09;

    context.clearRect(0, 0, width, height);
    context.lineWidth = 1;
    context.save();
    context.translate(cursorX * 14, cursorY * 14);

    dots.forEach((dot, index) => {
      context.beginPath();
      dot.points.forEach(([x, y], pointIndex) => {
        if (pointIndex === 0) context.moveTo(x, y);
        else context.lineTo(x, y);
      });
      context.closePath();
      context.fillStyle = cellFill;
      context.fill();
      context.strokeStyle = cellStroke;
      context.stroke();

      if (!dot.color) return;
      const pulse = reducedMotion ? 1 : 0.9 + Math.sin(time / 1200 + dot.phase) * 0.08;
      const color = dot.color === "gold" ? gold : dot.color === "orange" ? orange : teal;
      context.beginPath();
      context.arc(dot.x, dot.y, dot.radius * pulse, 0, Math.PI * 2);
      context.fillStyle = color;
      context.fill();
      context.strokeStyle = dark ? "#292b30" : "#bfd6ef";
      context.stroke();
    });

    if (cursorPresence > 0.01) {
      const glowX = (cursorX + 1) * width / 2 - cursorX * 14;
      const glowY = (cursorY + 1) * height / 2 - cursorY * 14;
      const glow = context.createRadialGradient(glowX, glowY, 0, glowX, glowY, Math.max(width, height) * 0.34);
      glow.addColorStop(0, dark ? "rgba(66, 199, 232, 0.18)" : "rgba(57, 120, 184, 0.2)");
      glow.addColorStop(1, dark ? "rgba(66, 199, 232, 0)" : "rgba(57, 120, 184, 0)");
      context.globalAlpha = cursorPresence;
      context.fillStyle = glow;
      context.fillRect(-cursorX * 14, -cursorY * 14, width, height);
      context.globalAlpha = 1;
    }

    context.restore();

    if (!reducedMotion) window.requestAnimationFrame(draw);
  };

  if (finePointer.matches && !reducedMotion) {
    const updateCursor = (event) => {
      const bounds = canvas.getBoundingClientRect();
      targetX = Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width) * 2 - 1));
      targetY = Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height) * 2 - 1));
      targetPresence = 1;
    };

    canvas.parentElement.addEventListener("pointermove", updateCursor, { passive: true });
    canvas.parentElement.addEventListener("pointerleave", () => {
      targetX = 0;
      targetY = 0;
      targetPresence = 0;
    }, { passive: true });
  }

  resize();
  draw();
  window.addEventListener("resize", () => {
    resize();
    if (reducedMotion) draw();
  }, { passive: true });
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => draw());
  new MutationObserver(() => {
    if (reducedMotion) draw();
  }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
}
