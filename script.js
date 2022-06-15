const diasEl = document.getElementById("dias")
const horasEl = document.getElementById("horas")
const minEl = document.getElementById("min")
const segEl = document.getElementById("seg")

const newYears = "1 jan 2023";
function contadoAno(){
    
    const newYearsdate = new Date(newYears);
    const dataHj = new Date()

    const totalseg =(newYearsdate - dataHj) / 1000;

    const dias = Math.floor(totalseg / 3600/ 24);
    const horas = Math.floor(totalseg / 3600) %24;
    const min = Math.floor(totalseg / 60) %60;
    const seg = Math.floor(totalseg)%60;

    diasEl.innerHTML = dias;
    horasEl.innerHTML = formatempo(horas);
    minEl.innerHTML = formatempo(min);
    segEl.innerHTML = formatempo(seg);
}
function formatempo(time){
    return time < 10 ? `0${time}` : time;   
}
contadoAno();

setInterval(contadoAno,1000)