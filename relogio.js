
function clock(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let hora = h + ":" + m + ":" + s;
      
    if (h < 10){
        h + "0" + m + ":" + s;
    }
    if (m < 10){
        h + "0" + m + ":" + s;
    }
    if (s < 10)
    h + ":" + m + ":0" + s;
}
