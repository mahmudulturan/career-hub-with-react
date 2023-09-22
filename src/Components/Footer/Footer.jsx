import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <footer className=" p-10 bg-[#1A1919] mt-32 text-white">
        <div className="footer w-3/4 mx-auto">
        <aside>
          <div className="space-y-5">
            <h1 className="text-3xl font-extrabold">CareerHub</h1>
            <p>There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br /> suffered alteration in some form.</p>
            <br />
            <div className="flex gap-5">
                <a className="text-4xl" href=""><FaFacebook></FaFacebook></a>
                <a className="text-4xl" href=""><BsTwitter></BsTwitter></a>
                <a className="text-4xl" href=""><AiFillInstagram></AiFillInstagram></a>
            </div>
          </div>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
