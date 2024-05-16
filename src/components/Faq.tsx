import { useState } from "react";
import { questionsList } from "../utils/constants";

import FaqItems from "./FaqItems";

const Faq = () => {
  const [showIndex, setShowIndex] = useState<number | null>(null);

  return (
    <div className="w-full relative py-12">
      <div className="w-10/12 mx-auto ">
        <h1 className="py-12 text-6xl font-bold text-center">
          Frequently asked questions
        </h1>
        {questionsList.map((ques, index) => (
          <FaqItems
            data={ques}
            key={ques.id}
            showItem={index == showIndex ? true : false}
            setShowItem={() => setShowIndex(index)}
            closeShowItem={() => setShowIndex(null)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
