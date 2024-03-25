import {
  FaWhatsapp,
  FaInstagram,
  FaTelegram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0e1015] py-[72px] relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 md:flex-row justify-between items-center w-full">
          <div className="text-white flex gap-1">
            <p>Theme by</p>
            <a
              href="https://github.com/liebe-developing"
              target="_blank"
              rel="nofollow noopener"
              title="Ali Razmjooei"
              className="hover:text-[#745cf9]"
            >
              Ali Razmjooei
            </a>
          </div>

          <div className="flex gap-6 items-center">
            <a href="https://www.instagram.com/alirazmjue/" target="_blank">
              <FaInstagram className="social_icons" />
            </a>

            <a href="https://wa.me/+989396922723" target="_blank">
              <FaWhatsapp className="social_icons" />
            </a>

            <a href="https://t.me/alirazmjue" target="_blank">
              <FaTelegram className="social_icons" />
            </a>
            <a
              href="https://www.linkedin.com/in/ali-razmjooei-8760b7208"
              target="_blank"
            >
              <FaLinkedin className="social_icons" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
