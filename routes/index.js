var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const mapleRank = 'https://maplestory.nexon.com/N23Ranking/World/Total';
  fetch(mapleRank, { method: 'GET' }).then((result) => {
    console.log(result.headers.get('Date'));
  });

  res.render('index', { title: 'Express' });
});

router.get('/getTime', async (req, res) => {
  const mapleRank = 'https://maplestory.nexon.com/N23Ranking/World/Total';
  let date = '';

  await fetch(mapleRank, { method: 'GET' }).then((result) => {
    date = result.headers.get('Date');
  });

  if (date !== '') {
    res.status(200).send(date);
  }
  else {
    res.status(500);
  }
})

module.exports = router;
