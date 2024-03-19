import React from "react";
import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";

export default function Logo() {
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    const onResize = () => setIsMobile(window.innerWidth <= 768);

    // Attach event listeners
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const calculateOpacity = () => {
    const fadeInThreshold = isMobile ? 800 : 2000; // Adjusted threshold for mobile
    const fadeOutStart = 300;

    if (offset < fadeInThreshold) {
      return 0;
    } else if (offset < fadeOutStart) {
      return (offset - fadeInThreshold) / (fadeOutStart - fadeInThreshold);
    } else {
      return 0;
    }
  };
  return (
    <Div style={{ opacity: (offset - 500) / 600 }}>
      Lena Kroeker Web Development / UX
    </Div>
  );
}

const Div = styled.div`
  position: fixed;
  left: 100px;
  top: 20px;
  letter-spacing: 0.6em;
  z-index: 100;
  @media (max-width: 768px) {
    left: 10px;
    top: 5px;
    line-height: 1em;
    font-size: 15px;
  }
`;
