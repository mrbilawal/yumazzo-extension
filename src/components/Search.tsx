import React, { useState } from "react";
import { languages } from "../constants";
import { debounce } from "../utils/helpers";
import { Language } from "../utils/types";

interface SearchProps {
  setSelectedLang: (lang: Language) => void;
  selectedLang: Language;
}

const Search: React.FC<SearchProps> = ({ setSelectedLang, selectedLang }) => {
  const [suggestions, setSuggestions] = useState<Language[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const onSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value?.trim()?.toLowerCase();

    setSuggestions(
      languages?.filter((item) =>
        item?.title?.trim()?.toLowerCase()?.includes(searchValue)
      ) || []
    );
    setShowSuggestions(true);
  }, 1000);

  const onSelectLang = (lang: Language) => {
    setSelectedLang(lang);
    setShowSuggestions(false);
  };

  return (
    <div className="relative">
      <img src="search.png" alt="search-logo" className="search-icon" />
      <input
        placeholder="Search cuisine"
        className="search"
        onChange={onSearch}
      />
      {suggestions?.length > 0 && showSuggestions && (
        <div className="suggestions-container">
          {suggestions?.map((item: Language) => (
            <div
              className="cursor-pointer my-3"
              onClick={() => onSelectLang(item)}
              key={item.title}
            >
              {item?.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
