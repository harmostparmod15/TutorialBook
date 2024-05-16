import HeaderLogo from "../assets/images/book-logo.png";

const Footer = () => {
  return (
    <div className="w-full bg-slate py-12 bg-[rgb(242,242,242)]">
      <div className="flex justify-between w-10/12 mx-auto">
        {/*  left side logo */}
        <div className="flex flex-col gap-4  w-5/12">
          <div className="flex">
            <h1 className="font-bold text-xl">TutorialBook</h1>
            <img
              className="relative -top-3 w-12"
              alt="logo"
              src={HeaderLogo}
            ></img>
          </div>

          <p>© TutorialBook . All Rights Reserved</p>
          <p>87, 1st Floor, Mahatma Gandhi Rd, Bengaluru, Karnataka 560001</p>
        </div>
        {/* right side links */}
        <div className=" w-3/12 list-none flex flex-col gap-4 font-bold ">
          <li>Learn React</li>
          <li>Learn JS</li>
          <li>Quiz</li>
        </div>
      </div>
    </div>
  );
};
export default Footer;
