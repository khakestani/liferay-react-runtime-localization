import React, {useContext, useEffect, useReducer} from "react";
import languageReducer from "./LanguageReducer";
import LanguageInit from "./LanguageInit";
import PropTypes from "prop-types";

export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

const LanguageProvider = ({ languageId, portalUrl, contextPath, directory, children }) => {
    const [state, dispatch] = useReducer(languageReducer, {});

    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                    <LanguageInit dispatch={dispatch}
                                  languageId={languageId}
                                  portalUrl={portalUrl}
                                  contextPath={contextPath}
                                  directory={directory}/>
                    {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    );
}

export const isLanguageLoaded = () => {
    const languageKeys = useContext(StateContext);
    if(JSON.stringify(languageKeys) === "{}"){
        return false;
    }
    else
        return true;
}



LanguageProvider.prototype = {
    languageId: PropTypes.string.isRequired,
    portalUrl: PropTypes.string.isRequired,
    contextPath: PropTypes.string.isRequired,
    directory: PropTypes.string
}

LanguageProvider.defaultProps = {
    languageId: "en_US",
    directory: "localization"
}

export default LanguageProvider;