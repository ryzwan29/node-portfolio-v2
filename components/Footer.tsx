import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia, footerContent } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          {footerContent.heading}{" "}
          <span className="text-purple">{footerContent.headingHighlight}</span>{" "}
          {footerContent.subheading}
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          {footerContent.body}
        </p>
        <a href={footerContent.ctaEmail}>
          <MagicButton
            title={footerContent.ctaLabel}
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-4">
        <p className="md:text-base text-sm md:font-normal font-light">
          {footerContent.copyright}
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt={info.name} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;