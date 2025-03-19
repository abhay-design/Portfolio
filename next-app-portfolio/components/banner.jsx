import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="banner w-full items-center min-h-[500px]">
      <div className="container">
        <div className="wrapper w-full flex flex-wrap">
          <div className="text-wrap relative max-w-[600px]">
            <h1 className="uppercase mb-[40px!important]">
              Hi, <br /> I'm <span className="vivid-blue">Abhay</span> <br />{" "}
              Web Dev
            </h1>
            <div className="btn-wrap mb-[25px!important]">
              <Link href="#" className="button">
                Contact
              </Link>
            </div>
            <div className="link-wrap">
              <ul className="flex flex-wrap">
                <li className="max-w-[24px] relative mr-[25px!important]">
                  <Link href="#" className="emptylink"></Link>
                  <Image
                    src="/svg/icons8-linkedin.svg"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-contain"
                    alt="linkdin"
                  />
                </li>
                <li className="max-w-[24px] relative">
                  <Link
                    href="https://github.com/abhay-design"
                    target="_blank"
                    className="emptylink"
                  ></Link>
                  <Image
                    src="/svg/icons8-github.svg"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-contain"
                    alt="github"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
