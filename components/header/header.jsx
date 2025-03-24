"use client";

import Link from "next/link";
import Styles from "./header.module.css";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const [activelink, setactivelink] = useState("Home");

  const Handlelinkclick = (linkname) => {
    setactivelink(linkname);
  };
  useEffect(() => {
    const sections = [
      { id: "Home", name: "Home" },
      { id: "About", name: "About" },
      { id: "Skills", name: "skills" },
      { id: "Projects", name: "projects" },
      { id: "Contact", name: "contact" },
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-60px 0px -100% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = sections.find(
            (section) => section.id === entry.target.id
          )?.name;
          if (sectionName) {
            setactivelink(sectionName);
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <header className="w-full fixed pt-[20px!important] pb-[20px!important] bg-white z-[20] top-0  shadow">
      <div className="container">
        <div className="wrapper relative flex flex-wrap justify-between w-full">
          <div className="logo-wrap relative max-w-[50px]">
            <Link href="/" className="davy-black font-bold">
              Abhay
            </Link>
          </div>
          <div className="list-wrap relative">
            <ul className={`${Styles.list} flex flex-wrap`}>
              <li className="mr-[30px!important]">
                <Link
                  href="#Home"
                  className={`uppercase relative text-[14px] font-bold text-black ${
                    activelink === "Home" ? "active" : ""
                  }`}
                  onClick={() => Handlelinkclick("Home")}
                >
                  Home
                </Link>
              </li>
              <li className="mr-[30px!important]">
                <Link
                  href="#About"
                  className={`uppercase relative text-[14px] font-bold text-black ${
                    activelink === "About" ? "active" : ""
                  }`}
                  onClick={() => Handlelinkclick("About")}
                >
                  About
                </Link>
              </li>
              <li className="mr-[30px!important]">
                <Link
                  href="#Skills"
                  className={`uppercase relative text-[14px] font-bold text-black ${
                    activelink === "skills" ? "active" : ""
                  }`}
                  onClick={() => Handlelinkclick("skills")}
                >
                  skills
                </Link>
              </li>
              <li className="mr-[30px!important]">
                <Link
                  href="#Projects"
                  className={`uppercase relative text-[14px] font-bold text-black ${
                    activelink === "projects" ? "active" : ""
                  }`}
                  onClick={() => Handlelinkclick("projects")}
                >
                  projects
                </Link>
              </li>
              <li>
                <Link
                  href="#Contact"
                  className={`uppercase relative text-[14px] font-bold text-black ${
                    activelink === "contact" ? "active" : ""
                  }`}
                  onClick={() => Handlelinkclick("contact")}
                >
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
