var mes = document.getElementById('numm')
var cm = document.getElementById('numc')
var res = document.getElementById('resposta')

function numero1(n){
    if(Number(n) > 0){
        return 'true'
    }else{
        return 'false'
    }
}

function numero2(n){
    if(Number(n) >= 30 && Number(n) <= 2000){
        return 'true'
    }else{
        return 'false'
    }
}


function calcular(){
    if(numero1(mes.value) == 'false' && numero2(cm.value) == 'false'){
        alert('Por favor, insira os dados corretamente.')
        mes.value='1'
        cm.value='30'
    }else if(numero1(mes.value) == 'true' && numero2(cm.value) == 'false'){
        alert('O valor em cm² deve ser maior que 30 e menor que 2000.')
        cm.value='30'
    }else if(numero1(mes.value) == 'false' && numero2(cm.value) == 'true'){
        alert('Insira um número de meses maior ou igual a 1.')
        mes.value='1'
    }if(numero1(mes.value) == 'true' && numero2(cm.value) == 'true'){
        let x = Number(mes.value)
        let y = Number(cm.value)

        let r = x * y * 2

        if(x >= 12){
            let d = r * 90 / 100
            res.innerHTML=`Para anunciar durante ${x} meses, usando ${y}cm². Custará ${r} reais, mas te daremos um desconto de 10% custando ${d} reais.`
        }else{
            res.innerHTML=`Para anunciar durante ${x} meses, usando ${y}cm². Custará ${r} reais.`
        }
    }
}
