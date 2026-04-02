import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Raw mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smoothed ring position (more lag = more trail)
  const ringX = useSpring(mouseX, { stiffness: 80, damping: 20, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 80, damping: 20, mass: 0.5 });

  // Dot is more snappy
  const dotX = useSpring(mouseX, { stiffness: 300, damping: 28 });
  const dotY = useSpring(mouseY, { stiffness: 300, damping: 28 });

  useEffect(() => {
    // Don't show custom cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-magnetic]") ||
        target.closest("input") ||
        target.closest("textarea");

      if (isInteractive) setIsHovering(true);
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-magnetic]") ||
        target.closest("input") ||
        target.closest("textarea");

      if (isInteractive) setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer glowing ring */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[99999] mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 56 : isClicking ? 28 : 36,
          height: isHovering ? 56 : isClicking ? 28 : 36,
          opacity: isClicking ? 0.5 : 1,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            border: "1.5px solid rgba(255,255,255,0.9)",
            boxShadow: isHovering
              ? "0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.1)"
              : "0 0 10px rgba(255,255,255,0.1)",
            background: isHovering ? "rgba(255,255,255,0.05)" : "transparent",
            transition: "box-shadow 0.3s ease, background 0.3s ease",
          }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 6 : isClicking ? 12 : 5,
          height: isHovering ? 6 : isClicking ? 12 : 5,
          opacity: isHovering ? 0.7 : 1,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: "rgba(255,255,255,1)",
            boxShadow: "0 0 8px rgba(255,255,255,0.8)",
          }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
