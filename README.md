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
  - `scss/` for those who want to import scss files 
* `fonts`
  - Font Awesome and Roboto fonts
  
```
dist/
├── scss
│   ├── vendor
│   │   ├── _selectize_mdl_theme.scss
│   │   ├── _select2_mdl_theme.scss
│   │   ├── _roboto.scss
│   │   ├── _nouislider.scss
│   │   ├── _mdl-selectfield.scss
│   │   ├── _material_images.scss
│   │   ├── _material_custom.scss
│   │   ├── _material_cards.scss
│   │   ├── _material.scss
│   │   ├── _fontawesome.scss
│   │   ├── _datepicker.scss
│   │   └── _bootstrap.scss
│   ├── main.scss
│   └── custom
│       ├── _variables.scss
│       ├── _utilities.scss
│       ├── _type.scss
│       ├── _timelines.scss
│       ├── _tags.scss
│       ├── _tabs.scss
│       ├── _tables.scss
│       ├── _steps.scss
│       ├── _sliders.scss
│       ├── _popup.scss
│       ├── _navbar.scss
│       ├── _modals.scss
│       ├── _mixins.scss
│       ├── _load-spinners.scss
│       ├── _labels.scss
│       ├── _hacks.scss
│       ├── _globals.scss
│       ├── _forms.scss
│       ├── _filters.scss
│       ├── _containers.scss
│       ├── _colors.scss
│       ├── _buttons.scss
│       ├── _badges.scss
│       ├── _alerts.scss
│       └── _accordions.scss
├── inputmask.min.js
├── inputmask.js
├── fontawesome-webfont.woff2
├── fontawesome-webfont.woff
├── fontawesome-webfont.ttf
├── fontawesome-webfont.svg
├── fontawesome-webfont.eot
├── cbp-theme.min.js
├── cbp-theme.js
├── cbp-theme.css
├── Roboto-RegularItalic.woff2
├── Roboto-RegularItalic.woff
├── Roboto-RegularItalic.ttf
├── Roboto-RegularItalic.svg
├── Roboto-RegularItalic.eot
├── Roboto-Regular.woff2
├── Roboto-Regular.woff
├── Roboto-Regular.ttf
├── Roboto-Regular.svg
├── Roboto-Regular.eot
├── Roboto-MediumItalic.woff2
├── Roboto-MediumItalic.woff
├── Roboto-MediumItalic.ttf
├── Roboto-MediumItalic.svg
├── Roboto-MediumItalic.eot
├── Roboto-Medium.woff2
├── Roboto-Medium.woff
├── Roboto-Medium.ttf
├── Roboto-Medium.svg
├── Roboto-Medium.eot
├── Roboto-LightItalic.woff2
├── Roboto-LightItalic.woff
├── Roboto-LightItalic.ttf
├── Roboto-LightItalic.svg
├── Roboto-LightItalic.eot
├── Roboto-Light.woff2
├── Roboto-Light.woff
├── Roboto-Light.ttf
├── Roboto-Light.svg
├── Roboto-Light.eot
├── Roboto-BoldItalic.woff2
├── Roboto-BoldItalic.woff
├── Roboto-BoldItalic.ttf
├── Roboto-BoldItalic.svg
├── Roboto-BoldItalic.eot
├── Roboto-Bold.woff2
├── Roboto-Bold.woff
├── Roboto-Bold.ttf
├── Roboto-Bold.svg
└── Roboto-Bold.eot
```


# Importing Style Sheets

For more advanced users checkout wiki [Guide to Importing Style Sheets.](https://github.com/US-CBP/cbp-theme/wiki/Guide-to-Importing-Style-Sheets)



## Contributing
We welcome contributions, please see our [Contribution Policy](https://github.com/US-CBP/open-source-policy/blob/master/CONTRIBUTING.md)

To get started developing, see developer readme [here](./developer-guide.md).

## License
Please refer to [CBP Open Source License](https://github.com/US-CBP/open-source-policy/blob/master/LICENSE.md)
