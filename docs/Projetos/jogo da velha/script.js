// inputs
var p1 = document.getElementById('s-1')
var p2 = document.getElementById('s-2')
var p3 = document.getElementById('s-3')
var p4 = document.getElementById('m-1')
var p5 = document.getElementById('m-2')
var p6 = document.getElementById('m-3')
var p7 = document.getElementById('i-1')
var p8 = document.getElementById('i-2')
var p9 = document.getElementById('i-3')

var res = document.querySelector('div#res')

var dif = document.querySelector('span#dif')

var jogada = {
    um: null,
    dois: null,
    tres: null,
    quatro: null,
    cinco: null,
    seis: null,
    sete: null,
    oito: null,
    nove: null,
}

var contador = 0
var j = 0

var fundo = document.getElementById('fundo')
var nivel_dif = 'Normal'

//dificuldade ---------------------------------------------------------------------------------------------------------------------------
function dif_e(){
    
    if(nivel_dif === 'Impossivel'){
        nivel_dif = 'Complicado'
        dif.innerHTML = 'Complicado'
    }else if(nivel_dif === 'Complicado'){
        nivel_dif = 'Normal'
        dif.innerHTML = `Normal`
    }
}
function dif_d(){
    if(nivel_dif === 'Normal'){
        nivel_dif = 'Complicado'
        dif.innerHTML = `Complicado`
    }else if(nivel_dif === 'Complicado'){
        nivel_dif = 'Impossivel'
        dif.innerHTML = `Impossivel`
    }
}

// functions jogador -------------------------------------------------------------------------------------------------------------------------

function j1(){

    if(jogada.um === 'X'){
        alert('Você não pode jogar duas vezes no mesmo lugar!')
    } else if(jogada.um === 'O'){
        alert('Você não pode jogar aonde o seu oponente já jogou!')
    }else{
        p1.innerText ='X'
        jogada.um = "X"
        contador += 1
        j += 1
    }
}
function j2(){
    
    if(jogada.dois === 'X'){
        alert('Você não pode jogar duas vezes no mesmo lugar!')
    } else if(jogada.dois === 'O'){
        alert('Você não pode jogar aonde o seu oponente já jogou!')
    }else{
        p2.innerText ='X'
        jogada.dois = "X"
        contador += 1
        j += 1
    }
}
function j3(){
    
    if(jogada.tres === 'X'){
        alert('Você não pode jogar duas vezes no mesmo lugar!')
    } else if(jogada.tres === 'O'){
        alert('Você não pode jogar aonde o seu oponente já jogou!')
    }else{
        p3.innerText ='X'
        jogada.tres = "X"
        contador += 1
        j += 1
    }
}
function j4(){
    
    if(jogada.quatro === 'X'){
        alert('Você não pode jogar duas vezes no mesmo lugar!')
    } else if(jogada.quatro === 'O'){
        alert('Você não pode jogar aonde o seu oponente já jogou!')
    }else{
        p4.innerText ='X'
        jogada.quatro = "X"
        contador += 1
        j += 1
    }
}
function j5(){
    
    if(jogada.cinco === 'X'){
        alert('Você não pode jogar duas vezes no mesmo lugar!')
    } else if(jogada.cinco === 'O'){
        alert('Você não pode jogar aonde o seu oponente já jogou!')
    }else{
        p5.innerText ='X'
        jogada.cinco = "X"
        contador += 1
        j += 1
    }
}
function j6(){
    
    if(jogada.seis === 'X'){
        alert('Você não pode jogar duas vezes no mesmo lugar!')
    } else if(jogada.seis === 'O'){
        alert('Você não pode jogar aonde o seu oponente já jogou!')
    }else{
        p6.innerText ='X'
        jogada.seis = "X"
        contador += 1
        j += 1
    }
}
function j7(){
    
    if(jogada.sete === 'X'){
        alert('Você não pode jogar duas vezes no mesmo lugar!')
    } else if(jogada.sete === 'O'){
        alert('Você não pode jogar aonde o seu oponente já jogou!')
    }else{
        p7.innerText ='X'
        jogada.sete = "X"
        contador += 1
        j += 1
    }
}
function j8(){
    
    if(jogada.oito === 'X'){
        alert('Você não pode jogar duas vezes no mesmo lugar!')
    } else if(jogada.oito === 'O'){
        alert('Você não pode jogar aonde o seu oponente já jogou!')
    }else{
        p8.innerText ='X'
        jogada.oito = "X"
        contador += 1
        j += 1
    }
}
function j9(){
    
    if(jogada.nove === 'X'){
        alert('Você não pode jogar duas vezes no mesmo lugar!')
    } else if(jogada.nove === 'O'){
        alert('Você não pode jogar aonde o seu oponente já jogou!')
    }else{
        p9.innerText ='X'
        jogada.nove = "X"
        contador += 1
        j += 1
    }
}

//identificando as jogadas -------------------------------------------------------------------------------------------------------------------

function iden_jogada(x){
    if(x === "X"){
        return false
    }else if(x === "O"){
        return false
    }else{
        return true
    }
}

//ia --------------------------------------------------------------------------------------------------------------------------------

function jogada_linear(){
    j += 1
    if(iden_jogada(jogada.um) == true){
        jogada.um = "O"
        p1.innerText= "O"
    }else if(iden_jogada(jogada.dois) == true){
        jogada.dois = "O"
        p2.innerText = "O"
    }else if(iden_jogada(jogada.tres) == true){
        jogada.tres = "O"
        p3.innerText = "O"
    }else if(iden_jogada(jogada.quatro) == true){
        jogada.quatro = "O"
        p4.innerText = "O"
    }else if(iden_jogada(jogada.cinco) == true){
        jogada.cinco = "O"
        p5.innerText = "O"
    }else if(iden_jogada(jogada.seis) == true){
        jogada.seis = "O"
        p6.innerText = "O"
    }else if(iden_jogada(jogada.sete) == true){
        jogada.sete = "O"
        p7.innerText = "O"
    }else if(iden_jogada(jogada.oito) == true){
        jogada.oito = "O"
        p8.innerText = "O"
    }else if(iden_jogada(jogada.nove) == true){
        jogada.nove = "O"
        p9.innerText = "O"
    }
}
function jogada_centro(x){
    if(jogada.um == "X" && jogada.dois == "X"){
        if(x == j){
            if(iden_jogada(jogada.tres) == true){
                jogada.tres = "O"
                p3.innerText= "O"
                j += 1
            }
        }
    }
    if(jogada.dois == "X" && jogada.tres == "X"){
        if(x == j){
            if(iden_jogada(jogada.um) == true){
                jogada.um = "O"
                p1.innerText= "O"
                j += 1
            }
        }
    }
    if(jogada.um == "X" && jogada.tres == "X"){
        if(x == j){
            if(iden_jogada(jogada.dois) == true){
                jogada.dois = "O"
                p2.innerText= "O"
                j += 1
            }
        }
    }

    if(jogada.sete == "X" && jogada.oito == "X"){
        if(x == j){
            if(iden_jogada(jogada.nove) == true){
                jogada.nove = "O"
                p9.innerText= "O"
                j += 1
            }
        }
    }
    if(jogada.nove == "X" && jogada.oito == "X"){
        if(x == j){
            if(iden_jogada(jogada.sete) == true){   
                jogada.sete = "O"
                p7.innerText= "O"
                j += 1
            }
        }
    }
    if(jogada.sete == "X" && jogada.nove == "X"){
        if(x == j){
            if(iden_jogada(jogada.oito) == true){   
                jogada.oito = "O"
                p8.innerText= "O"
                j += 1
            }
        }
    }

    if(jogada.um == "X" && jogada.quatro == "X"){
        if(x == j){
            if(iden_jogada(jogada.sete) == true){
                jogada.sete = "O"
                p7.innerText= "O"
                j += 1
            }
        }
    }
    if(jogada.quatro == "X" && jogada.sete == "X"){
        if(x == j){
            if(iden_jogada(jogada.um) == true){
                jogada.um = "O"
                p1.innerText= "O"
                j += 1
            }
        }
    }
    if(jogada.um == "X" && jogada.sete == "X"){
        if(x == j){
            if(iden_jogada(jogada.quatro) == true){    
                jogada.quatro = "O"
                p4.innerText= "O"
                j += 1
            }
        }
    }

    if(jogada.seis == "X" && jogada.tres == "X"){
        if(x == j){
            if(iden_jogada(jogada.nove) == true){
                jogada.nove = "O"
                p9.innerText= "O"
                j += 1
            }
        }
    }
    if(jogada.nove == "X" && jogada.tres == "X"){
        if(x == j){
            if(iden_jogada(jogada.seis) == true){
                jogada.seis = "O"
                p6.innerText= "O"
                j += 1
            }
        }
    }
    if(jogada.nove == "X" && jogada.seis == "X"){
        if(x == j){
            if(iden_jogada(jogada.tres) == true){
                jogada.tres = "O"
                p3.innerText= "O"
                j += 1
            }
        }
    }
}
function jogada_p1(x){
    if(jogada.dois == "X" && jogada.cinco == "X"){
        if(x == j){
            if(iden_jogada(jogada.oito) == true){
                jogada.oito = "O"
                p8.innerText = "O"
                j += 1
            }
        }
    }
    if(jogada.oito == "X" && jogada.cinco == "X"){
        if(x == j){
            if(iden_jogada(jogada.dois) == true){
                jogada.dois = "O"
                p2.innerText = "O"
                j += 1
            }
        }
    }

    if(jogada.seis == "X" && jogada.tres == "X"){
        if(x == j){
            if(iden_jogada(jogada.nove) == true){
                jogada.nove = "O"
                p9.innerText= "O"
                j += 1
            }
        }
    }
    if(jogada.nove == "X" && jogada.tres == "X"){
        if(x == j){
            if(iden_jogada(jogada.seis) == true){
                jogada.seis = "O"
                p6.innerText= "O"
                j += 1
            }
        }
    }
    if(jogada.nove == "X" && jogada.seis == "X"){
        if(x == j){
            if(iden_jogada(jogada.tres) == true){
                jogada.tres = "O"
                p3.innerText= "O"
                j += 1
            }
        }
    }

    if(jogada.tres == "X" && jogada.cinco == "X"){
        if(x == j){
            if(iden_jogada(jogada.sete) == true){
                jogada.sete = "O"
                p7.innerText= "O"
                j += 1
            }
        }
    }
    if(jogada.cinco == "X" && jogada.sete == "X"){
        if(x == j){
            if(iden_jogada(jogada.tres) == true){
                jogada.tres = "O"
                p3.innerText= "O"
                j += 1
            }
        }
    }

    if(jogada.quatro == "X" && jogada.cinco == "X"){
        if(x == j){
            if(iden_jogada(jogada.seis) == true){
                jogada.seis = "O"
                p6.innerText= "O"
                j += 1
            }
        }
    }
    if(jogada.seis == "X" && jogada.cinco == "X"){
        if(x == j){
            if(iden_jogada(jogada.quatro) == true){
                jogada.quatro = "O"
                p4.innerText= "O"
                j += 1
            }
        }
    }
    
    if(jogada.sete == "X" && jogada.oito == "X"){
        if(x == j){
            if(iden_jogada(jogada.nove) == true){
                jogada.nove = "O"
                p9.innerText= "O"
                j += 1
            }
        }
    }
    if(jogada.nove == "X" && jogada.oito == "X"){
        if(x == j){
            if(iden_jogada(jogada.sete) == true){   
                jogada.sete = "O"
                p7.innerText= "O"
                j += 1
            }
        }
    }
    if(jogada.sete == "X" && jogada.nove == "X"){
        if(x == j){
            if(iden_jogada(jogada.oito) == true){   
                jogada.oito = "O"
                p8.innerText= "O"
                j += 1
            }
        }
    }

    
}
function jogada_vitoria(x){
   
    if(jogada.um == "O" && jogada.dois == "O"){
        if(x == j){
            if(iden_jogada(jogada.tres) == true){
                jogada.tres = "O"
                p3.innerText = "O"
                j += 1
            }
        }
    }
    if(jogada.um == "O" && jogada.tres == "O"){
        if(x == j){
            if(iden_jogada(jogada.dois) == true){
                jogada.dois = "O"
                p2.innerText = "O"
                j += 1
            }
        }
    }
    if(jogada.tres == "O" && jogada.dois == "O"){
        if(x == j){
            if(iden_jogada(jogada.um) == true){
                jogada.um = "O"
                p1.innerText = "O"
                j += 1
            }
        }
    }

    if(jogada.quatro == "O" && jogada.cinco == "O"){
        if(x == j){
            if(iden_jogada(jogada.seis) == true){
                jogada.seis = "O"
                p6.innerText = "O"
                j += 1
            }
        }
    }
    if(jogada.quatro == "O" && jogada.seis == "O"){
        if(x == j){
            if(iden_jogada(jogada.cinco) == true){
                jogada.cinco = "O"
                p5.innerText = "O"
                j += 1
            }
        }
    }
    if(jogada.cinco == "O" && jogada.seis == "O"){
        if(x == j){
            if(iden_jogada(jogada.quatro) == true){
                jogada.quatro = "O"
                p4.innerText = "O"
                j += 1
            }
        }
    }

    if(jogada.sete == "O" && jogada.oito == "O"){
        if(x == j){
            if(iden_jogada(jogada.nove) == true){
                jogada.nove = "O"
                p9.innerText = "O"
                j += 1
            }
        }
    }
    if(jogada.sete == "O" && jogada.nove == "O"){
        if(x == j){
            if(iden_jogada(jogada.oito) == true){
                jogada.oito = "O"
                p8.innerText = "O"
                j += 1
            }
        }
    }
    if(jogada.oito == "O" && jogada.nove == "O"){
        if(x == j){
            if(iden_jogada(jogada.sete) == true){
                jogada.sete = "O"
                p7.innerText = "O"
                j += 1
            }
        }
    }
    
    if(jogada.um == "O" && jogada.quatro == "O"){
        if(x == j){
            if(iden_jogada(jogada.sete) == true){
                jogada.sete = "O"
                p7.innerText = "O"
                j += 1
            }
        }
    }
    if(jogada.um == "O" && jogada.sete == "O"){
        if(x == j){
            if(iden_jogada(jogada.quatro) == true){
                jogada.quatro = "O"
                p4.innerText = "O"
                j += 1
            }
        }
    }
    if(jogada.quatro == "O" && jogada.sete == "O"){
        if(x == j){
            if(iden_jogada(jogada.um) == true){
                jogada.um = "O"
                p1.innerText = "O"
                j += 1
            }
        }
    }

    if(jogada.dois == "O" && jogada.cinco == "O"){
        if(x == j){
            if(iden_jogada(jogada.oito) == true){
                jogada.oito = "O"
                p8.innerText = "O"
                j += 1
            }
        }
    }
    if(jogada.dois == "O" && jogada.oito == "O"){
        if(x == j){
            if(iden_jogada(jogada.cinco) == true){
                jogada.cinco = "O"
                p5.innerText = "O"
                j += 1
            }
        }
    }
    if(jogada.cinco == "O" && jogada.oito == "O"){
        if(x == j){
            if(iden_jogada(jogada.dois) == true){
                jogada.dois = "O"
                p2.innerText = "O"
                j += 1
            }
        }
    }

    if(jogada.tres == "O" && jogada.seis == "O"){
        if(x == j){
            if(iden_jogada(jogada.nove) == true){
                jogada.nove = "O"
                p9.innerText = "O"
                j += 1
            }
        }
    }
    if(jogada.tres == "O" && jogada.nove == "O"){
        if(x == j){
            if(iden_jogada(jogada.seis) == true){
                jogada.seis = "O"
                p6.innerText = "O"
                j += 1
            }
        }
    }
    if(jogada.seis == "O" && jogada.nove == "O"){
        if(x == j){
            if(iden_jogada(jogada.tres) == true){
                jogada.tres = "O"
                p3.innerText = "O"
                j += 1
            }
        }
    }

    if(jogada.um == "O" && jogada.cinco == "O"){
        if(x == j){
            if(iden_jogada(jogada.nove) == true){
                jogada.nove = "O"
                p9.innerText = "O"
                j += 1
            }
        }
    }
    if(jogada.um == "O" && jogada.nove == "O"){
        if(x == j){
            if(iden_jogada(jogada.cinco) == true){
                jogada.cinco = "O"
                p5.innerText = "O"
                j += 1
            }
        }
    }
    if(jogada.nove == "O" && jogada.cinco == "O"){
        if(x == j){
            if(iden_jogada(jogada.um) == true){
                jogada.um = "O"
                p1.innerText = "O"
                j += 1
            }
        }
    }

    if(jogada.tres == "O" && jogada.cinco == "O"){
        if(x == j){
            if(iden_jogada(jogada.sete) == true){
                jogada.sete = "O"
                p7.innerText = "O"
                j += 1
            }
        }
    }
    if(jogada.tres == "O" && jogada.sete == "O"){
        if(x == j){
            if(iden_jogada(jogada.cinco) == true){
                jogada.cinco = "O"
                p5.innerText = "O"
                j += 1
            }
        }
    }
    if(jogada.cinco == "O" && jogada.sete == "O"){
        if(x == j){
            if(iden_jogada(jogada.tres) == true){
                jogada.tres = "O"
                p3.innerText = "O"
                j += 1
            }
        }
    }
}

function ia(){
    if (contador == 0){

    }else {
        if(contador == 1){
            if(iden_jogada(jogada.cinco) == true){
                jogada.cinco = "O"
                p5.innerText = 'O'
                contador += 1
                j += 1
            }else{
                jogada.um = "O"
                p1.innerText = "O"
                contador += 1
                j += 1
            }

        }else if(contador == 3){
            contador += 1
            if(jogada.cinco === "O"){
                if(jogada.seis == "X" && jogada.oito == "X"){
                    if(j == 3){
                        if(iden_jogada(jogada.nove) == true){
                            jogada.nove = "O"
                            p9.innerText = "O"
                            j += 1
                        }
                    }
                }
                if(j == 3 && nivel_dif === "Complicado" || nivel_dif === "Impossivel"){
                    jogada_vitoria(j)
                }
                if(j == 3 && nivel_dif === "Impossivel"){
                    jogada_centro(j)
                }
                if(j == 3){
                    jogada_linear()
                }

            }else{
                if(j == 3 && nivel_dif === "Complicado" || nivel_dif === "Impossivel"){
                    jogada_vitoria(j)
                }
                if(j == 3  && nivel_dif === "Impossivel"){
                    jogada_p1(j)
                }
                if(j == 3){
                    jogada_linear()
                }
            }

        }else if(contador == 5){
            contador += 1
            if(jogada.cinco === "O"){
                if(j == 5 && nivel_dif === "Complicado" || nivel_dif === "Impossivel"){
                    jogada_vitoria(j)
                }
                if(j == 5  && nivel_dif === "Impossivel"){
                    jogada_centro(j)
                }
                if(j == 5){
                    jogada_linear()
                }

            }else{
                if(j == 5 && nivel_dif === "Complicado" || nivel_dif === "Impossivel"){
                    jogada_vitoria(j)
                }
                if(j == 5  && nivel_dif === "Impossivel"){
                    jogada_p1(j)
                }
                if(j == 5){
                    jogada_linear()
                }
            }
            
        }else if(contador == 7){
            contador += 1
            if(jogada.cinco === "O"){
                if(j == 7 && nivel_dif === "Complicado" || nivel_dif === "Impossivel"){
                    jogada_vitoria(j)
                }
                if(j == 7  && nivel_dif === "Impossivel"){
                    jogada_centro(j)
                }
                if(j == 7){
                    jogada_linear()
                }

            }else{
                if(j == 7 && nivel_dif === "Complicado" || nivel_dif === "Impossivel"){
                    jogada_vitoria(j)
                }
                if(j == 7  && nivel_dif === "Impossivel"){
                    jogada_p1(j)
                }
                if(j == 7){
                    jogada_linear()
                }
            }

        }else if(contador == 9){
            contador += 1
            if(jogada.cinco === "O"){
                if(j == 9 && nivel_dif === "Complicado" || nivel_dif === "Impossivel"){
                    jogada_vitoria(j)
                }
                if(j == 9  && nivel_dif === "Impossivel"){
                    jogada_centro(j)
                }
                if(j == 9){
                    jogada_linear()
                }

            }else{
                if(j == 9 && nivel_dif === "Complicado" || nivel_dif === "Impossivel"){
                    jogada_vitoria(j)
                }
                if(j == 9  && nivel_dif === "Impossivel"){
                    jogada_p1(j)
                }
                if(j == 9){
                    jogada_linear()
                }
            }
            
        }
        
    }
}

//game, vitoria e derrota -------------------------------------------------------------------------------------------------------------

function vitoria_x(){
    if(jogada.um === "X" && jogada.dois === "X" && jogada.tres === "X"){
        return true

    }else if(jogada.quatro === "X" && jogada.cinco === "X" && jogada.seis === "X"){
        return true

    }else if(jogada.sete === "X" && jogada.oito === "X" && jogada.nove === "X"){
        return true

    }else if(jogada.um === "X" && jogada.quatro === "X" && jogada.sete === "X"){
        return true

    }else if(jogada.dois === "X" && jogada.cinco === "X" && jogada.oito === "X"){
        return true

    }else if(jogada.tres === "X" && jogada.seis === "X" && jogada.nove === "X"){
        return true

    }else if(jogada.um === "X" && jogada.cinco === "X" && jogada.nove === "X"){
        return true

    }else if(jogada.tres === "X" && jogada.cinco === "X" && jogada.sete === "X"){
        return true

    }else{
        return false
    }
}
function vitoria_o(){
    if(jogada.um === "O" && jogada.dois === "O" && jogada.tres === "O"){
        return true

    }else if(jogada.quatro === "O" && jogada.cinco === "O" && jogada.seis === "O"){
        return true

    }else if(jogada.sete === "O" && jogada.oito === "O" && jogada.nove === "O"){
        return true

    }else if(jogada.um === "O" && jogada.quatro === "O" && jogada.sete === "O"){
        return true

    }else if(jogada.dois === "O" && jogada.cinco === "O" && jogada.oito === "O"){
        return true

    }else if(jogada.tres === "O" && jogada.seis === "O" && jogada.nove === "O"){
        return true

    }else if(jogada.um === "O" && jogada.cinco === "O" && jogada.nove === "O"){
        return true

    }else if(jogada.tres === "O" && jogada.cinco === "O" && jogada.sete === "O"){
        return true

    }else{
        return false
    }
}

function empate(){
    if(
        jogada.um == null ||
        jogada.dois == null ||
        jogada.tres == null ||
        jogada.quatro == null ||
        jogada.cinco == null ||
        jogada.seis == null ||
        jogada.sete == null ||
        jogada.oito == null ||
        jogada.nove == null
    ){
        return false
    }else{
        return true
    }
}

function game(){
    
    if(vitoria_o() == true){
        res.innerHTML = `Derrota!`
        jogada.um = null
        jogada.dois = null
        jogada.tres = null
        jogada.quatro = null
        jogada.cinco = null
        jogada.seis = null
        jogada.sete = null
        jogada.oito = null
        jogada.nove = null

        p1.innerText=''
        p2.innerText=''
        p3.innerText=''
        p4.innerText=''
        p5.innerText=''
        p6.innerText=''
        p7.innerText=''
        p8.innerText=''
        p9.innerText=''
        res.innerHTML += `<br>O jogo já pode ser jogado novamente`
        contador = 0
        j = 0

        fundo.style.backgroundColor="DarkRed"
        


    } else if (vitoria_x() == true){
        res.innerHTML = `Vitória!`
        jogada.um = null
        jogada.dois = null
        jogada.tres = null
        jogada.quatro = null
        jogada.cinco = null
        jogada.seis = null
        jogada.sete = null
        jogada.oito = null
        jogada.nove = null

        p1.innerText=''
        p2.innerText=''
        p3.innerText=''
        p4.innerText=''
        p5.innerText=''
        p6.innerText=''
        p7.innerText=''
        p8.innerText=''
        p9.innerText=''
        res.innerHTML += `<br>O jogo já pode ser jogado novamente`
        contador = 0
        j = 0

        fundo.style.backgroundColor="Gold"
       


    } else if(empate() == true){
        res.innerHTML = `Empate!`
        jogada.um = null
        jogada.dois = null
        jogada.tres = null
        jogada.quatro = null
        jogada.cinco = null
        jogada.seis = null
        jogada.sete = null
        jogada.oito = null
        jogada.nove = null

        p1.innerText=''
        p2.innerText=''
        p3.innerText=''
        p4.innerText=''
        p5.innerText=''
        p6.innerText=''
        p7.innerText=''
        p8.innerText=''
        p9.innerText=''
        res.innerHTML += `<br>O jogo já pode ser jogado novamente`
        contador = 0
        j = 0
        fundo.style.backgroundColor="Darkblue"
        

    }else{
        res.innerHTML = "Tente vencer se for capaz!"
        fundo.style.backgroundColor="rgb(20, 20, 20)"
        
    }

}