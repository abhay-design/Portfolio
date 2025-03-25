import Styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={`${Styles.footer} bg-ocean`}>
      <div className="container">
        <div className="wrapper text-center">
          <h5 className="text-white">Abhay</h5>
          <div className="social-icons my-[32px!important]">
            <ul className="flex flex-wrap justify-center">
              <li className="max-w-[24px] relative mr-[25px!important]">
                <Link href="#" className="emptylink"></Link>
                <Image
                  src="/svg/linkdin_white.svg"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-contain"
                  alt="linkdin"
                />
              </li>
              <li className="max-w-[24px] relative mr-[25px!important]">
                <Link
                  href="https://github.com/abhay-design"
                  target="_blank"
                  className="emptylink"
                ></Link>
                <Image
                  src="/svg/git_white.svg"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-contain"
                  alt="github"
                />
              </li>
              <li className="max-w-[24px] relative">
                <Link
                  href="https://mail.google.com/mail/u/0/#inbox"
                  target="_blank"
                  className="emptylink"
                ></Link>
                <Image
                  src="/svg/icons8-email-48.png"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-contain"
                  alt="github"
                />
              </li>
            </ul>
          </div>
          <p className="text-white">
            Need a website? I am a web designer and developer that can help
            bring your ideas into a reality.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
