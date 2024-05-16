import reactLogo from "../assets/images/reactt-logo.png";
import jsLogo from "../assets//images/js-logo.jpeg";
import tutorialHellLogo from "../assets//images/tutorial-hell.png";

const Hero = () => {
  return (
    <div className="w-full overflow-hidden my-12">
      {/*  upper hero with heading */}
      <div className=" py-12 w-10/12 relative mx-auto">
        <div className="my-8 bg-[#f1f2f4] w-3/12 mx-auto rounded-full text-center py-2 font-bold">
          A new Way to learn
        </div>

        {/*  heading */}
        <div className="relative ">
          <div className="flex flex-col gap-6">
            <h1 className="  w-9/12 mx-auto text-7xl font-extrabold text-center ">
              Let's Save you from
            </h1>
            <img
              className="absolute w-28 rounded-full top-20 right-[18%]"
              src={tutorialHellLogo}
            ></img>
            <h1 className="w-9/12 mx-auto text-7xl font-extrabold text-center">
              Tutorial-hell
            </h1>
          </div>

          <p className="py-12 text-slate-400 leading-6 w-4/12 mx-auto text-center">
            here you can learn react from comprehensive approach without wasting
            much time on tutorials you will get enough to learn from here
          </p>
        </div>
      </div>

      {/* lower hero with   choose to learn */}
      <div className=" w-full  bg-[rgb(237,231,231)] pt-2">
        <div className="mt-12 bg-[#f1f2f4] w-3/12 mx-auto rounded-full text-center py-2 font-bold">
          Choose What to learn
        </div>

        <div className="w-10/12 flex justify-between mx-auto">
          {/*  react info */}
          <div className=" rounded-lg bg-white p-16 flex flex-col gap-4 items-center my-20 w-5/12 relative ">
            <img className="w-[30rem]" alt="react-logo" src={reactLogo}></img>

            <div>
              <p className=" text-slate-400 leading-6  mx-auto text-center">
                React.js is the backbone of modern web development. Almost all
                companies use it. This is because React is easy to install and
                use, has strong community support, and is still actively
                maintained by Facebook.
              </p>
            </div>
            <button className=" my-4 mx-auto font-bold bg-cyan-500 w-6/12 py-4 text-white">
              Learn Now
            </button>
          </div>

          {/* js info */}
          <div className="rounded-lg bg-white p-16 flex flex-col gap-4 items-center my-20 w-5/12 relative ">
            <img className="w-[30rem]" alt="react-logo" src={jsLogo}></img>

            <div>
              <p className=" text-slate-400 leading-6  mx-auto text-center">
                JavaScript (js) is a light-weight object-oriented programming
                language which is used by several websites for scripting the
                webpages. It is an interpreted, full-fledged programming
                language
              </p>
            </div>
            <button className=" my-4 mx-auto font-bold bg-yellow-500 w-6/12 py-4 text-white">
              Learn Now
            </button>
          </div>
        </div>
      </div>
      {/*  quiz info */}
      <div className="bg-[rgb(237,231,231)] flex py-16 px-32 mx-auto items-center gap-16">
        <h1 className="text-4xl font- text-center ">
          Test your knowledge by giving some quizzes
        </h1>
        <button className="rounded-md bg-blue-500 py-4  px-8 text-white mx-auto">
          Take Me To Quiz{" "}
        </button>
      </div>
    </div>
  );
};

export default Hero;
