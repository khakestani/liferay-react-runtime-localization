import {useContext} from "react";
import {StateContext} from "./LanguageProvider";

function getLanguage(langKey) {

    const languageKeys = useContext(StateContext);

    const getLanguage = (langKey)=>{
        let keys = Object.keys(languageKeys);
        if(keys.indexOf(langKey) >= 0){
            return languageKeys[langKey]
        }else{
            return langKey;
        }
    }

    return getLanguage(langKey)
}

export default getLanguage;
