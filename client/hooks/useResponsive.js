import { useEffect, useState } from "react";

export const useResponsive = () => {
  const [width, setWidth] = useState("");
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  return [width, setWidth];
};
