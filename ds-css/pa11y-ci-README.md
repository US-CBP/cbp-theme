# Accessibility Testing Process

## Introduction

We are using "pa11y-ci" & "pa11y-ci-reporter-html" tools together within our overall accessibility testing process, to provide an automated option that can scale as needed and is compatible with Travis CI to allow running tests before code goes live.

These tools were not designed to be a complete replacement for regular accessibility testing, however they act as a very good compliment to our existing workflow.

## Usage

There are a few different scripts running these automated tools, the first of which should not need to be ran manually.

So, this script ` "pa11y-ci": "./node_modules/.bin/pa11y-ci" ` runs the testing script directly from within the pa11y-ci module.

The next two are for regular usage, both are also included within the overall build script.

` "pa11y-test": "pa11y-ci --json > pa11y-ci-results.json" `
This runs the accessibility test and writes any finding in .json format to file named "pa11y-ci-results.json" within the framework's root directory.

` "pa11y-report": "pa11y-ci-reporter-html && open index.html" `
This pull any findings from the .json results and formats individual .html file for each page tested, along with creating a findings "dashboard" index page.  Note: at the end of running ` npm run build `, the finding dashboard will open locally.

In addition to all of the above, we also have a setting that create a screen shot of our guide's index page before any css is applied.
Note: We can do this for every page we test, or none at all if we decided.

## pa11y-ci Testing Customizations

Currently we are just using the default testing rules provided by the pa11y-ci tool.

## Overall Accessibility Testing Process

These tools are just one part of our overall approach to providing a full accessibility testing process that begins as soon as the developer starts writing code to before anything is published for live consumption.