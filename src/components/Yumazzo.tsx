import { useState } from "react";
import { languages } from "../constants";
import Search from "./Search";
import SocialIcons from "./SocialIconsContainer";
import LanguageDetail from "./LanguageDetail";
import RecipeForm from "./RecipeForm";

const Yumazzo = () => {
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [showRecipeForm, setShowRecipeForm] = useState<boolean>(false);

  return (
    <div className="container">
      {showRecipeForm ? (
        <RecipeForm setShowRecipeForm={setShowRecipeForm} />
      ) : (
        <>
          {/* serach Input  */}
          <Search
            selectedLang={selectedLang}
            setSelectedLang={setSelectedLang}
          />

          {/* Language Social Icons */}
          <SocialIcons
            lang={selectedLang}
            setShowRecipeForm={setShowRecipeForm}
          />

          {/* Language Details Section */}
          <LanguageDetail language={selectedLang} />
        </>
      )}
    </div>
  );
}

export default Yumazzo;
