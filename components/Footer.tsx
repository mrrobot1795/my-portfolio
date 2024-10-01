import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => (
  <footer
    className="text-white text-center p-4"
    style={{ backgroundColor: "#112" }}
  >
    <p className="mb-4">&copy; 2024 Shashidhar Sripada. All rights reserved.</p>
    <div className="flex justify-center space-x-4">
      <a
        href="https://www.linkedin.com/in/shashidhar-sripada-899b2520a/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
      <a href="https://github.com/mrrobot1795" target="_blank" rel="noreferrer">
        <FaGithub size={24} />
      </a>
    </div>
  </footer>
);

export default Footer;
