const Contact = () => {
  return (
    <section className="contact-form">
      <div className="container">
        <div className="intro mb-[50px!important]">
          <h4 className="heading text-center vivid-blue relative">Contact</h4>
        </div>
        <div className="form-wrapper w-full flex flex-wrap justify-center">
          <form className="max-w-[460px] w-full">
            <div className="form-input w-full mb-[32px!important]">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-[16px!important] rounded-[8px] border-black border text-black"
              />
            </div>
            <div className="form-input w-full mb-[32px!important]">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-[16px!important] rounded-[8px] border border-black text-black"
              />
            </div>
            <div className="form-input w-full mb-[32px!important]">
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-[16px!important] rounded-[8px] border border-black text-black"
              />
            </div>
            <div className="form-input w-full mb-[32px!important]">
              <textarea
                type="text"
                placeholder="Subject"
                className="w-full p-[16px!important] h-[150px] rounded-[8px] border border-black text-black"
              />
            </div>
            <div className="form-input w-full mb-[32px!important] text-center">
              <input type="submit" className="button cursor-pointer" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
