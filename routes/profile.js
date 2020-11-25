var express = require('express');
var router = express.Router();

const axios = require('axios');

/* GET profile. */
router.get('/', function (req, res, next) {

  // let apiUrl = 'http://186.136.87.160:8080/api/client/validate/9';

  // let apiUser = {
  //     user_id: 26,
  //     client_id: 14
  // };
  // const options = {
  //   headers:{
  //     'Content-Type': 'application/json',
  //     'Authorization': 'JWT fefege...'
  //   }
  // }

  // /* ---------------------------- pegando a la api ---------------------------- */

  // async function makePostRequest() {

  //     let res = await axios.post(apiUrl, apiUser,options)

  //     return res;

  // }

  // console.log(makePostRequest());

  /* ------------------------------------ . ----------------------------------- */

  res.render('profile', { title: 'CloudNet Profile' });
});

router.post('/', function (req, res, next) {

  // let apiUrl = 'http://186.136.87.160:8080/api/client/validate/1';

  // let apiUser = {
  //   user_id: 1,
  //   client_id: 1
  // };

  // const options = {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'secret': '1PsFfVLQ2fivGThSXhPoqw=='
  //   }
  // }

  // /* ---------------------------- pegando a la api ---------------------------- */

  // async function makePostRequest() {

  //   let res = await axios.post(apiUrl, apiUser, options)

  //   return res;

  // }

  // console.log(makePostRequest());

})


module.exports = router;
