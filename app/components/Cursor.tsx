"use client";

import { useEffect, useState } from "react";

export function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button")) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button")) {
        setIsHovering(false);
      }
    };

    const handleMouseOut = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);
    document.addEventListener("mouseleave", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
      document.removeEventListener("mouseleave", handleMouseOut);
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Small dot */}
      <div
        className={`fixed pointer-events-none z-[9999] rounded-full bg-accent transition-opacity duration-150 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: position.x - 4,
          top: position.y - 4,
          width: 8,
          height: 8,
        }}
      />
      {/* Outer circle */}
      <div
        className={`fixed pointer-events-none z-[9999] rounded-full border border-accent/50 transition-all duration-200 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${isHovering ? "scale-150 bg-accent/10" : "scale-100"}`}
        style={{
          left: position.x - 20,
          top: position.y - 20,
          width: 40,
          height: 40,
        }}
      />
    </>
  );
}
