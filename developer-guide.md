# Building CBP Theme

CBP Theme is an npm project built and bundled using [webpack](https://webpack.github.io/).  

## Initial Machine Setup
1. **Install [Node 6.0.0 or greater](https://nodejs.org)** 
    - For running multiple versions of Node [nvm](https://github.com/creationix/nvm) is highly recommended.
    - Note: npm comes bundled with versions of Node.js v0.6.3+ 
2. **Install [Git](https://git-scm.com/downloads)**.
3. Verify that you have node, git, and npm installed and accessible from your path.  
    - `git --version`
    - `node --version`
    - `npm --version`

If you do not see the version number after running each of the above commands, you may need to reinstall. 
 
## Building and running the project

After verifying git, node and npm installations, following in the directory where you cloned the repository: 

1. clone the repository by running
    - `git clone https://github.com/US-CBP/cbp-theme.git`
2. navigate into the `cbp-theme' directory from the repository you just cloned.  From this repostory run: 
    - `npm install`
    - `npm build`

Boom! You've just built the latest cbp-theme from source! 

As you make changes and to code, re run the npm build script and visit the demo kitchen sink application to see your changes.

See below for more info on developing: 

## NPM Commands

We use Webpack for our build process wrapped by npm commands:

* npm install - downloads and resolves depedencies
* npm run build - builds the dependencies via Webpack
* npm run dev - builds via Webpack
* npm run server - builds and serves it up via Webpack
* npm run a11y - runs pa11y accesibility on the kitchen sink (assumes npm run serve has been called) pa11y
* npm run fonts - generates fonts from Google's Roboto font family (NOTE - only need to run if adding newer font styles)

## The Kitchen Sink

A demo app is located under app/kitchensink with all the components available so
that one can experiment and test changes. Run 'npm run dev', which builds and
uses gulp serve.  The demo app runs localhost:8888/webpack-dev-server

## Open bugs

Browse the [list](https://github.com/US-CBP/cbp-theme/issues) of open issues on github to get started with a bug fix.  

## Publishing
We use [SemVer](http://semver.org/) system of versioning (MAJOR MINOR PATCH)

* Run npm run version patch (or minor, major)
* Run npm publish to publish the current version to NPM's public registry
* Self publish the webjar by going to [WebJars](http://www.webjars.org/npm) and adding a new webjar using the name cbp-theme. Then select the appropriate version.
