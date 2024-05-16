import learnLogo from "../assets/images/learn-logo.png";
import freeLogo from "../assets/images/free-logo.jpeg";
import quizLogo from "../assets/images/quiz-logo.png";

const Feature = () => {
  return (
    <div className="py-12 w-full relative">
      <div className="w-10/12 mx-auto">
        <div className="my-8 bg-[#f1f2f4] w-3/12 mx-auto rounded-full text-center py-2 font-bold">
          Learn Fast
        </div>
        <h1 className="py-8 text-5xl font-bold text-center">
          Everything you need to master React and JS
        </h1>
        {/*  features cards */}
        <div className="w-full flex gap-8 justify-between  py-16 ">
          {/*  first card */}
          <div className="p-4 flex flex-col gap-4  w-4/12 shadow-lg">
            <div className="flex w-full  justify-between">
              <h1 className="font-bold text-lg bg-[#bfd4ff] shadow-xl  py-2 px-4 rounded-full">
                Learn at your own Pace
              </h1>
              <img className="w-10 rounded-full" src={learnLogo}></img>
            </div>
            <p className="h-24 text-slate-400 ">
              you can learn on your pace we provide to the point notes for react
              and js within a less time you will become master at reactjs and js
            </p>
            <button className=" font-bold w-32 my-8">learn more ➡</button>
          </div>
          {/*  second card */}
          <div className="p-4 flex flex-col gap-4  w-4/12 shadow-lg">
            <div className="flex w-full  justify-between">
              <h1 className="font-bold text-lg bg-[#fed8ff] shadow-xl  py-2 px-4 rounded-full">
                {" "}
                Everything is Free
              </h1>
              <img className="w-10 rounded-full " src={freeLogo}></img>
            </div>

            <p className="h-24">
              Everything you learn from here is 100% free you dont need to pay a
              single penny to learn this
            </p>
            <button className=" font-bold w-32 my-8">learn more ➡</button>
          </div>
          {/*  third card */}
          <div className="p-4 flex flex-col gap-4  w-4/12 shadow-lg">
            <div className="flex w-full  justify-between">
              <h1 className="font-bold text-lg bg-[#acebb0] shadow-xl  py-2 px-4 rounded-full">
                {" "}
                Quiz
              </h1>
              <img className="w-12 rounded-full" src={quizLogo}></img>
            </div>

            <p className="h-24">
              Quizzes are designed to test your knowledge as soon you started
              learning try to give quizs so u can be more comfortable with react
              and js
            </p>
            <button className=" font-bold w-32 my-8">learn more ➡</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
