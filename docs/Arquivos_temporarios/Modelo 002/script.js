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

function teste_enter(event){
    event = event || window.event;
    var x = event.keyCode || event.which;
    if(x == 13){
        pesquisar()
    }
}

function pesquisar(){
    let p = document.getElementById("pesquisa")
    p = String(p.value)
    p = p.toLowerCase();

    if (p == "ingressos" || p == "ingresso" || p == "ingress" || p == "ingres" || p == "ingre"){
        window.location.href = 'pag_ingressos.html'

    }else if(p == "circuito" || p == "circuit" || p == "circui" || p == "circu" || p == "circ"){
        window.location.href = 'pag_circuito.html'

    }else if(p == "equipes" || p == "equipe" || p == "equip" || p == "equi" || p == "equ"){
        window.location.href = 'pag_equipes.html'

    }else if(p == "pilotos" || p == "piloto" || p == "pilot" || p == "pilo" || p == "pil"){
        window.location.href = 'pag_pilotos.html'

    }else if(p == "marcas" || p == "marca" || p == "marc" || p == "mar"){
        window.location.href = 'pag_marcas.html'

    }else if(p == "shopping" || p == "shoppin" || p == "shoppi" || p == "shopp" || p == "shop"){
        window.location.href = 'pag_shopping.html'

    }else if(p == "caixa" || p == "caix" || p == "cai"){
        window.location.href = 'pag_caixa.html'

    }else if(p == "lógica" || p == "lógic" || p == "lógi" || p == "logica" || p == "logic" || p == "logi"){
        window.location.href = 'pag_logica.html'

    }else if(p == "dados+" || p == "dados" || p == "dado" || p == "dad"){
        window.location.href = 'pag_dados.html'

    }else{
        alert("Pesquisa invalida! Digite corretamente.")
    }
}