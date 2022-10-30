// mudar tema

function tema(){
    let corpo = document.querySelector('body')
    let claro_escuro = getComputedStyle(corpo).getPropertyValue('--cor-letra')
    
    if(claro_escuro == 'black'){// ver cores melhores para a parte escura(apagar essa mensagem!!!)
        document.body.style.setProperty('--cor1','#c5f4e0')
        document.body.style.setProperty('--cor2',' #a7c4a0')
        document.body.style.setProperty('--cor3', '#8f8389')
        document.body.style.setProperty('--cor4', '#c2eaba')
        document.body.style.setProperty('--cor-letra', 'white')
        document.body.style.setProperty('--cor-bk', 'black')

    }if(claro_escuro == 'white'){
        document.body.style.setProperty('--cor1','#BAFF29')
        document.body.style.setProperty('--cor2',' #1A1B41')
        document.body.style.setProperty('--cor3', '#c2e7da')
        document.body.style.setProperty('--cor4', '#6290c3')
        document.body.style.setProperty('--cor-letra', 'black')
        document.body.style.setProperty('--cor-bk', 'rgb(255, 255, 255)')

    }else{
        document.body.style.setProperty('--cor1','#c5f4e0')
        document.body.style.setProperty('--cor2',' #a7c4a0')
        document.body.style.setProperty('--cor3', '#8f8389')
        document.body.style.setProperty('--cor4', '#c2eaba')
        document.body.style.setProperty('--cor-letra', 'white')
        document.body.style.setProperty('--cor-bk', 'black')
    }
}