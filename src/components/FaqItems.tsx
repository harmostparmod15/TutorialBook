import arrowImage from "../assets/images/arrow.png";

type propData = {
  index: number;
  closeShowItem: () => void;
  data: {
    ans: string;
    id: number;
    ques: string;
  };
  setShowItem: () => void;
  showItem: boolean;
};

const FaqItems = (props: propData) => {
  const index = props?.index;
  const question = props.data.ques;
  const answer = props.data.ans;
  const showItem = props.showItem;
  const setShowItem = props.setShowItem;
  const closeShowItem = props.closeShowItem;

  // change arrow rotation according to payload angle
  const manipulateArrowRoation = (payload: string, payload2: string) => {
    const arrowImg = document?.querySelectorAll(".arrow-img");
    arrowImg[index]?.classList?.remove(payload);
    arrowImg[index]?.classList?.add(payload2);
  };

  // handle click on arrow [ open or close Faq ]
  const handleClick = () => {
    if (!showItem) {
      setShowItem();
      manipulateArrowRoation("rotate-[90deg]", "rotate-[-90deg]");
    } else {
      closeShowItem();
      manipulateArrowRoation("rotate-[-90deg]", "rotate-[90deg]");
    }
  };

  return (
    <div className=" relative rounded-2xl  bg-slate-200 my-4  mx-auto w-10/12  flex  justify-between">
      <div
        className={
          "w-full py-8  px-12 font-bold   text-lg  flex flex-col items-start justify-evenly transition-all duration-200 " +
          (showItem && "scale-105 ")
        }
      >
        {/*  question section */}
        <div className="flex justify-between  w-full">
          {question}

          {/*  arrow - image */}
          <img
            onClick={handleClick}
            className=" arrow-img  cursor-pointer   w-12 h-12 rounded-full rotate-[90deg] "
            src={arrowImage}
          ></img>
        </div>

        {/*  answer section */}
        <div>
          {showItem && (
            <div className=" transition-all duration-500    my-4 py-4 border-t border-black ">
              {answer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FaqItems;
