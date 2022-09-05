
// num divide by 2& 10

function fu(){

var ne=document.getElementById("mynum").value;

if (ne%2==0&& ne%10==0){

    window.alert("you enter "+ne+ "yes" );

}
else{
    window.alert("you enter "+ne+ "no" );  
}

}

// <!-- print num && div 3 &4 -->
function fn1(){


   
    var x= document.getElementById("number").value;
    
    if(x%3==0 && x%4==0){
        window.alert("you enter number "+x+"\n yes");

    }
    else{
        window.alert("you enter number "+x+"\n NO");
    }
    
}
// postive or nagetive
function fn2() {
     var z= document.getElementById("number5").value;
 if(z>"0"){
    window.alert("positive ");
    
}
 else{
    window.alert("negative"); 
 }

}
// max number
function fn3(){
    var z= document.getElementById("number3").value;
    var f= document.getElementById("number4").value;
    if(z>f){
        window.alert("the max num is "+z);
    }
    else{
        window.alert("the max num is "+f);

    }
}
//  max &&min 3 num
function fn4(){
    var x= document.getElementById("number6").value;
    var z= document.getElementById("number7").value;
    var f= document.getElementById("number8").value; 
    if(x>z&&x>f){
        window.alert("the max num is "+x);
    }
    else if(z>x&&z>f){
        window.alert("the max num is "+z);
    }
    else{
        window.alert("the max num is "+f);  
    }
    if(x<z&&x<f){
        window.alert("the min num is "+x);
    }
    else if(z<x&&z<f){
        window.alert("the min num is "+z);
    }
    else{
        window.alert("the min num is "+f);  
    }
}
// odd or even
function fn5(){
    var x= document.getElementById("number6").value;
    if(x%2==0){
        window.alert("the num is even ");   
    }
    else{
        window.alert("the num is odd ");   
    }

}
// vowel or consonant 
function fn6(){
    var x= document.getElementById("number10").value;
    switch(x){
        case "a":
            window.alert("vowel  ");
            break;
            case "e":
                window.alert("vowel  ");
                break;
                case "o":
                    window.alert("vowel  ");
                    break;
                    case "i":
                        window.alert("vowel  ");
                        break;
                        default:
                            window.alert("consonant ");
    }
}
// print from 1 to x
//  function fn7(){
    
//      var x=document.getElementById("number11").value;
//      for(var i=1;i<=x;i++){
//         window.alert(i);

       
// }

// } 

 function fn7(){

    var x=document.getElementById("number11").value;
  var arry=[x];

   for( var i=0;i<=x;i++ ){
 arry[i]=i;
 

     }
     window.alert(arry);
}

// multiple 12
function fn8(){
    var x=document.getElementById("number12").value;
    for (var i=1;i<13;i++){
        var y;
        y=x*i;

        window.alert(y);  
    }
}
// even num between 1to x 
function fn9(){
    var x=document.getElementById("number13").value;
let near=[];
    for (var i=1;i<=x;i++){
        if(i%2==0)
        near[i]=i;
       
    }
    
    window.alert(near); 
}
// power
function fn10 (){
    var x=document.getElementById("number14").value;
    var y=document.getElementById("number15").value;
    window.alert(Math.pow(x,y));  
}
// <!-- total degree -->
function fn11(){
    var x=document.getElementById("number16").value;
    var y=document.getElementById("number17").value;
    var z=document.getElementById("number18").value;
    var f=document.getElementById("number19").value;  
    var g=document.getElementById("number20").value; 
   
    sum =Number(x)+Number(y)+Number(z)+Number(f)+Number(g);
   var avarage=sum/5;

    window.alert("the totalmarks="+sum+"\n the avarage "+avarage+"\nthe percentage "+ avarage+" %");  
}
// month
function fn12(){
    var x=document.getElementById("number21").value;
  
        // 1 3 5 7 8 10 12 31
        // 2 28
        // 4 6 9 11 30
        
  if(x==1||x==3||x==7||x==8||x==10||x==12){
      window.alert(31);
  }
else if (x==2){
    window.alert(28) ;
}
else{
    window.alert(30)   ;
}
}
// grade
function fn13(){
    var x=document.getElementById("number22").value;
    var y=document.getElementById("number23").value;
    var z=document.getElementById("number24").value;
    var f=document.getElementById("number25").value;  
    var g=document.getElementById("number26").value; 
    var av=0;
  
 av=(Number(x)+Number(y)+Number(z)+Number(f)+Number(g))/5;
    window.alert(av);
    if(av>=90)
    window.alert("grad A");
else  if(av>=80)
window.alert("grad B");
else  if(av>=70)
window.alert("grad c");
else  if(av>=60)
window.alert("gradd");
else  if(av>=40)
window.alert("grad e");

else  
window.alert("grad f");
}
// month with switch
function fn14(){
    var x=document.getElementById("number27").value;
    switch(x){
        case "1":
            window.alert(31);
         break;
         case "2":
            window.alert(28);
         break;
         case "3":
            window.alert(31);
         break;
        case" 4":
            window.alert(30);
         break;
         case "5" :
            window.alert(31);
         break;

         case "6" :
            window.alert(30);
         break;

         case "7":
            window.alert(31);
         break;

v
case "8":
    window.alert(31);
 break;

 case "9":
    window.alert(30);
 break;

 v
 case "10":
    window.alert(31);
 break;

v
case "11":
    window.alert(30);
 break;

 case "12":
    window.alert(31);
 break;
 default:
    window.alert("wrong month");

    }
}
// <!-- <  !-- vowel or consonant --> 
function fn15(){

    var x=document.getElementById("number28").value;
    switch (x){
        case "a":
            window.alert("vowel ");

        break;
        case "o":
            window.alert("vowel ");

        break;
        case "e":
            window.alert("vowel ");

        break;
        case "i":
            window.alert("vowel ");

        break;
        default:

window.alert("consonant ");

    }
}
// <!-- max and min by switch -->
function fn16(){
    var x=document.getElementById("number29").value;
    var y=document.getElementById("number30").value;
  var z=x-y;
    switch(z>0){
        case true:
            window.alert("the max is  "+x+"the min is "+y);
            break;
        default: 
        window.alert("the max is  "+y+"the min is "+x);
        }
   
}
// <!-- odd or even  switch -->
function fn17(){
    var x=document.getElementById("number31").value;
  
  var z=x%2;
    switch(z==0){
        case true:
            window.alert("even  ");
            break;
        default: 
        window.alert("odd");
        }
   
}
// <!-- postive or nagetive switch-->
function fn18(){
    var x=document.getElementById("number32").value;
  

    switch(x>0){
        case true:
            window.alert("postive  ");
            break;
        default: 
        window.alert(" nagetive");
        }
   
}
// calculator
function fn19(){
    var x=document.getElementById("number33").value;
    var y=document.getElementById("number34").value;
window.alert(Number(x)+Number(y));

   
}
function fn20(){
    var x=document.getElementById("number33").value;
    var y=document.getElementById("number34").value;
window.alert(Number(x)*Number(y));

   
}
function fn21(){
    var x=document.getElementById("number33").value;
    var y=document.getElementById("number34").value;
window.alert(Number(x)-Number(y));

   
}
function fn22(){
    var x=document.getElementById("number33").value;
    var y=document.getElementById("number34").value;
window.alert(Number(x)/Number(y));

   
}
function fn24(){
   var h= document.getElementById("img");
   if (h.src.match("alexandru-stavrica-170390-800x760.jpg")){
       h.src="dark.png";
   }
   else{
   h.src="alexandru-stavrica-170390-800x760.jpg";}


}
function fn25(){
    var h= document.getElementById("text1");
    if (h.style.color="blue"){
        h.style.color="red";
    }
    else{
h.style.color="blue";
 }}
