// mudar tema

function tema(){
    let corpo = document.querySelector('body')
    let claro_escuro = getComputedStyle(corpo).getPropertyValue('--cor-letra')
    
    let cor1 = "#e39ec1"
    let cor2 = "#77567a"
    let cor3 = "#C47AC0"
    let cor4 = "#004643"
    let cor_letra = 'white'
    let cor_bk = "#0c1618"

    if(claro_escuro == 'black'){
        document.body.style.setProperty('--cor1', cor1)
        document.body.style.setProperty('--cor2', cor2)
        document.body.style.setProperty('--cor3', cor3)
        document.body.style.setProperty('--cor4', cor4)
        document.body.style.setProperty('--cor-letra', cor_letra)
        document.body.style.setProperty('--cor-bk', cor_bk)

    }if(claro_escuro == 'white'){
        document.body.style.setProperty('--cor1','#BAFF29')
        document.body.style.setProperty('--cor2',' #1A1B41')
        document.body.style.setProperty('--cor3', '#c2e7da')
        document.body.style.setProperty('--cor4', '#6290c3')
        document.body.style.setProperty('--cor-letra', 'black')
        document.body.style.setProperty('--cor-bk', 'rgb(255, 255, 255)')

    }else{
        document.body.style.setProperty('--cor1', cor1)
        document.body.style.setProperty('--cor2', cor2)
        document.body.style.setProperty('--cor3', cor3)
        document.body.style.setProperty('--cor4', cor4)
        document.body.style.setProperty('--cor-letra', cor_letra)
        document.body.style.setProperty('--cor-bk', cor_bk)
    }
}


//colocar conteúdo
var iframe = document.getElementById('conteudo')
var frame = 0

function proximo_c(){

    if(frame == 0){
        iframe.src = "pag_plus.html"
        frame = 1

    }else if(frame == 1){
        iframe.src = "pag_extra.html"
        frame = 2

    }else if(frame == 2){
        iframe.src = "pag_principal.html"
        frame = 0
    }else{
        alert("[ERRO]_Não foi possivel ativar este comando.")
    }

}
function voltar_c(){

    if(frame == 0){
        iframe.src = "pag_extra.html"
        frame = 2

    }else if(frame == 2){
        iframe.src = "pag_plus.html"
        frame = 1

    }else if(frame == 1){
        iframe.src = "pag_principal.html"
        frame = 0
    }else{
        alert("[ERRO]_Não foi possivel ativar este comando.")
    }

}