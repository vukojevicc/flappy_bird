var rupa = document.getElementById('hole');
var blok = document.getElementById('block');
var ptica = document.getElementById('character');
var poeni_div = document.getElementById('points');
var skakanje = 0;
var poeni = 0;

function hole_position(){
    var hole_position = (Math.random()*(-500+150))-150;
    rupa.style.top = hole_position + 'px';
}
document.addEventListener('DOMContentLoaded', function(){
    hole_position();
    poeni_div.innerHTML = poeni;
    poeni++;
})

rupa.addEventListener('animationiteration', function(){
    hole_position();
    poeni_div.innerHTML = poeni;
    poeni++;
})
setInterval(function(){
    var pticaTop = parseInt(window.getComputedStyle(ptica).getPropertyValue('top'));
    if(skakanje == 0){
    ptica.style.top = pticaTop + 3 + 'px';
    }
    var blokLeft = parseInt(window.getComputedStyle(blok).getPropertyValue('left'));
    var rupaTop = parseInt(window.getComputedStyle(rupa).getPropertyValue('top'));
    var pTop = -(500 - pticaTop);
    if((pticaTop > 480) || ((blokLeft < 20) && (blokLeft > -50) && ((pTop < rupaTop) || (pTop > rupaTop + 130)))){
        alert('Game over. ' + poeni_div.innerHTML + ' points');
        poeni_div.innerHTML = 0;
        poeni = 0;
        ptica.style.top = 100 + 'px';
    }
}, 10)

function skok(){
    skakanje = 1;
    let brojacSkokova = 0;

    var interval_skakanja = setInterval(function(){
        var pticaTop = parseInt(window.getComputedStyle(ptica).getPropertyValue('top'));
        if(pticaTop > 6){
        ptica.style.top = pticaTop - 5 + 'px';
        }
        if(brojacSkokova > 10){
            clearInterval(interval_skakanja);
            skakanje = 0;
            brojacSkokova = 0;
        }
        brojacSkokova++;
    }, 10)
}
document.querySelector('html').addEventListener('click', function(){
    skok();
});