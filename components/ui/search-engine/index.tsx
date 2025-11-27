import MobileSearchEngine from "./mobile";
import WebSearchEngine from "./web";


const SearchEngine = {
  Web: WebSearchEngine,
  Mobile: MobileSearchEngine,
};

export default SearchEngine;
