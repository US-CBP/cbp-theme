# Alternative installations
If you are not using npm to manage your dependencies (you should), you can try these methods of getting a copy of the cbp-theme:

### Install using Webjars

* Webjars: 
  - [Maven Repository](https://mvnrepository.com/artifact/org.webjars.npm/cbp-theme) and follow import instructions per build tool.

For Maven:
```
<!-- https://mvnrepository.com/artifact/org.webjars.npm/cbp-theme -->
<dependency>
    <groupId>org.webjars.npm</groupId>
    <artifactId>cbp-theme</artifactId>
    <version>DESIRED-VERSION</version>
</dependency>
```
For Gradle:
```
compile group: 'org.webjars.npm', name: 'cbp-theme', version: 'DESIRED-VERSION'
```

### Using CBP Theme with Webjars

For JS:
```
  <!--required: jQuery 2.x or above -->
  <script src="webjars/cbp-theme/DESIRED-VERSION/dist/js/jquery.min.js"></script>

  <!-- optional additional dependencies/plugins -->
  <script src="webjars/cbp-theme/DESIRED-VERSION/dist/js/jquery.inputmask.bundle.min.js"></script>

  <!-- js for cbp-theme should be loaded after all thirdparty js files -->
  <script src="webjars/cbp-theme/DESIRED-VERSION/dist/js/cbp-theme.js"></script>

```
For CSS
```
	<!-- third party css if any -->

	<!-- cbp-theme -->
    <link media="screen" href="webjars/cbp-theme/DESIRED-VERSION/dist/styles/cbp-theme.min.css" rel="stylesheet" />
```


### Order of CSS Dependencies
```
	<!-- third party css if any -->
  <link media="screen" href="./css/datepicker.css" rel="stylesheet" />
  <link media="screen" href="./css/select2.css" rel="stylesheet" />

	<!-- cbp-theme -->
  <link media="screen" href="./css/cbp-theme.css" rel="stylesheet" />

```
