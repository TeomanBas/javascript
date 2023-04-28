bekleme=5000;
sayac=1;
resim_sayisi=2;
    function resim_degis(){
        document.getElementsByName("resim")[0].src="../images/"+sayac+".png";
        sayac==resim_sayisi?sayac=1:sayac++;
        setTimeout("resim_degis()",bekleme);    
        }