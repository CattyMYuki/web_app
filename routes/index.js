var express = require('express');
var router = express.Router();
 
// デフォルトルーティング
router.get('/', function (request, response) {
    response.render('index', { title: 'Sample Node.js', message: 'Hello there!' });
});
//tab1
router.get('/login', function (request, response) {
    response.render('login', { title: 'Sign In / Up', message: 'Sign In / Up' });
}); 
module.exports = router;