import Styles from "./footer.module.css";
// import Styles from "/footer.module.css";

const Footer = () => {
  return (
    <footer className={`${Styles.footer} bg-ocean`}>
      <div className="container">
        <div className="wrapper text-center">
          <h5 className="text-white mb-[32px!important]">Abhay</h5>
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
