import React, {Fragment, useContext} from "react";
import PropTypes from 'prop-types';
import {StateContext} from "./LanguageProvider";

const Language = ({langKey}) => {

        const languageKeys = useContext(StateContext);

        const getLanguage = (langKey)=>{
            let keys = Object.keys(languageKeys);
            if(keys.indexOf(langKey) >= 0){
                return languageKeys[langKey]
            }else{
                return langKey;
            }
        }

        return <Fragment>{getLanguage(langKey)}</Fragment>
}

Language.prototype = {
    langKey : PropTypes.string.isRequired
}

export default Language;