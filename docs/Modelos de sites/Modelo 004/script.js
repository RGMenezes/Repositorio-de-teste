var img = document.querySelector('section#imagem')
var contador_img = 1

function mudar_imagem(){
    if(contador_img == 1){
        img.style.backgroundImage = 'url(imagem/banner-2.png)'
        contador_img = 2

    }else if(contador_img == 2){
        img.style.backgroundImage = 'url(imagem/banner-3.png)'
        contador_img = 3

    }else if(contador_img == 3){
        img.style.backgroundImage = 'url(imagem/banner-4.png)'
        contador_img = 4

    }else if(contador_img == 4){
        img.style.backgroundImage = 'url(imagem/banner-5.png)'
        contador_img = 5

    }else if(contador_img == 5){
        img.style.backgroundImage = 'url(imagem/banner-1.png)'
        contador_img = 1
    }else{
        alert('[ERRO]1')
        contador_img = 1
    }
}
setInterval(mudar_imagem, 5000)

setTimeout(alerta_imagens, 3000)

function alerta_imagens(){
    alert('[Alerta] Direitos autorais: Todas as imagens contidas nesse site foram retiradas de templates gratuitas do canva.')
}