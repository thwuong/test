import React, { useEffect, useRef, useState } from "react";
export const useWindowDimensions = () => {
  const ref = useRef<any>();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      handleWindowResize();
    }
    // component is mounted and window is available        handleWindowResize();
    window.addEventListener("resize", handleWindowResize); // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return { width, height };
};
