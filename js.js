var number1 = document.getElementById("1");
var number2 = document.getElementById("2");
var number3 = document.getElementById("3");
var number4 = document.getElementById("4");
var number5 = document.getElementById("5");
var number6 = document.getElementById("6");
var number7 = document.getElementById("7");
var number8 = document.getElementById("8");
var number9 = document.getElementById("9");
var number0 = document.getElementById("0");
var layar = document.getElementById("layar");
var Nilaisebelum = 0;
var operasi = "";
var clear = false;
number1.onclick = function () {
	if(clear){
  	layar.value = ""; //jika 1+2 maka Clear benilai false
    clear = false;
  }
	layar.value = layar.value +  "1";
 
  
}
number2.onclick = function () {
	if(clear){
  	layar.value = "";
    clear = false;
  }
	layar.value = layar.value + "2";
  }
number3.onclick = function () {
	if(clear){
  	layar.value = "";
    clear = false;
  }
	layar.value = layar.value + "3";
  }
number4.onclick = function () {
	if(clear){
  	layar.value = "";
    clear = false;
  }
	layar.value = layar.value +  "4";
  }
number5.onclick = function () {
	if(clear){
  	layar.value = "";
    clear = false;
  }
	layar.value = layar.value + "5";
  }
number6.onclick = function () {
	if(clear){
  	layar.value = "";
    clear = false;
  }
	layar.value = layar.value + "6";
  }
number7.onclick = function () {
	if(clear){
  	layar.value = "";
    clear = false;
  }
	layar.value = layar.value + "7";
  }
number8.onclick = function () {
	if(clear){
  	layar.value = "";
    clear = false;
  }
	layar.value = layar.value + "8";
  }
number9.onclick = function () {
	if(clear){
  	layar.value = "";
    clear = false;
  }
	layar.value = layar.value + "9";
  }
number0.onclick = function () {
	if(clear){
  	layar.value = "";
    clear = false;
  }
	layar.value = layar.value + "0";
}
AC.onclick = function () {
	layar.value = "";
  Nilaisebelum = 0
}
Del.onclick = function () {
	var Layararray = layar.value.split("");
	Layararray.pop();
	var Hasilakhir=Layararray.join("");
	layar.value = Hasilakhir;
}

Persen.onclick = function () {
if(Nilaisebelum != 0){
if(operasi == "tambah"){
  	Nilaisebelum = Nilaisebelum + parseInt(layar.value);
  } else if(operasi == "kali"){
  	Nilaisebelum = Nilaisebelum * parseInt(layar.value);
  } 
  else if(operasi == "bagi"){
  	Nilaisebelum = Nilaisebelum / parseInt(layar.value);
  } else{
  	Nilaisebelum = Nilaisebelum - parseInt(layar.value);
  }
 }else{
  var integer= parseInt(layar.value);
      }
layar.value = layar.value/100;
operasi ="persen"
}

Plus.onclick = function () {
 if(Nilaisebelum != 0){
 if(operasi == "tambah"){
  	Nilaisebelum = Nilaisebelum + parseInt(layar.value);
  } else if(operasi == "kali"){
  	Nilaisebelum = Nilaisebelum * parseInt(layar.value);
  } else if(operasi == "bagi"){
  	Nilaisebelum = Nilaisebelum / parseInt(layar.value);
  } else{
  	Nilaisebelum = Nilaisebelum - parseInt(layar.value);
  }
  }else{
  		Nilaisebelum = parseInt(layar.value);
  }
  layar.value = "";
  
  operasi = "tambah";

}

Minus.onclick = function () {
 if(Nilaisebelum !=0){
 	if(operasi == "tambah"){
  	Nilaisebelum = Nilaisebelum + parseInt(layar.value);
  } else if(operasi == "kali"){
  	Nilaisebelum = Nilaisebelum * parseInt(layar.value);
  } else if(operasi == "bagi"){
  	Nilaisebelum = Nilaisebelum / parseInt(layar.value);
  } else{
  	Nilaisebelum = Nilaisebelum - parseInt(layar.value);
  }
 }else{
  	Nilaisebelum = parseInt(layar.value);
 }
  layar.value = "";
  
  operasi = "kurang";
}

Devide.onclick = function () {
	if(Nilaisebelum !=0){
 if(operasi == "tambah"){
  	Nilaisebelum = Nilaisebelum + parseInt(layar.value);
  } else if(operasi == "kali"){
  	Nilaisebelum = Nilaisebelum * parseInt(layar.value);
  } else if(operasi == "bagi"){
  	Nilaisebelum = Nilaisebelum / parseInt(layar.value);
  } else{
  	Nilaisebelum = Nilaisebelum - parseInt(layar.value);
  }
  } else{
  	Nilaisebelum = parseInt(layar.value);
  }
	layar.value = "";
  operasi = "bagi";
}

Time.onclick = function () {
	if(Nilaisebelum !=0){
 if(operasi == "tambah"){
  	Nilaisebelum = Nilaisebelum + parseInt(layar.value);
  } else if(operasi == "kali"){
  	Nilaisebelum = Nilaisebelum * parseInt(layar.value);
  } else if(operasi == "bagi"){
  	Nilaisebelum = Nilaisebelum / parseInt(layar.value);
  } else if(operasi == "persen"){
  	layar.value = layar.value/100;
      }
  else{
  	Nilaisebelum = Nilaisebelum - parseInt(layar.value);
  }
    }else{
    Nilaisebelum = parseInt(layar.value);
    }
	layar.value = "";
  operasi = "kali";
}
Hasil.onclick = function (){
 if(operasi == "tambah"){
     var hasil =  Nilaisebelum + parseInt(layar.value) ;
     layar.value = hasil;
     Nilaisebelum = 0;
     hasil = 0;
     clear = true;
 
  }
  if(operasi == "kurang"){
     var hasil =  Nilaisebelum - parseInt(layar.value);
     layar.value = hasil;
     Nilaisebelum = 0;
     hasil = 0;
     clear = true;
     
  }
  if(operasi == "bagi"){
     var hasil =  Nilaisebelum / parseInt(layar.value);
     layar.value = hasil;
     Nilaisebelum = 0;
     hasil=0;
     clear=true;
     
  }
   if(operasi == "kali"){
     var hasil =  Nilaisebelum * parseInt(layar.value);
     layar.value = hasil;
     Nilaisebelum = 0;
     hasil=0;
     clear=true;
     
  }
  
  if(operasi == "persen"){
     var hasil =  Nilaisebelum * parseInt(layar.value);
     layar.value = hasil;
     Nilaisebelum = 0;
     hasil=0;
     clear=true;
     
  }
}

 
 



