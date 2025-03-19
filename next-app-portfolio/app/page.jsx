import Image from "next/image";
import { Poppins } from "next/font/google";
import Banner from "../components/banner";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className={poppins.className}>
      <Banner />
    </div>
  );
}
