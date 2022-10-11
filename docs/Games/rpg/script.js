var tela = document.getElementById('tela')

var player_parametros = {
    vida: 0,
    ataque: 0,
    defesa: 0,
    especial: 0
}
var player = document.getElementById('player');
var andar_x = 50;
var andar_y = 50;

function movimento(event){
    var andar = event.code;

    if(andar == 'KeyA' && andar_y > 1){
        andar_y += -1
        player.style.left = `${andar_y}%`;
        movimento_inimigo1()

    }else if(andar == 'KeyD' && andar_y < 99){
        andar_y += 1
        player.style.left = `${andar_y}%`;
        criar_inimigo1()

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

function criar_inimigo1(){
    let criar_inimigo = document.createElement("div")
    criar_inimigo.className = 'inimigo1'
    tela.appendChild(criar_inimigo)
}

function movimento_inimigo1(){
    let ale = Math.floor(Math.random()*99)

    let inimigo1 = document.querySelector('div.inimigo1')
    let inimigo1_x = 50
    let inimigo1_y = 50
    
    if(ale <= 25 && inimigo1_y > 1){
        inimigo1_y += -1
        inimigo1.style.left = `${inimigo1_y}%`;

    }else if(ale <= 50 && inimigo1_y < 99){
        inimigo1_y += 1
        inimigo1.style.left = `${inimigo1_y}%`;

    }else if(ale <= 75 && inimigo1_x > 2){
        inimigo1_x += -1
        inimigo1.style.top =`${inimigo1_x}%`

    }else if(ale <= 100 && inimigo1_x < 98){
        inimigo1_x += 1
        inimigo1.style.top =`${inimigo1_x}%`

    };
}