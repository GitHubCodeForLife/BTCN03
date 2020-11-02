var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*Post numbers and sign*/
router.post('/',(req, res, next)=>{
  //Nhan du lieu
  let number1 = req.body.number1;
  let number2 = req.body.number2;
  let sign = req.body.sign;
  let result;

  number1 = parseFloat(number1);
  number2 = parseFloat(number2);

  switch(sign){
    case "cong":
        result = number1 + number2;break;
    case "tru":
        result = number1 - number2;break;
    case "nhan":
        result = number1 * number2;break;
    case "chia":
        result = number1 / number2;break;
    default: 
        result = "";break;

  }
  console.log(number1 + " " + sign + " " + number2 + " = " + result);
  res.render('index', { title: 'Express',first_number:number1, second_number:number2, result:result });
});


module.exports = router;
