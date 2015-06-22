var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
/* GET home page. */
router.get('/features', function(req, res) {
  res.render('features');
});
router.get('/enterprise', function(req, res) {
  res.render('enterprise');
});
router.get('/about', function(req, res) {
  res.render('about');
});
router.get('/contact', function(req, res) {
  res.render('contact');
});
router.get('/docs', function(req, res) {
  res.render('docs');
});
router.get('/docs/getting-started', function(req, res) {
  res.render('./docs/getting-started');
});
router.get('/docs/use-cases', function(req, res) {
  res.render('docs/use-cases');
});
router.get('/docs/dependencies', function(req, res) {
  res.render('docs/dependencies');
});
router.get('/docs/features-in-development', function(req, res) {
  res.render('docs/features-in-development');
});
router.get('/docs/file-hierarchy', function(req, res) {
  res.render('docs/file-hierarchy');
});
router.get('/docs/tests', function(req, res) {
  res.render('docs/tests');
});
router.get('/terms-and-conditions', function(req, res) {
  res.render('terms-and-conditions');
});

module.exports = router;