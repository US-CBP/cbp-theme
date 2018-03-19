/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
var files = ['./kitchensink', './dist']
module.exports = {
  'ui': {
    'port': 3001
  },
  'files': files,
  'watchEvents': [
    'change'
  ],
  'watch': true,
  'single': false,
  'watchOptions': {
    'ignoreInitial': true
  },
  'server': files,
  'port': 8888,
  'serveStatic': [],
  'logLevel': 'info',
  'logPrefix': 'Browsersync',
  'logFileChanges': true,
  'logSnippet': true,
  'open': false,
  'browser': 'default',
  'host': '0.0.0.0',
  'localOnly': false,
  'codeSync': true,
  'timestamps': true,
}
