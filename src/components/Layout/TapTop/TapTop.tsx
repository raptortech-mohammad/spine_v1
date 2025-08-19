"use client";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const TapTop = () => {
  const [tapTopStyle, setTapTopStyle] = useState("none");
  const executeScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const handleScroll = () => {
    if (window.scrollY > 100) setTapTopStyle("block");
    else setTapTopStyle("none");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="tap-top"
      style={{ display: tapTopStyle }}
      onClick={executeScroll}
    >
      <span>
        <ArrowUp />
      </span>
    </div>
  );
};

export default TapTop;
