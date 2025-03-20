const Process = () => {
  return (
    <section className="dev_process bg-gray">
      <div className="container">
        <div className="intro text-center max-w-[1024px] mx-auto mb-[48px!important]">
          <h5>
            I bring user interfaces to life through a balanced fusion of design
            craftsmanship and technical implementation.
          </h5>
        </div>
        <div className="wrapper w-full relative flex flex-wrap">
          <div className="col-three w-[calc(33.33%-32px)] mx-[16px!important] text-center">
            <h6 className="mb-[12px!important]">Design</h6>
            <p className="text-sm">
              At this point, our primary focus is to articulate the message you
              wish to convey. We'll now move on to defining the visual style of
              your website.
            </p>
          </div>
          <div className="col-three w-[calc(33.33%-32px)] mx-[16px!important] text-center">
            <h6 className="mb-[12px!important]">Development</h6>
            <p className="text-sm">
              This marks a pivotal phase in the development process, where the
              design from the previous stage transforms into a fully functional
              website that seamlessly operates on various browsers and devices.
            </p>
          </div>
          <div className="col-three w-[calc(33.33%-32px)] mx-[16px!important] text-center">
            <h6 className="mb-[12px!important]">Quality Assurance</h6>
            <p className="text-sm">
              This phase is dedicated to conducting essential tests, such as
              assessing website speed and ensuring cross-browser compatibility,
              to ensure your website is fully prepared for its launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Process;
