import { useEffect, useRef } from "react";

const MagicCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const speed = 0.15; // smoothness 🟦 (0.1 = very smooth)

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;

      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;

      requestAnimationFrame(animateCursor);
    };

    requestAnimationFrame(animateCursor);

    window.addEventListener("mousemove", move);

    // Hover (magnetic) effect
    const hoverTargets = document.querySelectorAll("a, button, .hover-target, img");
    hoverTargets.forEach((t) => {
      t.addEventListener("mouseenter", () => {
        cursor.style.width = "110px";
        cursor.style.height = "110px";
        cursor.style.filter = "blur(35px)";
      });

      t.addEventListener("mouseleave", () => {
        cursor.style.width = "60px";
        cursor.style.height = "60px";
        cursor.style.filter = "blur(20px)";
      });
    });

    // Click ripple effect
    window.addEventListener("click", () => {
      cursor.classList.add("cursor-click");
      setTimeout(() => cursor.classList.remove("cursor-click"), 300);
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return <div ref={cursorRef} className="magic-cursor"></div>;
};

export default MagicCursor;
