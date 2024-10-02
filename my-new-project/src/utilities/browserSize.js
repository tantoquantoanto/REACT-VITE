import { useEffect, useState } from "react";

const useBrowserSize = () => {
  const [browserSize, setBrowserSize] = useState({
    widht: window.innerWidth,
    height: window.innerHeight,
  });

  const handleBrowserSizeChange = () => {
    setBrowserSize({
      widht: window.innerWidth,
      height: window.innerHeight,
    });}


    useEffect(() => {
        window.addEventListener("resize", handleBrowserSizeChange)

        return () => {
            window.removeEventListener("resize", handleBrowserSizeChange)
        }
    }, [])
    return browserSize

  };

  export default useBrowserSize
