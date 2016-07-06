CBP Common Framework UI Theme
==========
This project is based on [Bootstrap 3](http://getbootstrap.com) and [Google's Material Design Lite] (https://github.com/google/material-design-lite)  open source projects that allows us to easily create and maintain.  It is based on SASS.  


## Using CBP Common Framework UI Theme in your web application

Run the following command:

	npm install git+https://github.com/US-CBP/cbp-theme

### What you get

The CBP Common Framework UI Theme artifacts should be in the
`node_modules/cf-theme/dist` directory.

Follow your normal build/development process as you have defined it. Here's what is available:

* `cf-theme/fonts` - Font Awesome and Roboto fonts
* `cf-theme/js/` - jquery, jquery.inputmask, bootstrap, and custom js from cf-ui-theme
* `cf-theme/styles` - The theme. cf-ui-theme.css

### Order of Javascript Dependencies
```
  <!-- optional dependencies from cf-ui-theme repo -->
  <script src="./js/jquery.min.js"></script>
  <script src="./js/jquery.inputmask.bundle.min.js"></script>
  <script src="./js/bootstrap.min.js"></script>

  <!-- js for cf-theme should be loaded after all thirdparty js files -->
  <script src="./js/cf-theme.js"></script>

```
### Order of Javascript Dependencies

```
	<!-- third party css if any -->

	<!-- cf-theme -->
    <link media="screen" href="./css/cf-theme.min.css" rel="stylesheet" />
```
----

## For Developers

We use Gulp for our build process but here are the common npm commands:

	npm install
	npm run build - calls gulp
	npm run dev - runs gulp serve
	npm run a11y - runs pa11y accesibility on the kitchen sink (assumes gulp serve
		 has been called) pa11y
  npm run fonts - generates fonts from Google's Roboto font family

### Using the Kitchen Sink

A demo app is located under app/kitchensink with all the components available so
that one can experiment and test changes. Run 'npm run dev', which builds and
uses gulp serve.  The demo app runs localhost:9000

### Contributing

We welcome contributions, please see our [Contribution Policy](https://github.com/US-CBP/open-source-policy/blob/master/CONTRIBUTING.md)

### License
Please refer to [CBP Open Source License](https://github.com/US-CBP/open-source-policy/blob/master/LICENSE.md)
