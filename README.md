Customs and Border Protection (CBP) Theme
==========

[![Build Status](https://travis-ci.org/US-CBP/cbp-theme.svg?branch=master)](https://travis-ci.org/US-CBP/cbp-theme)
[![npm version](https://badge.fury.io/js/cbp-theme.svg)](https://badge.fury.io/js/cbp-theme)
[![dependencies Status](https://david-dm.org/us-cbp/cbp-theme/status.svg)](https://david-dm.org/us-cbp/cbp-theme)
[![devDependencies Status](https://david-dm.org/us-cbp/cbp-theme/dev-status.svg)](https://david-dm.org/us-cbp/cbp-theme?type=dev)

### This project is in Beta

This is the common UI theme for CBP. It is used for internal and external web applications. We encourage the reuse of the theme and welcome contributions.  The theme is a set of artifacts (CSS, Javascript, and fonts), and we provide a static html page to demonstrate all the components available called the [Kitchen Sink](https://us-cbp.github.io/cbp-theme).  We also provide a [Style Guide](https://us-cbp.github.io/cbp-style-guide) to give guidance on how to use each component or pattern.

This project is based on [Bootstrap 3](http://getbootstrap.com) and [Google's Material Design Lite] (https://github.com/google/material-design-lite) open source projects that allows us to easily create and maintain.  It is based on SASS.
___

[![Kitchen Sink Screenshot](https://us-cbp.github.io/cbp-theme/images/sample_screen_shot.png)](https://us-cbp.github.io/cbp-theme/images/sample_screen_shot.png)

___

### Quickstart
* Install using NPM - npm install cbp-theme

### Install using Webjars

* Webjars: [Maven Repository](https://mvnrepository.com/artifact/org.webjars.npm/cbp-theme) and follow import instructions per build tool.

For Maven:
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

### Using CBP Theme with Webjars

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
### What you get

The CBP Theme artifacts are in the
`node_modules/cbp-theme/dist` directory.
The dist directory contains:

* `fonts` - Font Awesome and Roboto fonts
* `js` - jquery, jquery.inputmask, bootstrap, and custom js from cbp-theme
* `styles` - The theme. cbp-theme.css

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
├── jquery.js
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

### Order of Javascript Dependencies
```
   <!-- optional dependencies from cf-ui-theme repo -->
    <script src="./dist/jquery.js"></script>
    <script src="./dist/inputmask.js"></script>

    <!-- application specific third party js files here -->
    <script src="./thirdparty/js/jquery-ui.min.js"></script>
    <script src="./thirdparty/js/alerts.js"></script>
    <script src="./thirdparty/js/select2.min.js"></script>

    <!-- js for cbp-theme should be loaded after all thirdparty js files -->
    <script src="./dist/cbp-theme.js"></script>

```
### Order of CSS Dependencies
```
	<!-- third party css if any -->
  <link media="screen" href="./css/datepicker.css" rel="stylesheet" />
  <link media="screen" href="./css/select2.css" rel="stylesheet" />

	<!-- cbp-theme -->
  <link media="screen" href="./css/cbp-theme.css" rel="stylesheet" />

```
----

## Building CBP Theme

### Initial Machine Setup
1. **Install [Node 6.0.0 or greater](https://nodejs.org)** - For running multiple versions of Node [nvm](https://github.com/creationix/nvm).
2. **Install [Git](https://git-scm.com/downloads)**.
3. git clone

### NPM Commands

We use Webpack for our build process wrapped by npm commands:

* npm install
* npm run build - builds the dependencies via Webpack
* npm run dev - builds via Webpack
* npm run server - builds and serves it up via Webpack
* npm run a11y - runs pa11y accesibility on the kitchen sink (assumes npm run serve has been called) pa11y
* npm run fonts - generates fonts from Google's Roboto font family (NOTE - only need to run if adding newer font styles)

### Using the Kitchen Sink

A demo app is located under app/kitchensink with all the components available so
that one can experiment and test changes. Run 'npm run dev', which builds and
uses gulp serve.  The demo app runs localhost:9000

### Publishing
We use [SemVer](http://semver.org/) system of versioning (MAJOR MINOR PATCH)

* Run npm run version patch (or minor, major)
* Run npm publish to publish the current version to NPM's public registry
* Self publish the webjar by going to [WebJars](http://www.webjars.org/npm) and adding a new webjar using the name cbp-theme. Then select the appropriate version.

### Contributing

We welcome contributions, please see our [Contribution Policy](https://github.com/US-CBP/open-source-policy/blob/master/CONTRIBUTING.md)

### License
Please refer to [CBP Open Source License](https://github.com/US-CBP/open-source-policy/blob/master/LICENSE.md)
