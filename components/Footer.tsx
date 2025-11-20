import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative overflow-hidden" id="contact">

      {/* Background Grid */}
      <div className="absolute left-0 bottom-0 w-full h-[380px] pointer-events-none">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          fill
          className="w-full h-full opacity-40 object-cover"
        />
      </div>

      {/* Footer Content */}
      <div className="flex flex-col items-center relative z-10">
        <h1 className="heading lg:max-w-[45vw] text-center text-purple">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>

        <p className="text-slate-300 md:mt-10 my-6 text-center max-w-[520px] leading-relaxed">
          Reach out to me today and let’s discuss how I can help you
          achieve your goals.
        </p>

        {/* Button */}
        <a href="mailto:ompatilcodes@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Lower section */}
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center relative z-10 gap-6 md:gap-0">

        {/* COPYRIGHT */}
        <p className="md:text-base text-sm text-slate-400 font-light">
          © {new Date().getFullYear()} Built with ❤️ by OM
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div
                className="
          w-11 h-11 
          cursor-pointer 
          flex justify-center items-center 
          backdrop-blur-xl 
          bg-slate-900/60 
          rounded-xl 
          border border-slate-700/50
          shadow-[0_0_10px_rgba(88,28,135,0.25)]
          transition-all duration-300
          hover:border-purple-400/60 
          hover:shadow-[0_0_18px_rgba(168,85,247,0.6)]
        "
              >

                <Image
                  src={info.img}
                  alt="icons"
                  width={22}
                  height={22}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
