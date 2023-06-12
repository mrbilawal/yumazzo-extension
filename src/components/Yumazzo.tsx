import { useState } from "react";
import { languages } from "../constants";
import Search from "./Search";
import SocialIcons from "./SocialIconsContainer";
import LanguageDetail from "./LanguageDetail";

const Yumazzo = () => {
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  return (
    <div className="container">
      {/* serach Input  */}
      <Search selectedLang={selectedLang} setSelectedLang={setSelectedLang} />

      {/* Language Social Icons */}
      <SocialIcons lang={selectedLang} />

      {/* Language Details Section */}
      <LanguageDetail language={selectedLang} />
    </div>
  );
}

export default Yumazzo;
