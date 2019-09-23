var page = require('webpage').create();
page.open('http://127.0.0.1:8888', function () {
    page.render('new.png');
    phantom.exit();
});
