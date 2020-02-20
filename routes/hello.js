var express = require('express');
var router = express.Router();

router.get('/',(req, res, next) => {
    var data = {
        title: 'Hello!',
        content: 'これは、サンプルのコンテンツです。<br>This is sample content.'
    };
    res.render('hello', data);
})

module.exports = router;