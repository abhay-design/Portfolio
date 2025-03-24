import Link from "next/link";

const About = () => {
  return (
    <section className="about bg-gray" id="About">
      <div className="container">
        <h4 className="text-center vivid-blue relative heading mb-[50px!important]">
          About
        </h4>
        <div className="wrapper w-full relative flex ">
          <div className="heading-wrapper relative  w-[50%]">
            <div className="heading-wrap uppercase max-w-[500px] pr-[50px!important]">
              <h4 className="text-black">
                Crafting User Interfaces: My Expertise
              </h4>
            </div>
          </div>
          <div className="text-wrap  w-[50%]">
            <div className="text max-w-[500px]">
              <p className="davy-black">
                I am a web developer at{" "}
                <Link
                  href="https://www.cleardigital.com"
                  className="vivid-blue"
                  target="_blank"
                >
                  Clear Digital,
                </Link>{" "}
                where I indulge in the art of web design, striving to deliver
                engaging and user-centric digital solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
