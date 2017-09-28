var page = require('webpage').create();
page.open('http://0.0.0.0:8888', function () {
    page.render('new.png');
    phantom.exit();
});
