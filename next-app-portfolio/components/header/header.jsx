import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full pt-[20px!important] pb-[20px!important] bg-white z-[20] top-0 relative shadow">
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
                <Link href="#" className="uppercase text-[14px] font-bold">
                  Home
                </Link>
              </li>
              <li className="mr-[30px!important]">
                <Link href="#" className="uppercase text-[14px] font-bold">
                  About
                </Link>
              </li>
              <li className="mr-[30px!important]">
                <Link href="#" className="uppercase text-[14px] font-bold">
                  skills
                </Link>
              </li>
              <li className="mr-[30px!important]">
                <Link href="#" className="uppercase text-[14px] font-bold">
                  projects
                </Link>
              </li>
              <li>
                <Link href="#" className="uppercase text-[14px] font-bold">
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
