var tela = document.getElementById('tela')
var criar_inimigo = document.createElement("div")
criar_inimigo.className = 'inimigo1'
tela.appendChild(criar_inimigo)

setInterval(movimento_inimigo1, 100)

var player_parametros = {
    vida: 0,
    ataque: 0,
    defesa: 0,
    especial: 0
}
var player = document.getElementById('player');
var andar_x = 50;
var andar_y = 50;

var inimigo1 = document.querySelector('div.inimigo1')
var inimigo1_x = 50
var inimigo1_y = 10

function movimento(event){
    var andar = event.code;

    if(andar == 'KeyA' && andar_y > 1){
        andar_y += -1
        player.style.left = `${andar_y}%`;

    }else if(andar == 'KeyD' && andar_y < 99){
        andar_y += 1
        player.style.left = `${andar_y}%`;

    }else if(andar == 'KeyW' && andar_x > 2){
        andar_x += -1
        player.style.top =`${andar_x}%`

    }else if(andar == 'KeyS' && andar_x < 98){
        andar_x += 1
        player.style.top =`${andar_x}%`

    };
};

function morte(){
    if(player_parametros.vida <= 0){
        player.style.animation = `morte 3s forwards`
    }
}

function movimento_inimigo1(){

    var dados = document.getElementById('dados')

    inimigo1.style.left = `${inimigo1_y}%`;
    inimigo1.style.top =`${inimigo1_x}%`
    
    if(Math.abs(andar_x - inimigo1_x) <= 4 && Math.abs(andar_y - inimigo1_y) <= 2){
        morte()

    }else if(andar_y < inimigo1_y && inimigo1_y > 1){
        inimigo1_y += -1
        inimigo1.style.left = `${inimigo1_y}%`;

    }else if(andar_y > inimigo1_y && inimigo1_y < 99){
        inimigo1_y += 1
        inimigo1.style.left = `${inimigo1_y}%`;

    }else if(andar_x < inimigo1_x && inimigo1_x > 2){
        inimigo1_x += -1
        inimigo1.style.top =`${inimigo1_x}%`

    }else if(andar_x > inimigo1_x && inimigo1_x < 98){
        inimigo1_x += 1
        inimigo1.style.top =`${inimigo1_x}%`

    }else{
        morte()
    };

    dados.innerHTML= `
    Distancia Y ${Math.abs(andar_y - inimigo1_y)}, X ${Math.abs(andar_x - inimigo1_x)}. andar Y ${andar_y}, X ${andar_x}. inimigo1 Y ${inimigo1_y}, X ${inimigo1_x}.`
}