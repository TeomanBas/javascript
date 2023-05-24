
self.onmessage=function(event){
    var Degil=[];
    var AsalSayilar=[];
    for (var i =2;i<=event.data;i++){
        if(!Degil[i]){
            AsalSayilar.push(i);
            for (var j=i;j<=event.data;j+=i){
                Degil[j]=true;
            }
        }
    }
    this.postMessage(AsalSayilar);
}
