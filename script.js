var country1=document.getElementsByClassName("country")[0];
var country2=document.getElementsByClassName("country")[1];
let a=["India","U.S. Dollar","Euro","Japanese Yen","Great British Pound","Australian Dollar"];
let b=["India","U.S. Dollar","Euro","Japanese Yen","Great British Pound","Australian Dollar"];
country1.addEventListener("change",()=>{
    document.getElementById("snumber").value="";
    document.getElementById("answer").innerHTML="";
var c=document.getElementById("country1").value;
document.getElementById("fvalue").innerHTML=a[c];
});
country2.addEventListener("change",()=>{
    document.getElementById("snumber").value="";
    document.getElementById("answer").innerHTML="";
    var d=document.getElementById("country2").value;
    document.getElementById("svalue").innerHTML=b[d];
});
      snumber.addEventListener("keyup",()=>{
         var s=document.getElementById("fvalue").innerHTML;
         var t=document.getElementById("svalue").innerHTML;
          var z=document.getElementById("snumber").value;
                 if(s==t)
                  document.getElementById("answer").innerHTML=z;
                else if(s==a[0]&&t==b[1])
                  document.getElementById("answer").innerHTML=z/ 74.50;
                else if(s==a[0]&&t==b[2])
                  document.getElementById("answer").innerHTML=z/ 83.91;
                else if(s==a[0]&&t==b[3])
                document.getElementById("answer").innerHTML=z* 1.54;
                else if(s==a[0]&&t==b[4])
                 document.getElementById("answer").innerHTML=z* 0.010;
                  else if(s==a[0]&&t==b[5])
                  document.getElementById("answer").innerHTML=z* 0.019;
                else if(s==a[1]){
                    if(t==b[0])
                  document.getElementById("answer").innerHTML=z*74.50;
                  else if(t==b[2])
                  document.getElementById("answer").innerHTML=z* 0.89;
                  else if(t==b[3])
                  document.getElementById("answer").innerHTML=z* 114.98;
                 else if(t==b[4])
                 document.getElementById("answer").innerHTML=z* 0.75;
                 else if(t==b[5])
                 document.getElementById("answer").innerHTML=z* 1.3
                }
                else if(s==a[2]){
                    if(t==b[0])
                  document.getElementById("answer").innerHTML=z*83.92;
                  else if(t==b[1])
                  document.getElementById("answer").innerHTML=z* 1.13;
                  else if(t==b[3])
                  document.getElementById("answer").innerHTML=z* 129.56;
                 else if(t==b[4])
                 document.getElementById("answer").innerHTML=z*0.84;
                 else if(t==b[5])
                 document.getElementById("answer").innerHTML=z* 1.56;
                }
                else if(s==a[3])
                {
                    if(t==b[0])
                    document.getElementById("answer").innerHTML=z*0.65;
                    else if(t==b[1])
                    document.getElementById("answer").innerHTML=z* 0.087;
                    else if(t==b[2])
                    document.getElementById("answer").innerHTML=z* 0.077;
                   else if(t==b[4])
                   document.getElementById("answer").innerHTML=z* 0.0065;
                   else if(t==b[5])
                   document.getElementById("answer").innerHTML=z* 0.012;
                }
                else if(s==a[4]){
                    if(t==b[0])
                    document.getElementById("answer").innerHTML=z*99.67;
                    else if(t==b[1])
                    document.getElementById("answer").innerHTML=z* 1.34;
                    else if(t==b[2])
                    document.getElementById("answer").innerHTML=z* 1.19;
                   else if(t==b[3])
                   document.getElementById("answer").innerHTML=z* 153.91;
                   else if(t==b[5])
                   document.getElementById("answer").innerHTML=z* 1.85;
                }
                else {
                    if(t==b[0])
                    document.getElementById("answer").innerHTML=z*53.78;
                    else if(t==b[1])
                    document.getElementById("answer").innerHTML=z* 0.72;
                    else if(t==b[2])
                    document.getElementById("answer").innerHTML=z* 0.64;
                   else if(t==b[3])
                   document.getElementById("answer").innerHTML=z* 82.99;
                   else if(t==b[4])
                   document.getElementById("answer").innerHTML=z* 0.54;
                }
  });
btn.addEventListener("click",()=>{
    document.getElementById("snumber").value="";
    document.getElementById("answer").innerHTML="";
    var x=document.getElementById("fvalue").innerHTML;
    var y=document.getElementById("svalue").innerHTML;
    document.getElementById("svalue").innerHTML=x;
    document.getElementById("fvalue").innerHTML=y;
});
  
