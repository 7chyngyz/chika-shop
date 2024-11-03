"use client";
import React, { useEffect, useState } from "react";
import scss from "./TopHeader.module.scss";

const TopHeader = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={scss.TopHeader}>
      <div className={scss.content}>
        <div className={scss.frame}>
          <span>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </span>
          <button>ShopNow</button>
        </div>
        <div className={scss.language}>
          <select>
            <option>English</option>
            <option>Russian</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
