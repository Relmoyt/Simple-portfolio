import { useEffect, useRef } from "react";

export default function MouseTilt({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      let mouseX = (x - 0.5) * 2;
      let mouseY = (y - 0.5) * 2;

      const rotateY = mouseX * 6;
      const rotateX = -mouseY * 6;

      containerRef.current.style.transform = `
        perspective(1200px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;
    };

    const handleMouseLeave = () => {
      containerRef.current.style.transform = `
        perspective(1200px)
        rotateX(0deg)
        rotateY(0deg)
      `;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="">
      {children}
    </div>
  );
}
