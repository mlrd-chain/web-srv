const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', {
    lang: req.language,
    title: req.t('srv-main:proName'),
    description: 'Загрузка',
    noscript: req.t('srv-main:noscript'),
  });
});

module.exports = router;