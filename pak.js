


//legal way of variable alphabet(a,b,c,d...) dollar($) sign and hiphen (_)
//var _variable = document.getElementById('value').value.target;
var two=document.querySelectorAll('.number');
var vriable=document.getElementById('data');

for(var i=0; i<two.length;i++){
    vriable.textContent="";
two[i].addEventListener('click', (e)=>{ 
         
    if(e.target.innerHTML== "="){   hy(vriable.innerHTML);}
    else if(e.target.innerHTML=="C"){vriable.textContent="";}
    else if(e.target.innerHTML=="Del"){ 
        var hyr =vriable.textContent.split('');
        var sty=0;
       // delete hyr[hyr.length-1];
        for(var h =0; h< hyr.length-1;h++){sty +=hyr[h]; }
        vriable.textContent=sty; }
    else{
    vriable.textContent +=e.target.innerHTML;}
    

})}


    const hy=(variable)=>{

let $variable = [];

//var hy=[variable];
//variable.split('');

var number=variable?.split(/\+|\-|\*|\//g);

var operator =variable?.replace(/[0-9]|/g,"").split('');



var din=operator?.indexOf('/');
console.log(number);
while(din != (-1)){
number.splice(din,2,parseFloat(number[din]) / parseFloat(number[din+1]));
console.log(number);
operator.splice(din,1);
din=operator.indexOf('/');
}


var mul=operator.indexOf('*');
while(mul != (-1)){
number.splice(mul,2,
    parseFloat(number[mul]) *
     parseFloat(number[mul+1]));
console.log(number);
operator.splice(mul,1);
mul=operator.indexOf('*');
}


var sub=operator.indexOf('-');
while(sub != (-1)){
number.splice(sub,2,parseFloat(number[sub]) - parseFloat(number[sub+1]));
console.log(number);
operator.splice(sub,1);
sub=operator.indexOf('-');
}


var add=operator.indexOf('+');
while(add != -1){
number.splice(add,2,
    parseFloat(number[add]) +
 parseFloat(number[add+1]));
console.log(number);
operator.splice(add,1);
add=operator.indexOf('+');
}
vriable.textContent=number[0];

    }






