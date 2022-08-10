var itens = document.getElementsByClassName("itens")

function itens_de_pesquisa(){
    let p = document.getElementById("pesquisa").value
    let lista_p = document.getElementById("lista_p")
    p = p.toLowerCase();
    for( i = 0; i <= itens.length; i++){
        if (!itens[i].innerHTML.toLowerCase().includes(p)){
            itens[i].style.display="none";
            lista_p.style.display ="list-item";
        }else {
            itens[i].style.display="list-item";
            lista_p.style.display ="list-item";                 
        }
        if (p.length == 0){
            lista_p.style.display ="none";  
        }
    }
    
}

function pesquisar(){
    let p = document.getElementById("pesquisa")
    p = String(p.value)
    p = p.toLowerCase();
    if (p == "ingressos"){
        
    }
}