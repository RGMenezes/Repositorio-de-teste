var player = document.getElementById('player');
var andar_x = 50;
var andar_y = 50;

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