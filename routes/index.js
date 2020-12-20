var express = require('express');
var router = express.Router();
var dateFormat = require('dateformat');

const messages = [
  {
    name:'Amanda',
    message:'Hi there!',
    added: dateFormat(new Date(), "yyyy/mm/dd hh:mm")
  }
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    list: JSON.stringify(messages)
  });
});
router.get('/new', function(req, res, next){
  res.render('new', {title: 'New Message'})
});
router.post('/', function(req, res, next){
  messages.push({
    name: req.body.name,
    message: req.body.message,
    added: dateFormat(new Date(), "yyyy/mm/dd hh:mm")
  })
  res.redirect('/')
})
module.exports = router;
