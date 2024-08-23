import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export const FooterComponent = () => {
  const icons = [
    { icon: <FaFacebook className="h-10 w-auto" />, link: "https://www.facebook.com/johncedrick.guevara.1/" },
    { icon: <FaLinkedin className="h-10 w-auto" />, link: "https://www.linkedin.com/in/john-cedrick-guevara-66381027b/" },
    { icon: <FaInstagram className="h-10 w-auto" />, link: "https://www.instagram.com/guevy_guevy/?next=%2F" },
  ];

  return (
    <footer id="contact" className="bg-[#dccfed] text-[#291c3a] p-5 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-black">
        Let's collaborate on creating cool stuff together
      </h1>

      <h1 className="text-lg font-semibold my-4">
        You can keep in touch with me at:
      </h1>
      <div className="flex space-x-4">
        {icons.map((item) => (
          <a href={item.link} className="h-16">
            {item.icon}
          </a>
        ))}
      </div>

      <div className="bg-[#47345f]  rounded-b rounded-r ">
        <div className="bg-[#331c52] rounded-b rounded-r relative -top-3 -left-3 p-5 flex items-center justify-between gap-2">
          <MdOutlineMail className="text-white h-auto w-10 " />
          <h1 className="text-white w-fit font-semibold">guevarajohncedrick0610@gmail.com</h1>
        </div>
      </div>
    </footer>
  );
};
