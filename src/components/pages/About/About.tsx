"use client";
import React, { FC, useEffect, useState } from "react";
import scss from "./About.module.scss";
import { GiShop } from "react-icons/gi";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { BsFillHandbagFill } from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa6";
// import { slider2 } from "@/constants/links";
// import Image from "next/image";
import Commerce from "../HomeSections/Commerce";

const About: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // const [currentSlide, setCurrentSlide] = useState(0);

  // const nextSlide = () => {
  //   setCurrentSlide((prevSlide) => (prevSlide + 1) % slider2.length);
  // };

  // const handleBoxClick = (index: number) => {
  //   setActiveIndex(index);
  // };

  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 2000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section className={scss.About}>
      <div className="container">
        <div className={scss.content}>
          <h1>About</h1>
          <div className={scss.about_content}>
            <div className={scss.title}>
              <h1>Our Story</h1>
              <span>
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping
                <br />
                makterplace with an active presense in Bangladesh. Supported
                <br /> by wide range of tailored marketing, data and service
                solutions, <br />
                Exclusive has 10,500 sallers and 300 brands and serves 3 <br />
                millioons customers across the region.
              </span>
              <span>
                Exclusive has more than 1 Million products to offer, growing at
                a
                <br />
                very fast. Exclusive offers a diverse assotment in categories
                <br />
                ranging from consumer.
              </span>
            </div>
            <div className={scss.side_image}></div>
          </div>
        </div>
        <div className={scss.grid_content}>
          <div className={scss.grid}>
            <div
              className={`${scss.column} ${
                activeIndex === 0 ? scss.active : ""
              }`}
              onClick={() => handleBoxClick(0)}
            >
              <button>
                <GiShop />
              </button>
              <h3>10.5k</h3>
              <span>Sallers active our site</span>
            </div>
            <div
              className={`${scss.column} ${
                activeIndex === 1 ? scss.active : ""
              }`}
              onClick={() => handleBoxClick(1)}
            >
              <button>
                <BiSolidBadgeDollar />
              </button>
              <h3>33k</h3>
              <span>Mapnthly Product Sale</span>
            </div>
            <div
              className={`${scss.column} ${
                activeIndex === 2 ? scss.active : ""
              }`}
              onClick={() => handleBoxClick(2)}
            >
              <button>
                <BsFillHandbagFill />
              </button>
              <h3>45.5k</h3>
              <span>Customer active in our site</span>
            </div>
            <div
              className={`${scss.column} ${
                activeIndex === 3 ? scss.active : ""
              }`}
              onClick={() => handleBoxClick(3)}
            >
              <button>
                <FaMoneyBill />
              </button>
              <h3>25k</h3>
              <span>Anual gross sale in our site</span>
            </div>
          </div>
        </div>
        <div className={scss.comerce}>
          <Commerce />
        </div>
        {/* <div className={scss.slider_content}>
          {slider2.map((slide, index) => (
            <div
              key={index}
              className={`${scss.slide} ${
                currentSlide === index ? scss.active : ""
              }`}
            >
              <div className={scss.content_cart}>
                <div className={scss.content_image}>
                  <Image
                    src={slide.image}
                    alt="person"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  />
                </div>
                <div className={scss.content_text}>
                  <p>{slide.name}</p>
                  <span>{slide.job}</span>
                </div>
              </div>
            </div>
          ))}

          <div className={scss.navDots}>
            {slider2.map((_, index) => (
              <span
                key={index}
                className={`${scss.dot} ${
                  currentSlide === index ? scss.active : ""
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
