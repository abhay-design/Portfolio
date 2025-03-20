import Image from "next/image";

const Skills = () => {
  const logos = [
    {
      img: "/svg/html5.svg",
    },
    {
      img: "/svg/css3.svg",
    },
    {
      img: "/svg/js.svg",
    },
    {
      img: "/svg/sass.svg",
    },
    {
      img: "/svg/next.svg",
    },
    {
      img: "/svg/bootstrap.svg",
    },
    {
      img: "/svg/tailwindcss-icon.svg",
    },
    {
      img: "/svg/git.svg",
    },
  ];
  return (
    <section className="skills">
      <div className="container">
        <div className="intro w-full text-center mb-[48px!important]">
          <h4 className="vivid-blue relative heading mb-[30px!important]">
            Skills
          </h4>
          <p className="text-black">
            What truly excites me about my work is the opportunity to utilize
            fantastic tools and resources on a daily basis.
          </p>
        </div>
        <div className="wrapper w-full flex flex-wrap relative">
          {logos.map((wrap, index) => (
            <div
              className="logo-wrap w-[calc(25%-20px)] mx-[10px!important] mb-[20px!important] p-[16px!important] min-h-[275px] flex flex-wrap justify-center items-center border"
              key={index}
            >
              <div className="logo max-w-[100px] h-[100px]">
                <Image
                  src={wrap.img}
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                  alt="img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
