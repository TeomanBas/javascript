// kullanıcı konum kordinatlarının alınması /////

function HaritaGoster(){
    if (navigator.geolocation){
        // bukısımda eğer konum bilgileri alınabiliyor ise KonumAl fonksiyonu
        // alınamaz hata dönerse Hata fonksiyonu çalışacak.
        navigator.geolocation.getCurrentPosition(KonumAl,Hata);
    }else{
        harita.innerHTML="tarayıcımız konum özelliklerini desteklemiyor";
    }
}


// alınan konum bilgileri position değişkeninde tutumakta ve parametre olarak fonksiyonu verdik
function KonumAl(position){
    // enlem değerleri
    console.log(position.coords.latitude);
    // boylam değerleri
    console.log(position.coords.longitude);
    // konum bilgileri birleştiriliyor.
    var lat_long_itude=position.coords.latitude+","+position.coords.longitude;
    console.log(lat_long_itude);
    

}
// getCurrentPosition dan dönen hata Hata fonksiyonuna parametre olarak gönderildi ve
// burada gelen hatayı yorumladık
function Hata(h){
    switch(h.code){
        case h.PERMISSION_DENIED:
            Harita.innerHTML="konum bilgisi için izin verilmedi";
            break;
        case h.POSITION_UNAVAILABLE:
            Harita.innerHTML="konum analiz edilemiyor";
            break;
        case h.TIMEOUT:
            Harita.innerHTML="zaman aşımı";
            break;
        default:
            Harita.innerHTML="bilinmeyen hata";
            break;
    }
}
/* bu kısımdan sonra alınan kordinat bilgileri gcp veya başka bir maps api hizmeti veren 
servis den api key alınarak yapılabilir get metodu alınan veriler maps bilgilerini sağlayan
servise gönderilir ve dönen cevap içinden konum bilgileri postakodu , şehir vb bilgiler 
okunabilir yada harita olarak gösterilebilir.api key alındığında bu keyin güvenliği detaylı araştırılması
gereken bir konudur */

