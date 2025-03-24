import Image from "next/image";

const Process = () => {
  const Card = [
    {
      img: "/svg/design (1).svg",
      heading: "Design",
      paragraph:
        "At this point, our primary focus is to articulate the message you   wish to convey. We'll now move on to defining the visual style of your website.",
    },
    {
      img: "/svg/development (1).svg",
      heading: "Development",
      paragraph:
        "This marks a pivotal phase in the development process, where the design from the previous stage transforms into a fully functional website that seamlessly operates on various browsers and devices.",
    },
    {
      img: "/svg/qa (1).svg",
      heading: "Quality Assurance",
      paragraph:
        " This phase is dedicated to conducting essential tests, such as assessing website speed and ensuring cross-browser compatibility, to ensure your website is fully prepared for its launch.",
    },
  ];
  return (
    <section className="dev_process bg-gray">
      <div className="container">
        <div className="intro text-center max-w-[1024px] mx-auto mb-[48px!important]">
          <h5 className="text-black">
            I bring user interfaces to life through a balanced fusion of design
            craftsmanship and technical implementation.
          </h5>
        </div>
        <div className="wrapper w-full relative flex flex-wrap">
          {Card.map((wrap, index) => (
            <div
              className="col-three w-[calc(33.33%-32px)] mx-[16px!important] text-center flex flex-wrap justify-center"
              key={index}
            >
              <div className="img-wrap max-w-[100px] h-[100px] mb-[24px!important]">
                <Image
                  src={wrap.img}
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                  alt="logo"
                />
              </div>
              <h6 className="mb-[12px!important] text-black w-full">
                {wrap.heading}
              </h6>
              <p className="text-sm text-black">{wrap.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Process;
