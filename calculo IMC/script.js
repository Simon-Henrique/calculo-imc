var peso = document.getElementById('peso')
var altura = document.getElementById('altura')
var res = document.getElementById('res')
function isnumber1(p){
    if (Number(p) >= 1 && (Number(p)) <= 500) {
         return true
    } else {
        return false
    }
}
function isnumber2(a){
    Number(a)    
    if(a >= 0.01 && a <= 3.00 ) {
        return true
    }else{
        return false
    }
}
function IMC() {
    if (isnumber1(peso.value) && isnumber2(altura.value)) {
        var altura2 = altura.value * altura.value
        var imc = peso.value / altura2
        var imc2 = imc.toFixed(2)
        res.innerHTML = `Seu IMC é de  ${imc2}</br>`
            if(imc < 18.5){
                res.innerHTML += `Seu estado atual é de <strong>MAGREZA</strong>.`}
            if (imc >= 18.5 && imc < 24.9){
                res.innerHTML += `Seu estado atual é <strong>NORMAL</strong>.`}
            if (imc >= 25 && imc < 29.9) {
                res.innerHTML += `Seu estado atual é de <strong>SOBREPESO</strong>.`}
            if (imc >= 30 && imc < 39.9) {
                res.innerHTML += `Seu estado atual é de <strong>OBESIDADE</strong>.`}
            if (imc >= 40) {
                res.innerHTML += `Seu estado atual é de <strong>OBESIDADE GRAVE.</strong>`
    }
    }
         else {
        window.alert('verifique as informações e tente novamente!!')
    } 
}