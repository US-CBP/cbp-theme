Customs and Border Protection (CBP) Theme
==========

[![Build Status](https://travis-ci.org/US-CBP/cbp-theme.svg?branch=master)](https://travis-ci.org/US-CBP/cbp-theme)
[![npm version](https://badge.fury.io/js/cbp-theme.svg)](https://badge.fury.io/js/cbp-theme)
[![dependencies Status](https://david-dm.org/us-cbp/cbp-theme/status.svg)](https://david-dm.org/us-cbp/cbp-theme)
[![devDependencies Status](https://david-dm.org/us-cbp/cbp-theme/dev-status.svg)](https://david-dm.org/us-cbp/cbp-theme?type=dev)

This is the common UI theme for CBP. It is used for internal and external web applications. We encourage the reuse of the theme and welcome contributions.  The theme is a set of artifacts (CSS, Javascript, and fonts), and we provide a static html page to demonstrate all the components available called the [Kitchen Sink](https://us-cbp.github.io/cbp-theme).  We also provide a [Style Guide](https://us-cbp.github.io/cbp-style-guide) to give guidance on how to use each component or pattern.

This project is based on [Bootstrap 3](http://getbootstrap.com) and [Google's Material Design Lite] (https://github.com/google/material-design-lite) open source projects that allows us to easily create and maintain.  It is based on SASS.
___

[![Kitchen Sink Screenshot](https://us-cbp.github.io/cbp-theme/images/sample_screen_shot.png)](https://us-cbp.github.io/cbp-theme/images/sample_screen_shot.png)

___

# Quickstart
## Installation
The recommended way to get the latest CBP theme is by saving as a dependency via [npm](https://docs.npmjs.com/getting-started/what-is-npm).  

From your npm project, simply run:  
* `npm install cbp-theme --save`

Or if you are using the [yarn](https://yarnpkg.com/) package manager: 
* `yarn add cbp-theme`

Note: It is recommended that you use npm to manage your frontend dependencies.  
If you are not using npm, see [alternative installations](./alternative-installations.md) for other ways to get cbp-theme. 


## Including in your html

Using the cbp theme is as easy as including cbp-theme.css and cbp-theme.js in your markup.

Note: cbp-theme does require `jQuery 2.x` or higher to be included before adding cbp-theme.js.    

### Order of Javascript Dependencies
```
  <!-- required CBP dependency: jQuery 2.x+ -->
  <script src="./path/to/thirdparty/js/jquery-2.2.4.min.js"></script>

  <!-- optional cbp-theme plugins -->
  <script src="./path/to/dist/inputmask.js"></script>

  <!-- application specific third party js files here -->
  <script src="./path/to/thirdparty/js/jquery-ui.min.js"></script>
  <script src="./path/to/thirdparty/js/alerts.js"></script>
  <script src="./path/to/thirdparty/js/select2.min.js"></script>

  <!-- js for cbp-theme should be loaded after all thirdparty js files -->
  <script src="./path/to/cbp-theme.js"></script>
```

## What you get

The CBP Theme artifacts are in the
`node_modules/cbp-theme/dist` directory.
The dist directory contains:

* `js` 
  - cbp-theme.js:  
  - inputmask.js:   
* `styles` 
  - cbp-theme.css
* `fonts` 
  - Font Awesome and Roboto fonts

```
dist/
├── cbp-theme.css
├── cbp-theme.js
├── cbp-theme.min.js
├── fontawesome-webfont.eot
├── fontawesome-webfont.svg
├── fontawesome-webfont.ttf
├── fontawesome-webfont.woff
├── fontawesome-webfont.woff2
├── inputmask.js
├── inputmask.min.js
├── roboto-148fe3b2ffcb825efff40a8378f22125ccf88cb0.svg
├── roboto-15d4ddc447af43a160ea7249c8a3b8db63b90c43.ttf
├── roboto-3e4b853a8ecf83541f6a7ba875070ebce7a19642.woff
├── roboto-67688000f61879d468fa6516ddb21c7cace1b212.woff
├── roboto-8da249381e5effaaadc8809385179b5aa491a4ae.woff
├── roboto-8fca32cc805ea3e480e6458ae7c3640d41f6c96b.ttf
├── roboto-922ef2c34858a412764dfd5efadf3e387c8d7402.woff
├── roboto-9e2b4436ba4c5c9b33f4fca42b43d99a703467f0.woff
├── roboto-b376a31e25af67e36a420aa2348874c5a8b5c9a5.ttf
├── roboto-be6836de04ee4e0012ef88496a05b2a9e6dbf293.ttf
├── roboto-c40c4ea0dc2fa9dcde63bcf3fd9b95cccbd5cc62.ttf
├── roboto-c8755b34719e3012d4ae9455615b1549fec1ca3f.eot
├── roboto-cd565969dd0cf49f8408deff0aed2b9d6008a06d.woff
├── roboto-d561d8824866e60a2a2d327c6b6219939b259b57.woff
├── roboto-d9a17a54541b34b38ef67cf919f1ac63b44a7454.ttf
├── roboto-e1262eb60d828ff664011e8bffc586fb3fd2d080.ttf
├── roboto-e3f5a4bdfdf56584b05705dfad3b14c8a30f393c.ttf
├── roboto-fe5ca35863958aa9f3a879b7032979a3f0db3974.woff
```

----

## Contributing
We welcome contributions, please see our [Contribution Policy](https://github.com/US-CBP/open-source-policy/blob/master/CONTRIBUTING.md)

To get started developing, see developer readme [here](./developer-guide.md).

## License
Please refer to [CBP Open Source License](https://github.com/US-CBP/open-source-policy/blob/master/LICENSE.md)
