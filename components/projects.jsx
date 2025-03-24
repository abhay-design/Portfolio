import Image from "next/image";
import Link from "next/link";
const Project = () => {
  const Card = [
    {
      img: "/svg/clear_logo.svg",
      href: "https://www.cleardigital.com/",
      title: "ClearDigital",
      pargraph:
        "Technology Used: Next.js, React, Tailwind CSS, Vercel, HubSpot",
    },
    {
      img: "/logo.png",
      href: "https://younginnovations.com/",
      title: "Young innovations",
      pargraph:
        "Technology Used: Html, Scss, Jquery/Javascript,  Drupal, Php, Algolia,",
    },
    {
      img: "/logo-dcc.png",
      href: "https://www.loldaycarelacey.com/",
      title: "lots of love",
      pargraph: "Technology Used: Html, Bootstrap, Jquery/Javascript,",
    },
  ];
  return (
    <section className="projects bg-blue" id="Projects">
      <div className="container">
        <div className="intro mb-[64px!important] relative">
          <h5 className="text-40 text-white mb-[12px!important]">
            Code Creations
          </h5>
          <p className="text-white">
            Dive into a showcase of my skills through various projects.
          </p>
        </div>
        <div className="wrapper w-[calc(100%-32px)] ml-[-16px!important] flex flex-wrap relative">
          {Card.map((wrap, index) => (
            <div
              className="card p-[16px!important] relative bg-white rounded-[8px] w-[calc(25%-32px)] mx-[16px!important]"
              key={index}
            >
              <Link className="emptylink" href={wrap.href} target="_blank">
                .
              </Link>
              <div className="img-wrap mb-[32px!important] h-[160px] w-full rounded-[4px] border-b-1">
                <Image
                  src={wrap.img}
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                  alt="logo"
                />
              </div>
              <h2 className="text-xl mb-[16px!important] uppercase text-black">
                {wrap.title}
              </h2>
              <p className="text-gray-600">{wrap.pargraph}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Project;
