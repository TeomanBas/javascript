function kontrol(){
    if('localStorage' in window && window['localStorage']!==null){
        return true;
    }else{
        return false;
    }
}
function kayitekle(){
    var isim=document.getElementById("isim").value;
    var deger=document.getElementById("deger").value;
    localStorage.setItem(isim,deger);
    listele();
    document.getElementById("isim").value="";
    document.getElementById("deger").value="";
}
function kayitsil(){
    localStorage.removeItem(document.getElementById("isim").value);
    listele();
}
function hepsinisil(){
    localStorage.clear();
    listele();
}
function listele(){
    if(kontrol()){
        var liste ="<tr><th>isim</th><th>değer</th></tr>";
        var anahtar="";
        var i=0;
        for(i=0;i<=localStorage.length-1;i++){
            anahtar=localStorage.key(i);
            deger=localStorage.getItem(anahtar);
            liste +="<tr><td>"+anahtar+"</td><td>"+deger+"</td></tr>";
        }
        document.getElementById("liste").innerHTML=liste;
        if(localStorage.length>0){
            document.getElementById("kayitlar").style.visibility="visible";
        }else{
            document.getElementById("kayitlar").style.visibility="hidden";
        }
    }else{
        alert("tarayıcıda local stroge desteği bulunmamaktadır.");
    }
}
