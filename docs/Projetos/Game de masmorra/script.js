//entradas
var np = document.getElementById('nome-p')
var ep = document.getElementById('exp-p')
var vp = document.getElementById('vida-p')
var ap = document.getElementById('ataque-p')
var dp = document.getElementById('defesa-p')

var ni = document.getElementById('nome-i')
var ei = document.getElementById('exp-i')
var vi = document.getElementById('vida-i')
var ai = document.getElementById('ataque-i')
var di = document.getElementById('defesa-i')

var intencao = document.querySelector('span#intencao')
var movp = document.getElementById('movp')
var movi = document.getElementById('movi')


var narrar = document.querySelector('div#narrar')
var cont_ataque = 0
var cont_defesa = 0

var sim = document.getElementById('sim')
var nao = document.getElementById('nao')
var si = document.querySelector('div.si')
var no = document.querySelector('div.no')
sim.addEventListener('click', opcao1)
nao.addEventListener('click', opcao2)
var decisao_tomada = ''

var andar = document.getElementById('andar')

//personagem e inimigos
var personagem = {
    nome: 'Demétrio',
    experiencia: 10,
    vida: 100,
    ataque: 10,
    defesa: 15
}

var inimigo = {
    nome: 'Ninguém',
    experiencia: 0,
    vida: 0,
    ataque: 0,
    defesa: 0
}

function inimigo_nome(x){
    if(x <= 3){
        return 'Slime'
    }else if(x <= 5){
        return 'Rato'
    }else if(x <= 7){
        return 'Lagarto'
    }else if(x <= 9){
        return 'Javali'
    }else if(x <= 10){
        return 'Lobo'
    }else if(x <= 13){
        return 'Morango vivo'
    }else if(x <= 15){
        return 'Couve com escudo'
    }else if(x <= 17){
        return 'Capim espada'
    }else if(x <= 19){
        return 'Girasol bodybuild'
    }else if(x <= 20){
        return 'Tronco seco'
    }else if(x <= 23){
        return 'Goblin'
    }else if(x <= 25){
        return 'Zumbi'
    }else if(x <= 27){
        return 'Mago'
    }else if(x <= 29){
        return 'Golem de pedra'
    }else if(x <= 30){
        return 'Troll'
    }
};
function inimigo_experiencia(x){
    if(x <= 3){
        return 1
    }else if(x <= 5){
        return 1
    }else if(x <= 7){
        return 3
    }else if(x <= 9){
        return 5
    }else if(x <= 10){
        return 7
    }else if(x <= 13){
        return 11
    }else if(x <= 15){
        return 12
    }else if(x <= 17){
        return 14
    }else if(x <= 19){
        return 16
    }else if(x <= 20){
        return 19
    }else if(x <= 23){
        return 21
    }else if(x <= 25){
        return 23
    }else if(x <= 27){
        return 24
    }else if(x <= 29){
        return 27
    }else if(x <= 30){
        return 28
    }
};
function inimigo_vida(x){
    if(x <= 3){
        return 15
    }else if(x <= 5){
        return 20
    }else if(x <= 7){
        return 30
    }else if(x <= 9){
        return 40
    }else if(x <= 10){
        return 60
    }else if(x <= 13){
        return 100
    }else if(x <= 15){
        return 150
    }else if(x <= 17){
        return 150
    }else if(x <= 19){
        return 170
    }else if(x <= 20){
        return 190
    }else if(x <= 23){
        return 300
    }else if(x <= 25){
        return 250
    }else if(x <= 27){
        return 200
    }else if(x <= 29){
        return 400
    }else if(x <= 30){
        return 500
    }
};
function inimigo_ataque(x){
    if(x <= 3){
        return 2
    }else if(x <= 5){
        return 2
    }else if(x <= 7){
        return 3
    }else if(x <= 9){
        return 5
    }else if(x <= 10){
        return 10
    }else if(x <= 13){
        return 12
    }else if(x <= 15){
        return 12
    }else if(x <= 17){
        return 20
    }else if(x <= 19){
        return 20
    }else if(x <= 20){
        return 25
    }else if(x <= 23){
        return 30
    }else if(x <= 25){
        return 40
    }else if(x <= 27){
        return 60
    }else if(x <= 29){
        return 30
    }else if(x <= 30){
        return 35
    }
};
function inimigo_defesa(x){
    if(x <= 3){
        return 2
    }else if(x <= 5){
        return 4
    }else if(x <= 7){
        return 5
    }else if(x <= 9){
        return 8
    }else if(x <= 10){
        return 6
    }else if(x <= 13){
        return 13
    }else if(x <= 15){
        return 20
    }else if(x <= 17){
        return 10
    }else if(x <= 19){
        return 15
    }else if(x <= 20){
        return 20
    }else if(x <= 23){
        return 30
    }else if(x <= 25){
        return 45
    }else if(x <= 27){
        return 30
    }else if(x <= 29){
        return 60
    }else if(x <= 30){
        return 70
    }
};

np.innerHTML=`${personagem.nome}`
ep.innerHTML=`${personagem.experiencia}`
vp.innerHTML=`${personagem.vida}`
ap.innerHTML=`${personagem.ataque}`
dp.innerHTML=`${personagem.defesa}`

ni.innerHTML=`${inimigo.nome}`
ei.innerHTML=`${inimigo.experiencia}`
vi.innerHTML=`${inimigo.vida}`
ai.innerHTML=`${inimigo.ataque}`
di.innerHTML=`${inimigo.defesa}`

//sistemas
function sorte(){
    let sorte = Math.floor(Math.random() * 99+1)
    return sorte
}

function randon(){//decisão ia (randon <= 50 ia ataca)
    let cont = cont_ataque - cont_defesa
    if(cont_ataque == cont_defesa){
        let ale = Math.floor(Math.random()*99+1)
        return ale
    }else if(cont_ataque < cont_defesa && cont == -1){
        let ale = Math.floor(Math.random()*149+1)
        return ale
    }else if(cont_ataque < cont_defesa && cont <= -3){
        let ale = Math.floor(Math.random()*199+1)
        return ale
    }else if(cont_ataque < cont_defesa && cont > -3){
        let ale = Math.floor(Math.random()*199+1)
        return ale
    }else if(cont_ataque > cont_defesa && cont == 1){
        let ale = Math.floor(Math.random()*86+1)
        return ale
    }else if(cont_ataque > cont_defesa && cont <= 3){
        let ale = Math.floor(Math.random()*74+1)
        return ale
    }else if(cont_ataque > cont_defesa && cont > 3){
        let ale = Math.floor(Math.random()*61+1)
        return ale
    }else{
        let ale = Math.floor(Math.random()*99+1)
        return ale
    }
};

function momento(){
    if(inimigo.vida <= 0 || personagem.vida <= 0)
    return 'true'
};

function opcao1(){

    decisao_tomada = 'verdadeiro'
    narrar.innerHTML = "Aperte em avançar."
    no.innerHTML=""
    si.innerHTML=""
    
};
function opcao2(){

    decisao_tomada = 'falso'
    narrar.innerHTML ="Aperte em avançar."
    no.innerHTML=""
    si.innerHTML=""
    
};

//comandos
function ataque(){
    if(momento()=='true'){
        alert('Você não está em combate! Ataque negado.')
    }else{
        if(randon() <= 50){
            let ataque_personagem = inimigo.vida - personagem.ataque
            let ataque_inimigo = personagem.vida - inimigo.ataque
            inimigo.vida = ataque_personagem
            personagem.vida = ataque_inimigo

            movp.innerHTML="Atacou..."
            movi.innerHTML="Atacou..."

            if(inimigo.vida <= 0){
                inimigo.vida = 0
                movi.innerHTML = `Morto...`
            }
            if(personagem.vida <= 0){
                personagem.vida = 0
            }

            cont_ataque += 1
            
                np.innerHTML=`${personagem.nome}`
                ep.innerHTML=`${personagem.experiencia}`
                vp.innerHTML=`${personagem.vida}`
                ap.innerHTML=`${personagem.ataque}`
                dp.innerHTML=`${personagem.defesa}`
                
                ni.innerHTML=`${inimigo.nome}`
                ei.innerHTML=`${inimigo.experiencia}`
                vi.innerHTML=`${inimigo.vida}`
                ai.innerHTML=`${inimigo.ataque}`
                di.innerHTML=`${inimigo.defesa}`

        }else{
            let ataque_personagem = inimigo.defesa - personagem.ataque
            inimigo.vida = inimigo.vida + ataque_personagem

            movp.innerHTML="Atacou..."
            movi.innerHTML="Defendeu..."

            if(inimigo.vida <= 0){
                inimigo.vida = 0
                movi.innerHTML = `Morto...`
            }

            cont_ataque += 1
            
            np.innerHTML=`${personagem.nome}`
            ep.innerHTML=`${personagem.experiencia}`
            vp.innerHTML=`${personagem.vida}`
            ap.innerHTML=`${personagem.ataque}`
            dp.innerHTML=`${personagem.defesa}`

            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`
        }
    }
    var int = cont_ataque - cont_defesa

    if(cont_ataque == cont_defesa){
        intencao.innerHTML="Neutro"
    }else if(int == -1){
        intencao.innerHTML="+ defesa +"
    }else if(int >= -3 && int <-1){
        intencao.innerHTML="++ defesa ++"   
    }else if(int <= -3){
        intencao.innerHTML="+++ defesa +++"
    }else if(int == 1){
        intencao.innerHTML="+ ataque +"
    }else if(int <= 3 && int >= 1){
        intencao.innerHTML="++ ataque ++"   
    }else if(int > 3){
        intencao.innerHTML="+++ ataque +++"
    }

};
function defesa(){

    if(momento() == 'true'){
        alert('Você não está em combate! Defesa negada.')
    }else{
        if(randon() <= 50){
            let ataque_inimigo = personagem.defesa - inimigo.ataque

            movp.innerHTML="Defendeu..."
            movi.innerHTML="Atacou..."

            cont_defesa += 1
            var def_exagerada = cont_ataque - cont_defesa

            if(def_exagerada <= -4){
                narrar.innerHTML=`Por conta do seu movimento repetitivo ${inimigo.nome} antecipa a sua defesa!`
                personagem.vida = personagem.vida - inimigo.ataque
            }else{
                personagem.vida = personagem.vida + ataque_inimigo
            }
            if(personagem.vida <= 0){
                personagem.vida = 0
                movi.innerHTML = `Morto...`
            }

            np.innerHTML=`${personagem.nome}`
            ep.innerHTML=`${personagem.experiencia}`
            vp.innerHTML=`${personagem.vida}`
            ap.innerHTML=`${personagem.ataque}`
            dp.innerHTML=`${personagem.defesa}`

            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`

        }else{
            movp.innerHTML="Defendeu..."
            movi.innerHTML="Defendeu..."
            cont_defesa += 1

            np.innerHTML=`${personagem.nome}`
            ep.innerHTML=`${personagem.experiencia}`
            vp.innerHTML=`${personagem.vida}`
            ap.innerHTML=`${personagem.ataque}`
            dp.innerHTML=`${personagem.defesa}`
            
            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`
        }
    }
    var int = cont_ataque - cont_defesa

    if(cont_ataque == cont_defesa){
        intencao.innerHTML="Neutro"
    }else if(int == -1){
        intencao.innerHTML="+ defesa +"
    }else if(int >= -3 && int <-1){
        intencao.innerHTML="++ defesa ++"   
    }else if(int <= -3){
        intencao.innerHTML="+++ defesa +++"
    }else if(int == 1){
        intencao.innerHTML="+ ataque +"
    }else if(int <= 3 && int >= 1){
        intencao.innerHTML="++ ataque ++"   
    }else if(int > 3){
        intencao.innerHTML="+++ ataque +++"
    }
};

//história
var contador = 1
function avancar(){
//chamar inimigo
var inimigo_level_1 = Math.floor(Math.random()*9+1)
var inimigo_level_2 = Math.floor(Math.random()*9+11)
var inimigo_level_3 = Math.floor(Math.random()*9+21)
var inimigo_level_4 = Math.floor(Math.random()*9+31)
var inimigo_level_5 = Math.floor(Math.random()*9+41)
var inimigo_level_6 = Math.floor(Math.random()*9+51)

    if(inimigo.vida <= 0 && personagem.vida >0){
        
        intencao.innerHTML=""
        cont_ataque = 0
        cont_defesa = 0
        andar.innerHTML= `${contador}`
        
        //nivel 1 - 10
        if(contador <= 1){
            narrar.innerHTML=`A sua jornada COMEÇA!!!`
            contador += 1


        }else if(contador == 2){
            contador += 1
            inimigo.nome = inimigo_nome(inimigo_level_1)
            inimigo.experiencia = inimigo_experiencia(inimigo_level_1)
            inimigo.vida = inimigo_vida(inimigo_level_1)
            inimigo.ataque = inimigo_ataque(inimigo_level_1)
            inimigo.defesa = inimigo_defesa(inimigo_level_1)
            narrar.innerHTML=`${inimigo.nome} aparece.`
            
            np.innerHTML=`${personagem.nome}`
            ep.innerHTML=`${personagem.experiencia}`
            vp.innerHTML=`${personagem.vida}`
            ap.innerHTML=`${personagem.ataque}`
            dp.innerHTML=`${personagem.defesa}`
            
            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`


        }else if(contador == 3){
            
            inimigo = {
                nome: 'Ninguém',
                experiencia: 0,
                vida: 0,
                ataque: 0,
                defesa: 0
            }
            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`

            narrar.innerHTML="Andando pela masmorra você encontra uma passagem estranha..."
            si.innerHTML = "Entrar, 10% de chance de pular 2 andares."
            no.innerHTML = "Ignorar e continuar."
            if(decisao_tomada === 'verdadeiro'){
                if(sorte() <= 10){
                    si.innerHTML = ""
                    no.innerHTML = ""
                    contador += 3
                    narrar.innerHTML = `Hoje é seu dia de sorte! 2 andares foram pulados.`
                }else{
                    si.innerHTML = ""
                    no.innerHTML = ""
                    contador += 1
                    inimigo.nome = inimigo_nome(inimigo_level_1)
                    inimigo.experiencia = inimigo_experiencia(inimigo_level_1)
                    inimigo.vida = inimigo_vida(inimigo_level_1)
                    inimigo.ataque = inimigo_ataque(inimigo_level_1)
                    inimigo.defesa = inimigo_defesa(inimigo_level_1)
                    narrar.innerHTML =`Que azar! ${inimigo.nome} apareceu antes de você entrar pela passagem, que se perde na escuridão!`
                    
                    np.innerHTML=`${personagem.nome}`
                    ep.innerHTML=`${personagem.experiencia}`
                    vp.innerHTML=`${personagem.vida}`
                    ap.innerHTML=`${personagem.ataque}`
                    dp.innerHTML=`${personagem.defesa}`
                    
                    ni.innerHTML=`${inimigo.nome}`
                    ei.innerHTML=`${inimigo.experiencia}`
                    vi.innerHTML=`${inimigo.vida}`
                    ai.innerHTML=`${inimigo.ataque}`
                    di.innerHTML=`${inimigo.defesa}`
                }
            }else if(decisao_tomada === 'falso'){
                contador += 1
                si.innerHTML = ""
                no.innerHTML = ""
                narrar.innerHTML= "Você ignora e segue seu caminho."
            }else{
                alert(`Escolha uma opção!`)
            }



        }else if(contador == 4){
            contador += 1
            inimigo.nome = inimigo_nome(inimigo_level_1)
            inimigo.experiencia = inimigo_experiencia(inimigo_level_1)
            inimigo.vida = inimigo_vida(inimigo_level_1)
            inimigo.ataque = inimigo_ataque(inimigo_level_1)
            inimigo.defesa = inimigo_defesa(inimigo_level_1)
            narrar.innerHTML=`${inimigo.nome} aparece.`
            
            np.innerHTML=`${personagem.nome}`
            ep.innerHTML=`${personagem.experiencia}`
            vp.innerHTML=`${personagem.vida}`
            ap.innerHTML=`${personagem.ataque}`
            dp.innerHTML=`${personagem.defesa}`
            
            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`



        }else if(contador == 5){
            inimigo = {
                nome: 'Ninguém',
                experiencia: 0,
                vida: 0,
                ataque: 0,
                defesa: 0
            }
            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`

            narrar.innerHTML="Andando pela masmorra um pequeno brilho aparece no meio da escuridão..."
            si.innerHTML = "Investigar, 30% de chance de achar um item raro."
            no.innerHTML = "Ignorar e continuar."
            if(decisao_tomada === 'verdadeiro'){
                if(sorte() <= 30){
                    si.innerHTML = ""
                    no.innerHTML = ""
                    contador += 1
                    personagem.ataque += 5
                    narrar.innerHTML = `Que sorte! Você acha uma espada dourada e ganha +5 de ataque.`
                    np.innerHTML=`${personagem.nome}`
                    ep.innerHTML=`${personagem.experiencia}`
                    vp.innerHTML=`${personagem.vida}`
                    ap.innerHTML=`${personagem.ataque}`
                    dp.innerHTML=`${personagem.defesa}`
                }else{
                    si.innerHTML = ""
                    no.innerHTML = ""
                    contador += 1
                    inimigo.nome = inimigo_nome(inimigo_level_1)
                    inimigo.experiencia = inimigo_experiencia(inimigo_level_1)
                    inimigo.vida = inimigo_vida(inimigo_level_1)
                    inimigo.ataque = inimigo_ataque(inimigo_level_1)
                    inimigo.defesa = inimigo_defesa(inimigo_level_1)
                    narrar.innerHTML =`Que azar! ${inimigo.nome} apareceu!`
                    
                    np.innerHTML=`${personagem.nome}`
                    ep.innerHTML=`${personagem.experiencia}`
                    vp.innerHTML=`${personagem.vida}`
                    ap.innerHTML=`${personagem.ataque}`
                    dp.innerHTML=`${personagem.defesa}`
                    
                    ni.innerHTML=`${inimigo.nome}`
                    ei.innerHTML=`${inimigo.experiencia}`
                    vi.innerHTML=`${inimigo.vida}`
                    ai.innerHTML=`${inimigo.ataque}`
                    di.innerHTML=`${inimigo.defesa}`
                }
            }else if(decisao_tomada === 'falso'){
                contador += 1
                si.innerHTML = ""
                no.innerHTML = ""
                narrar.innerHTML= "Você ignora e segue seu caminho."
            }else{
                alert(`Escolha uma opção!`)
            }

            
        }else if(contador == 6){
            contador += 1
            inimigo.nome = inimigo_nome(inimigo_level_1)
            inimigo.experiencia = inimigo_experiencia(inimigo_level_1)
            inimigo.vida = inimigo_vida(inimigo_level_1)
            inimigo.ataque = inimigo_ataque(inimigo_level_1)
            inimigo.defesa = inimigo_defesa(inimigo_level_1)
            narrar.innerHTML=`${inimigo.nome} aparece.`
            
            np.innerHTML=`${personagem.nome}`
            ep.innerHTML=`${personagem.experiencia}`
            vp.innerHTML=`${personagem.vida}`
            ap.innerHTML=`${personagem.ataque}`
            dp.innerHTML=`${personagem.defesa}`
            
            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`


        }else if(contador == 7){
            contador += 1
            inimigo.nome = inimigo_nome(inimigo_level_1)
            inimigo.experiencia = inimigo_experiencia(inimigo_level_1)
            inimigo.vida = inimigo_vida(inimigo_level_1)
            inimigo.ataque = inimigo_ataque(inimigo_level_1)
            inimigo.defesa = inimigo_defesa(inimigo_level_1)
            narrar.innerHTML=`${inimigo.nome} aparece.`
            
            np.innerHTML=`${personagem.nome}`
            ep.innerHTML=`${personagem.experiencia}`
            vp.innerHTML=`${personagem.vida}`
            ap.innerHTML=`${personagem.ataque}`
            dp.innerHTML=`${personagem.defesa}`
            
            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`


        }else if(contador == 8){
            contador += 1
            inimigo.nome = inimigo_nome(inimigo_level_1)
            inimigo.experiencia = inimigo_experiencia(inimigo_level_1)
            inimigo.vida = inimigo_vida(inimigo_level_1)
            inimigo.ataque = inimigo_ataque(inimigo_level_1)
            inimigo.defesa = inimigo_defesa(inimigo_level_1)
            narrar.innerHTML=`${inimigo.nome} aparece.`
            
            np.innerHTML=`${personagem.nome}`
            ep.innerHTML=`${personagem.experiencia}`
            vp.innerHTML=`${personagem.vida}`
            ap.innerHTML=`${personagem.ataque}`
            dp.innerHTML=`${personagem.defesa}`
            
            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`


        }else if(contador == 9){
            inimigo = {
                nome: 'Ninguém',
                experiencia: 0,
                vida: 0,
                ataque: 0,
                defesa: 0
            }
            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`

            narrar.innerHTML="Por algum motivo uma sensação aterrorizante permeia a sua mente, você começa a se preparar..."
            si.innerHTML = "Afiar espada, +15 ataque e +5 defesa."
            no.innerHTML = "Usar remédio, +30 vida e +10 defesa."
            if(decisao_tomada === 'verdadeiro'){
                si.innerHTML = ""
                no.innerHTML = ""
                contador += 1
                personagem.ataque += 15
                personagem.defesa += 5
                narrar.innerHTML = `Ataque e defesa aumentados.`

                np.innerHTML=`${personagem.nome}`
                ep.innerHTML=`${personagem.experiencia}`
                vp.innerHTML=`${personagem.vida}`
                ap.innerHTML=`${personagem.ataque}`
                dp.innerHTML=`${personagem.defesa}`
            }else if(decisao_tomada === 'falso'){
                si.innerHTML = ""
                no.innerHTML = ""
                contador += 1
                personagem.vida += 30
                personagem.defesa += 10
                narrar.innerHTML = `Vida e defesa aumentados.`

                np.innerHTML=`${personagem.nome}`
                ep.innerHTML=`${personagem.experiencia}`
                vp.innerHTML=`${personagem.vida}`
                ap.innerHTML=`${personagem.ataque}`
                dp.innerHTML=`${personagem.defesa}`
            }else{
                alert(`Escolha uma opção!`)
            }

        

                    
        }else if(contador == 10){
            contador += 1
            inimigo.nome = 'Black Wolf'
            inimigo.experiencia = 10
            inimigo.vida = 200
            inimigo.ataque = 25
            inimigo.defesa = 20
            narrar.innerHTML=`Enquanto você caminha por esse andar algo te segue pelas sombras e DERREPENTE!!! O ${inimigo.nome} aparece.`
            
            np.innerHTML=`${personagem.nome}`
            ep.innerHTML=`${personagem.experiencia}`
            vp.innerHTML=`${personagem.vida}`
            ap.innerHTML=`${personagem.ataque}`
            dp.innerHTML=`${personagem.defesa}`
            
            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`


        }// nivel 11 a 20 -----------------------------------------------------------------------------------------------------

        else if (contador == 11){
            inimigo = {
                nome: 'Ninguém',
                experiencia: 0,
                vida: 0,
                ataque: 0,
                defesa: 0
            }
            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`

            narrar.innerHTML="PARABÉNS!!! Você derrotou o Black Wolf, faça a sua escolha para enfrentar os desafios dos andares da FLORESTA."
            si.innerHTML = "Pegar bau de madeira azul, +200 vida, +10 ataque e +10 defesa."
            no.innerHTML = "Pegar bau de madeira vermelha, +150 vida, +10 ataque e +15 defesa."
            if(decisao_tomada === 'verdadeiro'){
                si.innerHTML = ""
                no.innerHTML = ""
                contador += 1
                personagem.experiencia += 10
                personagem.vida += 200
                personagem.ataque += 10
                personagem.defesa += 10
                narrar.innerHTML = `Bau de madeira azul escolhido.`

                np.innerHTML=`${personagem.nome}`
                ep.innerHTML=`${personagem.experiencia}`
                vp.innerHTML=`${personagem.vida}`
                ap.innerHTML=`${personagem.ataque}`
                dp.innerHTML=`${personagem.defesa}`
            }else if(decisao_tomada === 'falso'){
                si.innerHTML = ""
                no.innerHTML = ""
                contador += 1
                personagem.vida += 150
                personagem.ataque += 10
                personagem.defesa += 15
                narrar.innerHTML = `Bau de madeira vermelha escolhido.`

                np.innerHTML=`${personagem.nome}`
                ep.innerHTML=`${personagem.experiencia}`
                vp.innerHTML=`${personagem.vida}`
                ap.innerHTML=`${personagem.ataque}`
                dp.innerHTML=`${personagem.defesa}`
            }else{
                alert(`Escolha uma opção!`)
            }

        

                    
        }else if(contador == 12)/*inimigo*/{
            contador += 1
            inimigo.nome = inimigo_nome(inimigo_level_2)
            inimigo.experiencia = inimigo_experiencia(inimigo_level_2)
            inimigo.vida = inimigo_vida(inimigo_level_2)
            inimigo.ataque = inimigo_ataque(inimigo_level_2)
            inimigo.defesa = inimigo_defesa(inimigo_level_2)
            narrar.innerHTML=`${inimigo.nome} aparece.`
            
            np.innerHTML=`${personagem.nome}`
            ep.innerHTML=`${personagem.experiencia}`
            vp.innerHTML=`${personagem.vida}`
            ap.innerHTML=`${personagem.ataque}`
            dp.innerHTML=`${personagem.defesa}`
            
            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`
            

        }else if(contador == 13)/*inimigo*/{
            contador += 1
            inimigo.nome = inimigo_nome(inimigo_level_2)
            inimigo.experiencia = inimigo_experiencia(inimigo_level_2)
            inimigo.vida = inimigo_vida(inimigo_level_2)
            inimigo.ataque = inimigo_ataque(inimigo_level_2)
            inimigo.defesa = inimigo_defesa(inimigo_level_2)
            narrar.innerHTML=`${inimigo.nome} aparece.`
            
            np.innerHTML=`${personagem.nome}`
            ep.innerHTML=`${personagem.experiencia}`
            vp.innerHTML=`${personagem.vida}`
            ap.innerHTML=`${personagem.ataque}`
            dp.innerHTML=`${personagem.defesa}`
            
            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`


        }else if(contador == 14)/*opção*/{
            inimigo = {
                nome: 'Ninguém',
                experiencia: 0,
                vida: 0,
                ataque: 0,
                defesa: 0
            }
            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`

            narrar.innerHTML="Andando entre as árvores, um barulho ecoa em meio ao matagal."
            si.innerHTML = "Investigar, 30% de chance de achar um item raro."
            no.innerHTML = "Ignorar e continuar."
            if(decisao_tomada === 'verdadeiro'){
                if(sorte() <= 30){
                    si.innerHTML = ""
                    no.innerHTML = ""
                    contador += 1
                    personagem.defesa += 10
                    narrar.innerHTML = `Que sorte! O barulho veio de um galho seco que caiu em um escudo, você ganha +10 de defesa.`
                    np.innerHTML=`${personagem.nome}`
                    ep.innerHTML=`${personagem.experiencia}`
                    vp.innerHTML=`${personagem.vida}`
                    ap.innerHTML=`${personagem.ataque}`
                    dp.innerHTML=`${personagem.defesa}`
                }else{
                    si.innerHTML = ""
                    no.innerHTML = ""
                    contador += 1
                    inimigo.nome = inimigo_nome(inimigo_level_2)
                    inimigo.experiencia = inimigo_experiencia(inimigo_level_2)
                    inimigo.vida = inimigo_vida(inimigo_level_2)
                    inimigo.ataque = inimigo_ataque(inimigo_level_2)
                    inimigo.defesa = inimigo_defesa(inimigo_level_2)
                    narrar.innerHTML =`Que azar! Era um ${inimigo.nome}!`
                    
                    np.innerHTML=`${personagem.nome}`
                    ep.innerHTML=`${personagem.experiencia}`
                    vp.innerHTML=`${personagem.vida}`
                    ap.innerHTML=`${personagem.ataque}`
                    dp.innerHTML=`${personagem.defesa}`
                    
                    ni.innerHTML=`${inimigo.nome}`
                    ei.innerHTML=`${inimigo.experiencia}`
                    vi.innerHTML=`${inimigo.vida}`
                    ai.innerHTML=`${inimigo.ataque}`
                    di.innerHTML=`${inimigo.defesa}`
                }
            }else if(decisao_tomada === 'falso'){
                contador += 1
                si.innerHTML = ""
                no.innerHTML = ""
                narrar.innerHTML= "Você ignora e segue seu caminho."
            }else{
                alert(`Escolha uma opção!`)
            }

            
        }else if(contador == 15)/*inimigo*/{
            contador += 1
            inimigo.nome = inimigo_nome(inimigo_level_2)
            inimigo.experiencia = inimigo_experiencia(inimigo_level_2)
            inimigo.vida = inimigo_vida(inimigo_level_2)
            inimigo.ataque = inimigo_ataque(inimigo_level_2)
            inimigo.defesa = inimigo_defesa(inimigo_level_2)
            narrar.innerHTML=`${inimigo.nome} aparece.`
            
            np.innerHTML=`${personagem.nome}`
            ep.innerHTML=`${personagem.experiencia}`
            vp.innerHTML=`${personagem.vida}`
            ap.innerHTML=`${personagem.ataque}`
            dp.innerHTML=`${personagem.defesa}`
            
            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`


        }else if(contador == 16)/*inimigo*/{
            contador += 1
            inimigo.nome = inimigo_nome(inimigo_level_2)
            inimigo.experiencia = inimigo_experiencia(inimigo_level_2)
            inimigo.vida = inimigo_vida(inimigo_level_2)
            inimigo.ataque = inimigo_ataque(inimigo_level_2)
            inimigo.defesa = inimigo_defesa(inimigo_level_2)
            narrar.innerHTML=`${inimigo.nome} aparece.`
            
            np.innerHTML=`${personagem.nome}`
            ep.innerHTML=`${personagem.experiencia}`
            vp.innerHTML=`${personagem.vida}`
            ap.innerHTML=`${personagem.ataque}`
            dp.innerHTML=`${personagem.defesa}`
            
            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`


        }else if(contador == 17)/*opção*/{
            inimigo = {
                nome: 'Ninguém',
                experiencia: 0,
                vida: 0,
                ataque: 0,
                defesa: 0
            }
            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`

            narrar.innerHTML="O seu caminho se divide em dois, uma escuridão assombra a esquerda e na direita uma nevoa intensa, qual lado você escolhe?"
            si.innerHTML = "Esquerda. +5 de ataque e +5 de defesa, encontrar inimigo."
            no.innerHTML = "Direita. +10 de ataque, encontrar inimigo."

            if(decisao_tomada === 'verdadeiro'){
                si.innerHTML = ""
                no.innerHTML = ""
                contador += 1
                personagem.defesa += 5
                personagem.ataque += 5
                narrar.innerHTML = `Caminho escolido, +5 de ataque e +5 de defesa. `

                inimigo.nome = inimigo_nome(inimigo_level_2)
                inimigo.experiencia = inimigo_experiencia(inimigo_level_2)
                inimigo.vida = inimigo_vida(inimigo_level_2)
                inimigo.ataque = inimigo_ataque(inimigo_level_2)
                inimigo.defesa = inimigo_defesa(inimigo_level_2)
                narrar.innerHTML +=`${inimigo.nome} aparece.`
                    
                np.innerHTML=`${personagem.nome}`
                ep.innerHTML=`${personagem.experiencia}`
                vp.innerHTML=`${personagem.vida}`
                ap.innerHTML=`${personagem.ataque}`
                dp.innerHTML=`${personagem.defesa}`
                    
                ni.innerHTML=`${inimigo.nome}`
                ei.innerHTML=`${inimigo.experiencia}`
                vi.innerHTML=`${inimigo.vida}`
                ai.innerHTML=`${inimigo.ataque}`
                di.innerHTML=`${inimigo.defesa}`

            }else if(decisao_tomada === 'falso'){
                si.innerHTML = ""
                no.innerHTML = ""
                contador += 1
                personagem.ataque += 10
                narrar.innerHTML = `Caminho escolido, +10 de ataque. `

                inimigo.nome = inimigo_nome(inimigo_level_2)
                inimigo.experiencia = inimigo_experiencia(inimigo_level_2)
                inimigo.vida = inimigo_vida(inimigo_level_2)
                inimigo.ataque = inimigo_ataque(inimigo_level_2)
                inimigo.defesa = inimigo_defesa(inimigo_level_2)
                narrar.innerHTML +=`${inimigo.nome} aparece.`
                    
                np.innerHTML=`${personagem.nome}`
                ep.innerHTML=`${personagem.experiencia}`
                vp.innerHTML=`${personagem.vida}`
                ap.innerHTML=`${personagem.ataque}`
                dp.innerHTML=`${personagem.defesa}`
                    
                ni.innerHTML=`${inimigo.nome}`
                ei.innerHTML=`${inimigo.experiencia}`
                vi.innerHTML=`${inimigo.vida}`
                ai.innerHTML=`${inimigo.ataque}`
                di.innerHTML=`${inimigo.defesa}`

                
            }else{
                alert(`Escolha uma opção!`)
            }


        }else if(contador == 18)/*inimigo*/{
            contador += 1
            inimigo.nome = inimigo_nome(inimigo_level_2)
            inimigo.experiencia = inimigo_experiencia(inimigo_level_2)
            inimigo.vida = inimigo_vida(inimigo_level_2)
            inimigo.ataque = inimigo_ataque(inimigo_level_2)
            inimigo.defesa = inimigo_defesa(inimigo_level_2)
            narrar.innerHTML=`${inimigo.nome} aparece.`
            
            np.innerHTML=`${personagem.nome}`
            ep.innerHTML=`${personagem.experiencia}`
            vp.innerHTML=`${personagem.vida}`
            ap.innerHTML=`${personagem.ataque}`
            dp.innerHTML=`${personagem.defesa}`
            
            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`


        }else if(contador == 19)/*opção*/{
            inimigo = {
                nome: 'Ninguém',
                experiencia: 0,
                vida: 0,
                ataque: 0,
                defesa: 0
            }
            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`

            narrar.innerHTML="Derrepente! O clima fica umido e uma leve neblina toma conta do andar, você começa a se preparar..."
            si.innerHTML = "Polir espada e escudo, +10 ataque e +10 defesa."
            no.innerHTML = "Remendar armadura, +150 vida e +15 defesa."
            if(decisao_tomada === 'verdadeiro'){
                si.innerHTML = ""
                no.innerHTML = ""
                contador += 1
                personagem.ataque += 10
                personagem.defesa += 10
                narrar.innerHTML = `Ataque e defesa aumentados.`

                np.innerHTML=`${personagem.nome}`
                ep.innerHTML=`${personagem.experiencia}`
                vp.innerHTML=`${personagem.vida}`
                ap.innerHTML=`${personagem.ataque}`
                dp.innerHTML=`${personagem.defesa}`
            }else if(decisao_tomada === 'falso'){
                si.innerHTML = ""
                no.innerHTML = ""
                contador += 1
                personagem.vida += 150
                personagem.defesa += 15
                narrar.innerHTML = `Vida e defesa aumentados.`

                np.innerHTML=`${personagem.nome}`
                ep.innerHTML=`${personagem.experiencia}`
                vp.innerHTML=`${personagem.vida}`
                ap.innerHTML=`${personagem.ataque}`
                dp.innerHTML=`${personagem.defesa}`
            }else{
                alert(`Escolha uma opção!`)
            }


        }else if(contador == 20)/*boss*/{
            contador += 1
            inimigo.nome = 'Pau-Brasil'
            inimigo.experiencia = 20
            inimigo.vida = 500
            inimigo.ataque = 40
            inimigo.defesa = 55
            narrar.innerHTML=`Enquanto você caminha, uma sombra gigante aparece no horizonte!!! O ${inimigo.nome} se enraivece.`
            
            np.innerHTML=`${personagem.nome}`
            ep.innerHTML=`${personagem.experiencia}`
            vp.innerHTML=`${personagem.vida}`
            ap.innerHTML=`${personagem.ataque}`
            dp.innerHTML=`${personagem.defesa}`
            
            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`


        } //21 a 30 ---------------------------------------------------------------------------------------------------

         else if(contador == 21){
            inimigo = {
                nome: 'Ninguém',
                experiencia: 0,
                vida: 0,
                ataque: 0,
                defesa: 0
            }
            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`

            narrar.innerHTML="PARABÉNS!!! Você derrotou o Pau-Brasil, faça a sua escolha para enfrentar os desafios dos andares dos MONSTROS."
            si.innerHTML = "Porta de ferro, +400 vida, +30 ataque e +30 defesa."
            no.innerHTML = "Pegar de aço, +350 vida, +30 ataque e +35 defesa."
            if(decisao_tomada === 'verdadeiro'){
                si.innerHTML = ""
                no.innerHTML = ""
                contador += 1
                personagem.experiencia += 10
                personagem.vida += 400
                personagem.ataque += 30
                personagem.defesa += 30
                narrar.innerHTML = `Porta de ferro escolhida.`

                np.innerHTML=`${personagem.nome}`
                ep.innerHTML=`${personagem.experiencia}`
                vp.innerHTML=`${personagem.vida}`
                ap.innerHTML=`${personagem.ataque}`
                dp.innerHTML=`${personagem.defesa}`

            }else if(decisao_tomada === 'falso'){
                si.innerHTML = ""
                no.innerHTML = ""
                contador += 1
                personagem.vida += 350
                personagem.ataque += 30
                personagem.defesa += 35
                narrar.innerHTML = `Porta de aço escolhida.`

                np.innerHTML=`${personagem.nome}`
                ep.innerHTML=`${personagem.experiencia}`
                vp.innerHTML=`${personagem.vida}`
                ap.innerHTML=`${personagem.ataque}`
                dp.innerHTML=`${personagem.defesa}`
            }else{
                alert(`Escolha uma opção!`)
            }

        

                    
        }else if(contador == 22)/*inimigo*/{
            contador += 1
            inimigo.nome = inimigo_nome(inimigo_level_3)
            inimigo.experiencia = inimigo_experiencia(inimigo_level_3)
            inimigo.vida = inimigo_vida(inimigo_level_3)
            inimigo.ataque = inimigo_ataque(inimigo_level_3)
            inimigo.defesa = inimigo_defesa(inimigo_level_3)
            narrar.innerHTML=`${inimigo.nome} aparece.`
            
            np.innerHTML=`${personagem.nome}`
            ep.innerHTML=`${personagem.experiencia}`
            vp.innerHTML=`${personagem.vida}`
            ap.innerHTML=`${personagem.ataque}`
            dp.innerHTML=`${personagem.defesa}`
            
            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`


        }else if(contador == 23)/*inimigo*/{
            contador += 1
            inimigo.nome = inimigo_nome(inimigo_level_3)
            inimigo.experiencia = inimigo_experiencia(inimigo_level_3)
            inimigo.vida = inimigo_vida(inimigo_level_3)
            inimigo.ataque = inimigo_ataque(inimigo_level_3)
            inimigo.defesa = inimigo_defesa(inimigo_level_3)
            narrar.innerHTML=`${inimigo.nome} aparece.`
            
            np.innerHTML=`${personagem.nome}`
            ep.innerHTML=`${personagem.experiencia}`
            vp.innerHTML=`${personagem.vida}`
            ap.innerHTML=`${personagem.ataque}`
            dp.innerHTML=`${personagem.defesa}`
            
            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`


        }else if(contador == 24)/*opção*/{
            inimigo = {
                nome: 'Ninguém',
                experiencia: 0,
                vida: 0,
                ataque: 0,
                defesa: 0
            }
            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`

            narrar.innerHTML="Andando pelo andar a sorte brilha para você! Você avista um cavalo e uma mula para te levar até o próximo andar. Qual você escolhe?"
            si.innerHTML = "Cavalo. +200 de vida e +10 de defesa, encontrar inimigo."
            no.innerHTML = "Mula. +250 de vida e +10 de ataque, encontrar inimigo."

            if(decisao_tomada === 'verdadeiro'){
                si.innerHTML = ""
                no.innerHTML = ""
                contador += 1
                personagem.defesa += 10
                personagem.vida += 200
                narrar.innerHTML = `Caminho escolido, +200 de vida e +10 de defesa. `

                inimigo.nome = inimigo_nome(inimigo_level_3)
                inimigo.experiencia = inimigo_experiencia(inimigo_level_3)
                inimigo.vida = inimigo_vida(inimigo_level_3)
                inimigo.ataque = inimigo_ataque(inimigo_level_3)
                inimigo.defesa = inimigo_defesa(inimigo_level_3)
                narrar.innerHTML +=`${inimigo.nome} aparece.`
                    
                np.innerHTML=`${personagem.nome}`
                ep.innerHTML=`${personagem.experiencia}`
                vp.innerHTML=`${personagem.vida}`
                ap.innerHTML=`${personagem.ataque}`
                dp.innerHTML=`${personagem.defesa}`
                    
                ni.innerHTML=`${inimigo.nome}`
                ei.innerHTML=`${inimigo.experiencia}`
                vi.innerHTML=`${inimigo.vida}`
                ai.innerHTML=`${inimigo.ataque}`
                di.innerHTML=`${inimigo.defesa}`

            }else if(decisao_tomada === 'falso'){
                si.innerHTML = ""
                no.innerHTML = ""
                contador += 1
                personagem.ataque += 10
                personagem.vida += 250
                narrar.innerHTML = `Caminho escolido, +250 de vida e +10 de ataque. `

                inimigo.nome = inimigo_nome(inimigo_level_3)
                inimigo.experiencia = inimigo_experiencia(inimigo_level_3)
                inimigo.vida = inimigo_vida(inimigo_level_3)
                inimigo.ataque = inimigo_ataque(inimigo_level_3)
                inimigo.defesa = inimigo_defesa(inimigo_level_3)
                narrar.innerHTML +=`${inimigo.nome} aparece.`
                    
                np.innerHTML=`${personagem.nome}`
                ep.innerHTML=`${personagem.experiencia}`
                vp.innerHTML=`${personagem.vida}`
                ap.innerHTML=`${personagem.ataque}`
                dp.innerHTML=`${personagem.defesa}`
                    
                ni.innerHTML=`${inimigo.nome}`
                ei.innerHTML=`${inimigo.experiencia}`
                vi.innerHTML=`${inimigo.vida}`
                ai.innerHTML=`${inimigo.ataque}`
                di.innerHTML=`${inimigo.defesa}`

                
            }else{
                alert(`Escolha uma opção!`)
            }



        }else if(contador == 25)/*inimigo*/{
            contador += 1
            inimigo.nome = inimigo_nome(inimigo_level_3)
            inimigo.experiencia = inimigo_experiencia(inimigo_level_3)
            inimigo.vida = inimigo_vida(inimigo_level_3)
            inimigo.ataque = inimigo_ataque(inimigo_level_3)
            inimigo.defesa = inimigo_defesa(inimigo_level_3)
            narrar.innerHTML=`${inimigo.nome} aparece.`
            
            np.innerHTML=`${personagem.nome}`
            ep.innerHTML=`${personagem.experiencia}`
            vp.innerHTML=`${personagem.vida}`
            ap.innerHTML=`${personagem.ataque}`
            dp.innerHTML=`${personagem.defesa}`
            
            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`


        }else if(contador == 26)/*inimigo*/{
            contador += 1
            inimigo.nome = inimigo_nome(inimigo_level_3)
            inimigo.experiencia = inimigo_experiencia(inimigo_level_3)
            inimigo.vida = inimigo_vida(inimigo_level_3)
            inimigo.ataque = inimigo_ataque(inimigo_level_3)
            inimigo.defesa = inimigo_defesa(inimigo_level_3)
            narrar.innerHTML=`${inimigo.nome} aparece.`
            
            np.innerHTML=`${personagem.nome}`
            ep.innerHTML=`${personagem.experiencia}`
            vp.innerHTML=`${personagem.vida}`
            ap.innerHTML=`${personagem.ataque}`
            dp.innerHTML=`${personagem.defesa}`
            
            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`


        }else if(contador == 27)/*inimigo*/{
            contador += 1
            inimigo.nome = inimigo_nome(inimigo_level_3)
            inimigo.experiencia = inimigo_experiencia(inimigo_level_3)
            inimigo.vida = inimigo_vida(inimigo_level_3)
            inimigo.ataque = inimigo_ataque(inimigo_level_3)
            inimigo.defesa = inimigo_defesa(inimigo_level_3)
            narrar.innerHTML=`${inimigo.nome} aparece.`
            
            np.innerHTML=`${personagem.nome}`
            ep.innerHTML=`${personagem.experiencia}`
            vp.innerHTML=`${personagem.vida}`
            ap.innerHTML=`${personagem.ataque}`
            dp.innerHTML=`${personagem.defesa}`
            
            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`


        }else if(contador == 28)/*inimigo*/{
            contador += 1
            inimigo.nome = inimigo_nome(inimigo_level_3)
            inimigo.experiencia = inimigo_experiencia(inimigo_level_3)
            inimigo.vida = inimigo_vida(inimigo_level_3)
            inimigo.ataque = inimigo_ataque(inimigo_level_3)
            inimigo.defesa = inimigo_defesa(inimigo_level_3)
            narrar.innerHTML=`${inimigo.nome} aparece.`
            
            np.innerHTML=`${personagem.nome}`
            ep.innerHTML=`${personagem.experiencia}`
            vp.innerHTML=`${personagem.vida}`
            ap.innerHTML=`${personagem.ataque}`
            dp.innerHTML=`${personagem.defesa}`
            
            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`


        }else if(contador == 29)/*opção*/{
            inimigo = {
                nome: 'Ninguém',
                experiencia: 0,
                vida: 0,
                ataque: 0,
                defesa: 0
            }
            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`

            narrar.innerHTML="Derrepente! Um calor ardente toma conta do andar, você começa a se preparar..."
            si.innerHTML = "Colocar veneno na espada, +20 ataque e +20 defesa."
            no.innerHTML = "Fazer corativo, +300 vida e +25 defesa."
            if(decisao_tomada === 'verdadeiro'){
                si.innerHTML = ""
                no.innerHTML = ""
                contador += 1
                personagem.ataque += 20
                personagem.defesa += 20
                narrar.innerHTML = `Ataque e defesa aumentados.`

                np.innerHTML=`${personagem.nome}`
                ep.innerHTML=`${personagem.experiencia}`
                vp.innerHTML=`${personagem.vida}`
                ap.innerHTML=`${personagem.ataque}`
                dp.innerHTML=`${personagem.defesa}`
            }else if(decisao_tomada === 'falso'){
                si.innerHTML = ""
                no.innerHTML = ""
                contador += 1
                personagem.vida += 300
                personagem.defesa += 25
                narrar.innerHTML = `Vida e defesa aumentados.`

                np.innerHTML=`${personagem.nome}`
                ep.innerHTML=`${personagem.experiencia}`
                vp.innerHTML=`${personagem.vida}`
                ap.innerHTML=`${personagem.ataque}`
                dp.innerHTML=`${personagem.defesa}`
            }else{
                alert(`Escolha uma opção!`)
            }



        }else if(contador == 30)/*boss*/{
            contador += 1
            inimigo.nome = 'Bola de fogo'
            inimigo.experiencia = 30
            inimigo.vida = 1000
            inimigo.ataque = 100
            inimigo.defesa = 85
            narrar.innerHTML=`Enquanto você caminha, os seus pés começam a queimar. O ${inimigo.nome} se aumenta seu poder!!!`
            
            np.innerHTML=`${personagem.nome}`
            ep.innerHTML=`${personagem.experiencia}`
            vp.innerHTML=`${personagem.vida}`
            ap.innerHTML=`${personagem.ataque}`
            dp.innerHTML=`${personagem.defesa}`
            
            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`



        } // 31 a 40 ---------------------------------------------------------------------------------------------------

        else if(contador == 31){
            contador += 1
            inimigo = {
                nome: 'Ninguém',
                experiencia: 0,
                vida: 0,
                ataque: 0,
                defesa: 0
            }
            ni.innerHTML=`${inimigo.nome}`
            ei.innerHTML=`${inimigo.experiencia}`
            vi.innerHTML=`${inimigo.vida}`
            ai.innerHTML=`${inimigo.ataque}`
            di.innerHTML=`${inimigo.defesa}`

            narrar.innerHTML = `PARABÉNS!!! Você derrotou o Bola de fogo e chegou ao final da sua jornada. <br> A sua história ficou marcada aqui neste lugar!`
        

        

        }else[
            location.reload()
        ]
        decisao_tomada = ''



    }else if(inimigo.vida > 0 && personagem.vida > 0){
        alert(`O combate ainda não acabou! Volte para a batalha.`)
    }else if(personagem.vida <= 0){
        narrar.innerHTML = `VOCÊ FOI DILACERADO! Para recomeçar a Jornada aperte em avançar.`
        contador = 1
        personagem = {
            nome: 'Demétrio',
            experiencia: 10,
            vida: 100,
            ataque: 10,
            defesa: 15
        }
        inimigo = {
            nome: 'Ninguém',
            experiencia: 0,
            vida: 0,
            ataque: 0,
            defesa: 0
        }
        np.innerHTML=`${personagem.nome}`
        ep.innerHTML=`${personagem.experiencia}`
        vp.innerHTML=`${personagem.vida}`
        ap.innerHTML=`${personagem.ataque}`
        dp.innerHTML=`${personagem.defesa}`
        
        ni.innerHTML=`${inimigo.nome}`
        ei.innerHTML=`${inimigo.experiencia}`
        vi.innerHTML=`${inimigo.vida}`
        ai.innerHTML=`${inimigo.ataque}`
        di.innerHTML=`${inimigo.defesa}`
    }else{
        alert('[ERRO-01] Parâmetros passam na história')
    }


    movi.innerHTML="Nada"
    movp.innerHTML="Nada"
    decisao_tomada = ''
};