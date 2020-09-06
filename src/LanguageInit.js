import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import propertiesToJSON from 'properties-to-json';

const LanguageInit = ({languageId, portalUrl, contextPath, directory, dispatch}) => {

    let langId = (languageId || '').split('_').shift();
    let fileName = "Language";

    if (langId !== 'en' && langId !== '')
        fileName += "_" + langId;

    let fileUrl = `${portalUrl + contextPath}/${directory}/${fileName}.properties`;

    useEffect(() => {
        fetch(fileUrl)
            .then(data => data.text())
            .then(data => {
                const languageKeys = propertiesToJSON(data);
                dispatch({payload: languageKeys})
            })
    }, [])

    return null;

}

LanguageInit.propTypes = {
    languageId: PropTypes.string.isRequired,
    portalUrl: PropTypes.string.isRequired,
    contextPath: PropTypes.string.isRequired,
    directory: PropTypes.string
}

LanguageInit.defaultProps = {
    languageId: "en_US",
    directory: "localization"
}

export default LanguageInit;