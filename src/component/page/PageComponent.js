import React, { useEffect, useState } from "react";
import "./PageStyle.css";

function Page({ children }) {
  const [height, setHeight] = useState(() => window.innerHeight);
  const [isSmallScreen, setIsSmallScreen] = useState(
    () => window.innerWidth < 1024,
  );

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
      setIsSmallScreen(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="page-style"
      style={{
        height: isSmallScreen ? "auto" : height,
        overflow: "auto",
      }}
    >
      {children}
    </div>
  );
}

export default Page;
