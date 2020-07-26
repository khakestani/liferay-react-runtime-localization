# Localizate Your React Portlet in Runtime

React Portlets is a facility in new versions of Liferay Portal, it support localization like any other type of portlets in Liferay
But localizing is done only in build time meaning if you have a language key that generated dynamicly , you can't localizate it
or for example if you get a key from api fetch and need to localizate it, you can't beacuse Liferay localization method for react ( `Liferay.Language.get("yourLanguageKey")` ) its undefined in runtime
and you can't use it.

<h2>Install</h2>
By NPM

```shell
$ npm install liferay-react-runtime-localization
```

Or by Yarn
```shell
$ yarn add liferay-react-runtime-localization
```

<h2>Using</h2>

### Step 1 : Changing localization path 
This library use your `Language.properties` files that by default placed in `features/localization` path of your React portlet, Since this portlet fetch `Language.properties` file as http request, it can not access to your `features` directory, So you should move it to `asset` directory.</br>
Move all of Language_*.properties files from:
```shell
your_react_portlet/features/localization/
```
To 
```shell
your_react_portlet/asset/localization/
```
Then you must change config `.npmbundlerrc` to specify new `Language.properties` files location

```javascript
{
	"create-jar": {
		"output-dir": "dist",
		"features": {
			"js-extender": true,
			"web-context": "/health-supervisor",
		      - "localization": "features/localization/Language", // **** must change to ⮟ ****
		      + "localization": "assets/localization/Language",   // ****   this line   ****
			"configuration": "features/configuration.json"
		}
	},
	"dump-report": true
}
```

### Step 2 : Add LanguageProvider
This library store your language keys in react context, and for accessing to this context every where of your portlet you must wrap all of your portlet by this Language Provider.
```javascript
import React from 'react';
import MainApp from './MainApp';
import { LanguageProvider } from "liferay-react-runtime-localization";

export default (props)=>{
     return (
            <LanguageProvider
                contextPath={props.contextPath}
                portalUrl={Liferay.ThemeDisplay.getPortalURL()}
                languageId={Liferay.ThemeDisplay.getLanguageId()}>
                    <MainApp {...props}/>
            </LanguageProvider>
    )
}
```

### Step 3 : Usage

Now you easily localizate your language key by `<Language/>` tag or `getLanguage` method:

```javascript
import React, {Fragment} from 'react';
import Language, {getLanguage} from "liferay-react-runtime-localization";

const MainApp = (props)=>{
     return (
            <Fragment>
              <Header title={getLanguage("pagetitles.product.list")}>
              <Container>
                  <h1><Language langKey="our_product_list"/></h1>
                  <ul>
                      {products.map((product, key)=>{
                          return ( 
                              <li key={key}>
                                  <Language langKey={product}/>
                              </li>
                          ) 
                      })}
                  </ul>
              </Container>
              <Footer/>
            </Fragment>
    )
}

export default MainApp;
```
This is a simple example for using.
> Tip : You can only use it in all of child component that wrapped by LanguageProvider