var express = require('express');
var router = express.Router();



/* GET connect . */
router.get('/:prov/:cli/:apiUid/:apiUcli/:tk', function(req, res, next) {

  const obj = {
      secret: req.params.tk,
      providerId: req.params.prov,
      cliendId: req.params.cli,
      apiUser: {
        user_id: req.params.apiUid,
        client_id: req.params.apiUcli
      }
  }
  res.render('connect', { title: 'CloudNet Login',def: obj });
});

// router.post('/', function(req, res, next) {

//   let apiUrl = 'http://186.136.87.160:8080/api/client/validate/1';

//   let apiUser = {
//       user_id: 1,
//       client_id: 1
//   };
  
//   // /* ---------------------------- pegando a la api ---------------------------- */
  
//   async function postData(url = '', data = {}) {
//       // Opciones por defecto estan marcadas con un *
//       const response = await fetch(url, {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         mode: 'cors', // no-cors, *cors, same-origin
      
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: new Headers({
//           'Content-Type': 'application/json',
//           'secret': '1PsFfVLQ2fivGThSXhPoqw=='
//           // 'Content-Type': 'application/x-www-form-urlencoded',
//         }),
//         body: JSON.stringify(data) // body data type must match "Content-Type" header
//       });
//       return response.json(); // parses JSON response into native JavaScript objects
//     }
    
//     postData(apiUrl, apiUser)
//     .then(data => {
//       console.log(data); // JSON data parsed by `data.json()` call
//     });

    
// });


module.exports = router;