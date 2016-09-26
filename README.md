Customs and Border Protection (CBP) Theme
==========

[![Build Status](https://travis-ci.org/US-CBP/cbp-theme.svg?branch=master)](https://travis-ci.org/US-CBP/cbp-theme)
[![npm version](https://badge.fury.io/js/cbp-theme.svg)](https://badge.fury.io/js/cbp-theme)
[![dependencies Status](https://david-dm.org/us-cbp/cbp-theme/status.svg)](https://david-dm.org/us-cbp/cbp-theme)
[![devDependencies Status](https://david-dm.org/us-cbp/cbp-theme/dev-status.svg)](https://david-dm.org/us-cbp/cbp-theme?type=dev)

###This project is in Beta

This is the common UI theme for CBP. It is used for internal and external web applications. We encourage the reuse of the theme and welcome contributions.  The theme is a set of artifacts (CSS, Javascript, and fonts), and we provide a static html page to demonstrate all the components available called the [Kitchen Sink](https://us-cbp.github.io/cbp-theme).  We also provide a [Style Guide](https://us-cbp.github.io/cbp-style-guide) to give guidance on how to use each component or pattern.

This project is based on [Bootstrap 3](http://getbootstrap.com) and [Google's Material Design Lite] (https://github.com/google/material-design-lite) open source projects that allows us to easily create and maintain.  It is based on SASS. 
___

[![Kitchen Sink Screenshot](https://us-cbp.github.io/cbp-theme/images/sample_screen_shot.png)](https://us-cbp.github.io/cbp-theme/images/sample_screen_shot.png)

___

##Initial Machine Setup
1. **Install [Node 6.0.0 or greater](https://nodejs.org)** - For running multiple versions of Node [nvm](https://github.com/creationix/nvm).
2. **Install [Git](https://git-scm.com/downloads)**.
3. Mac users can move on to step 4.  Windows users see Windows Setup section.
4. npm install cbp-theme 
5. OPTIONAL for Webjars: [Maven Repository](https://mvnrepository.com/artifact/org.webjars.npm/cbp-theme) and follow import instructions per build tool. 

For example for Maven:
```
<!-- https://mvnrepository.com/artifact/org.webjars.npm/cbp-theme -->
<dependency>
    <groupId>org.webjars.npm</groupId>
    <artifactId>cbp-theme</artifactId>
    <version>0.3.2</version>
</dependency>

```

For Gradle:

```
compile group: 'org.webjars.npm', name: 'cbp-theme', version: '0.3.2'

```
For JS:
```
  <!-- optional dependencies from cf-ui-theme repo -->
  <script src="webjars/cbp-theme/0.3.2/dist/js/jquery.min.js"></script>
  <script src="webjars/cbp-theme/0.3.2/dist/js/jquery.inputmask.bundle.min.js"></script>
  <script src="webjars/cbp-theme/0.3.2/dist/js/bootstrap.min.js"></script>

  <!-- js for cbp-theme should be loaded after all thirdparty js files -->
  <script src="webjars/cbp-theme/0.3.2/dist/js/cbp-theme.js"></script>

```
For CSS 
```
	<!-- third party css if any -->

	<!-- cbp-theme -->
    <link media="screen" href="webjars/cbp-theme/0.3.2/dist/styles/cbp-theme.min.css" rel="stylesheet" />
```
**Windows Setup:**

* **Install [Python 2.7](https://www.python.org/downloads/)**. Some node modules may rely on node-gyp, which requires Python on Windows.
* **Install C++ Compiler**. Browser-sync requires a C++ compiler on Windows. [Visual Studio Express](https://www.visualstudio.com/en-US/products/visual-studio-express-vs) comes bundled with a free C++ compiler. Or, if you already have Visual Studio installed: Open Visual Studio and go to File -> New -> Project -> Visual C++ -> Install Visual C++ Tools for Windows Desktop. The C++ compiler is used to compile browser-sync (and perhaps other Node modules).


### What you get

The CBP Theme artifacts are in the
`node_modules/cbp-theme/dist` directory.

Follow your normal build/development process as you have defined it. Here's what is available:

* `fonts` - Font Awesome and Roboto fonts
* `js` - jquery, jquery.inputmask, bootstrap, and custom js from cbp-theme
* `styles` - The theme. cf-ui-theme.css

### Order of Javascript Dependencies
```
  <!-- optional dependencies from cf-ui-theme repo -->
  <script src="./js/jquery.min.js"></script>
  <script src="./js/jquery.inputmask.bundle.min.js"></script>
  <script src="./js/bootstrap.min.js"></script>

  <!-- js for cbp-theme should be loaded after all thirdparty js files -->
  <script src="./js/cbp-theme.js"></script>

```
### Order of CSS Dependencies

```
	<!-- third party css if any -->

	<!-- cbp-theme -->
    <link media="screen" href="./css/cbp-theme.min.css" rel="stylesheet" />
```
----

## Developers 
### NPM Commands

We use Gulp for our build process but here are the common npm commands:

* npm install
* npm run build - calls gulp
* npm run dev - runs gulp serve
* npm run a11y - runs pa11y accesibility on the kitchen sink (assumes gulp serve
		 has been called) pa11y
* npm run fonts - generates fonts from Google's Roboto font family

### Using the Kitchen Sink

A demo app is located under app/kitchensink with all the components available so
that one can experiment and test changes. Run 'npm run dev', which builds and
uses gulp serve.  The demo app runs localhost:9000

### Publishing
We use [SemVer](http://semver.org/) system of versioning (MAJOR MINOR PATCH)

* Run npm run version patch (or minor, major)
* Run npm publish to publish the current version to NPM's public registry
* Self publish the webjar by going to [WebJars](http://www.webjars.org/npm) and adding a new webjar using the name cbp-theme. Then select the appropriate version.

#### Contributing

We welcome contributions, please see our [Contribution Policy](https://github.com/US-CBP/open-source-policy/blob/master/CONTRIBUTING.md)

#### License
Please refer to [CBP Open Source License](https://github.com/US-CBP/open-source-policy/blob/master/LICENSE.md)
