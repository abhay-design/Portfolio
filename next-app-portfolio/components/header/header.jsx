"use client";

import Link from "next/link";
import Styles from "./header.module.css";
import { useState } from "react";

const Header = () => {
  const [activelink, setactivelink] = useState("Home");

  const Handlelinkclick = (linkname) => {
    setactivelink(linkname);
  };

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
            <ul className="flex flex-wrap">
              <li className="mr-[30px!important]">
                <Link
                  href="#"
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
                  href="#"
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
                  href="#"
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
                  href="#"
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
                  href="#"
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
