import { Poppins } from "next/font/google";
import Banner from "../components/banner";
import About from "../components/about";
import Skills from "../components/skills";
import Process from "../components/process";
import Project from "../components/projects";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className={poppins.className}>
      <Banner />
      <About />
      <Skills />
      <Process />
      <Project />
    </div>
  );
}
