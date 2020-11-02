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

  number2 = parseFloat(number2);
  number1 = parseFloat(number1);
  
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
  console.log(Handlebars);
  //console.log(number1 + " " + sign + " " + number2 + " = " + result);
  res.render('index', { title: 'Express',first_number:number1, second_number:number2, result:result, sign:sign});
});

function checkNumber(str){
  let num = parseFloat(str);
  let str1 = num.toString();
  if(str === str1){
      return true;
  }
  return false;
}

module.exports = router;
