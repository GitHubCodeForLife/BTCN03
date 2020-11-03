function checkNumberAndSign(){
    //B1: Read input --> number 1 sign number2
    let number1, number2;   
    number1 = document.getElementById('id1').value;
    number2 = document.getElementById('id2').value;
    let sign = getSign();
    //B2: check valiable
    if(number1==''&&number2==''){
        signAnnoucement('Chưa điền đủ 2 số hợp lệ để thực hiện phép tính');
        event.preventDefault();
        return;
    }
    if(number1!=''&&number2==''){
        if(checkNumber(number1)==false){
            signAnnoucement('Giá trị nhập không hợp lệ, vui lòng nhập số thực');
            event.preventDefault();
            return;
        }else{
            signAnnoucement('Chưa điền đủ 2 số hợp lệ để thực hiện phép tính');
            event.preventDefault();

            return;
        }
    }
    if(number2!=''&&number1==''){
        if(checkNumber(number2)==false){
            signAnnoucement('Giá trị nhập không hợp lệ, vui lòng nhập số thực');
            event.preventDefault();

            return;
        }else{
            signAnnoucement('Chưa điền đủ 2 số hợp lệ để thực hiện phép tính');
            event.preventDefault();

            return;
        }
    }
    if(number1!=''&number2!=''){
        if(checkNumber(number1)==false||checkNumber(number2)==false){
            signAnnoucement('Giá trị nhập không hợp lệ, vui lòng nhập số thực');
            event.preventDefault();

            return;
        }
        //When you don't input sign
        if(sign==-1){
            signAnnoucement('Bạn Chưa nhập phép tính');
            event.preventDefault();

            return;
        }
    }

}

function signAnnoucement(str){
    window.alert(str);
    let annou = document.getElementById('annou');

    let warning = document.getElementById('warning');
    let infor = warning.innerHTML;

    if(infor!=''){
        return;
    }
    annou.innerHTML = str;
}

function getSign(){
    let sign;
    for(i =0;i<4;i++){
        sign = document.getElementsByName('sign')[i].checked;
        if(sign ==true)
        return i;
    }
    return -1;
}

function checkNumber(str){
   let num = parseFloat(str);
   let str1 = num.toString();
   if(str === str1){
       return true;
   }
   return false;
}

function checkValid(num){
    let number;
    if(num==1){
         number = document.getElementById('id1').value;
        
    }else{
         number = document.getElementById('id2').value;
    }
    if(checkNumber(number)==false &&number !='')
    {
        annoucement(num);
        let annou = document.getElementById('annou');
        annou.innerHTML= "";
    }else{
        hiddenAnnoucement(num);
    }
}

function annoucement(index){
    let annou = document.getElementById('annoucement');
    annou.setAttribute('class','ml-3');
    annou.setAttribute('class','text-danger');
    
    //set text
    let warning = document.getElementById('warning');
    let infor = warning.innerHTML;

    //delete inside annouce
    if(index==1){
        let str = ' Số Thứ Nhất';
        if(infor.includes(str)==false){
            warning.innerHTML=str + infor;
        }
    }else{
        let str = ' Số Thứ Hai';
        if(infor.includes(str)==false){
            warning.innerHTML+=str;
            
        }    
    }

}
function hiddenAnnoucement(number){
    let warning = document.getElementById('warning');
    let infor = warning.innerHTML;
   
    if(number==1){
        let str = ' Số Thứ Nhất';
        if(infor.includes(str)){
            infor= infor.replaceAll(str,'');
        }
    }else{
        let str = ' Số Thứ Hai';
        if(infor.includes(str)){
            infor= infor.replaceAll(str,'');
        }
    }
    if(infor==''){
        let annou = document.getElementById('annoucement');
        annou.setAttribute('class','invisible');
    }
    warning.innerHTML = infor;
}


  