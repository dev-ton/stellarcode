import React from "react";

export default function useWindowSize() {
  const isSSR = typeof window !== "undefined";
  const [windowSize, setWindowSize] = React.useState({
    width: isSSR && 1200,
    height: isSSR && 800,
  });

  function changeWindowSize() {
    setWindowSize({ width: isSSR && window.innerWidth, height: isSSR && window.innerHeight });
  }

  React.useEffect(() => {
    isSSR && window.addEventListener("resize", changeWindowSize);

    return () => {
        isSSR && window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;
}