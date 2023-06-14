import React from "react";
import { Language } from "../utils/types";

interface LanguageDetailProps {
  language: Language;
}

const LanguageDetail: React.FC<LanguageDetailProps> = ({ language }) => {
  return (
    <>
      <div
        className={`detail-container ${
          language?.details.classes ? language?.details.classes : ""
        }`}
      >
        <div className="flex items-center">
          <img src={language?.details.icon} alt="icon" className="mr-2" />
          <h2> Difficulty: {" "} {language?.details.difficulty} </h2>
        </div>
        <div>{language.details.description}</div>
        {/* <button> View Full Recipe </button> */}
      </div>

      {/* Language Info Section */}
      <div className="detail-wrapper">
        <div className="grid grid-cols-12 gap-8">
          {language?.info?.map((info) => (
            <div className="flex flex-col col-span-6" key={info.heading}>
              <h3> {info?.heading} </h3>
              <div className="flex items-center">
                {info?.text.map((text, index) => (
                  <span
                    className={`bg-gradient-to-r  bg-clip-text text-transparent font-bold ${
                      info?.className[index] ? info?.className[index] : ""
                    } `}
                    key={text}
                  >
                    {" "}
                    {text}
                    {info?.text?.length > 1 &&
                    index < info?.text?.length - 1 ? (
                      <span className="text-white"> &nbsp; / &nbsp;</span>
                    ) : (
                      ""
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LanguageDetail;
