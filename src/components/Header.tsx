import { Link } from "react-router-dom";

import HeaderLogo from "../assets/images/book-logo.png";

const Header = () => {
  return (
    <div className="z-50  fixed border-b border-slate-200 bg-slate-100 py-4 px-8 w-full  flex justify-between">
      <div className=" flex w-3/12 ">
        <h1 className=" font-bold">TutorialBook</h1>
        <Link to={"/"}>
          <img
            className="relative -top-3 w-12"
            alt="logo"
            src={HeaderLogo}
          ></img>
        </Link>
      </div>

      <ul className="font-bold text-slate-500 w-3/12 flex justify-between">
        <li>Features</li>
        <li>Testimonials </li>
        <li>FAQs</li>
      </ul>

      <ul className="font-bold w-3/12 flex justify-between">
        <Link to="/learn" className="cursor-pointer">
          <li>Learn React</li>
        </Link>

        <li>Learn JS</li>
        <li>Quiz</li>
      </ul>
    </div>
  );
};

export default Header;
