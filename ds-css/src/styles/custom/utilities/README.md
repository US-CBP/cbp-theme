# Introduction

This is the global SASS that can be referenced throughout the CBP Design System.

# Methods

Currently we are using a combination of Bulma's CSS ( https://github.com/jgthms/bulma/tree/master/sass ) and our own custom styles.  

So within some of the files in this directory ( initital-variables & derived-variables ) there are updates made to overwrite Bulma's SASS, as well as new custom code to meet our requirements.

# Directory Files

_all.scss   =   @imports other files in same directory to allow single reference point.

derived-variables.scss = contains variables that get their values from other variables
.
initial-variables.scss = contains initial value settings for general global variables.

mixins.scss  = to make sets of properties reusable by just using a single point of reference for them anywhere, which helps with reducing total code as well.

functions.scss  = allow us to define complex operations that can we can re-use throughout our stylesheets.









