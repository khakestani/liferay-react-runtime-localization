import Language from "./Language";
import _LanguageProvider, {isLanguageLoaded as _isLanguageLoaded} from "./LanguageProvider";
import _getLanguage from "./getLanguage";

export default Language;
export const LanguageProvider = _LanguageProvider;
export const isLanguageLoaded = _isLanguageLoaded;
export const getLanguage = _getLanguage;
