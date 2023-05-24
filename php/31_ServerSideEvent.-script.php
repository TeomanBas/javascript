<?php
//sayfa tipi ve içerik tanımlaması yapıldı
header('Content-Type: text/event-stream');
// cache özelliği kaldırıldı bilgilerin güncell olması gerektiği için
header('Cache-Control: no-cache');
// date fonksiyonu içerisinden zaman bilgisi alındı
$zaman = date('r');
echo "data: {$zaman}\n\n";
// tamponlanmış belleği tarayıcıya gönderir.
flush();
?>