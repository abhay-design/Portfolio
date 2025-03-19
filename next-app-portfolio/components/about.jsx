import Link from "next/link";

const About = () => {
  return (
    <section className="about bg-gray">
      <div className="container">
        <h4 className="text-center vivid-blue relative heading mb-[50px!important]">
          About
        </h4>
        <div className="wrapper w-full relative flex ">
          <div className="heading-wrap relative max-w-[500px] uppercase">
            <h4>Crafting User Interfaces: My Expertise</h4>
          </div>
          <div className="text-wrap max-w-[500px]">
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
    </section>
  );
};
export default About;
