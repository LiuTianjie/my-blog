const express = require('express');
const router = express.Router();
const api = require('./api');

router.get('/getValue', (req, res, next) => {
  api.getValue(req, res, next);
});
router.get('/disPlay', (req, res, next) => {
  api.disPlay(req, res, next);
});
router.post('/setValue', (req, res, next) => {
  api.setValue(req, res, next);
});

router.post('/update', (req, res, next) => {
  api.update(req, res, next);
});
router.post('/spend', (req, res, next) => {
  api.spend(req, res, next);
});
router.post('/charge', (req, res, next) => {
  api.charge(req, res, next);
});
router.get('/rdisplay', (req, res, next) => {
  api.rdisplay(req, res, next);
});
router.get('/checknum', (req, res, next) => {
  api.checknum(req, res, next);
});
module.exports = router;