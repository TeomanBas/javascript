var ad="mahmut";
var soyad="fırlatma rampası";
var borc=1500;
var alacak=1000;
document.write("sayın<b>"+ad+" "+ soyad + "</b><br/>");
document.write("borcunuz : "+borc + "TL <br/>");
document.write("alacağınız : "+alacak + " TL <br/>");
document.write("<font style=color:red;> bakiyeniz : "+(borc-alacak)+ " TL</font><br/><br/>");
var odeme=500;
borc=borc-odeme;
document.write("yapılan ödeme : "+odeme+ " TL <br/>");
document.write("<font style=color:red;>yeni bakiyeniz :"+(borc-alacak)+ " TL</font><br/><br/>");