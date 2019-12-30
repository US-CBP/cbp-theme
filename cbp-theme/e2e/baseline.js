var page = require('webpage').create();
page.open('https://us-cbp.github.io/cbp-theme/', function () {
    page.render('baseline.png');
    phantom.exit();
});
