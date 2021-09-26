var carta1 = {
    nome:"Gato lixador",
    imagem: "https://i.pinimg.com/originals/bd/e4/6f/bde46f612ac72646d1d0ff72c2c4e25d.gif",
    atributos:{
      Fofurômetro: 60,
      Beleza: 60,
      Humor: 9
    }
  }

var carta2 = {
    nome:"Gato distraido",
    imagem: "https://thumbs.gfycat.com/BigheartedQuestionableDrake-small.gif",
    atributos:{
      Fofurômetro: 70,
      Beleza: 60,
      Humor: 9
    }
  }

var carta3 = {
    nome:"Gato implorando",
    imagem: "https://i.redd.it/2ie8i7t2k0l11.gif",
    atributos:{
      Fofurômetro: 80,
      Beleza: 70,
      Humor: 7
    }
  }

var carta4 = {
    nome:"Gato escovado",
    imagem: "https://s2.glbimg.com/7SGvTz4siBrvuX3PmcOzJ3UUY8w=/512x320/smart/e.glbimg.com/og/ed/f/original/2015/07/22/gato-escova.gif",
    atributos:{
      Fofurômetro: 90,
      Beleza: 100,
      Humor: 8
    }
  }

var carta5 = {
    nome:"Gato boxeador",
    imagem: "https://pa1.narvii.com/6336/06b3a50175cabaaa3645657f345748a3b15f464c_hq.gif",
    atributos:{
      Fofurômetro: 60,
      Beleza:70,
      Humor: 8
    }
  }

var carta6 = {
    nome:"Gato passado",
    imagem: "https://pa1.narvii.com/6343/4d5bd511da9d32af40580ff049336b7a9b4b5a0f_hq.gif",
    atributos:{
      Fofurômetro: 70,
      Beleza: 70,
      Humor: 10
    }
  }

var carta7 = {
    nome:"Gato rebolador",
    imagem: "https://www.gadoo.com.br/wp-content/uploads/2016/04/1-catgifpage.gif",
    atributos:{
      Fofurômetro: 80,
      Beleza: 90,
      Humor: 7
    }
  }

var carta8 = {
    nome:"Gato balanceador",
    imagem: "https://acegif.com/wp-content/gifs/cat-attack-57.gif",
    atributos:{
      Fofurômetro: 70,
      Beleza: 70,
      Humor: 9
    }
  }


var carta9 = {
    nome:"Gato relaxado",
    imagem: "http://purrtacular.com/wp-content/uploads/2017/08/If-It-Fits-I-Sits-25.gif",
    atributos:{
      Fofurômetro: 70,
      Beleza: 90,
      Humor: 7
    }
  }

var carta10 = {
    nome:"Gato massageador",
    imagem: "http://pa1.narvii.com/6517/201a5d233a9b124969b1225dcc8df71782da1361_00.gif",
    atributos:{
      Fofurômetro: 90,
      Beleza: 80,
      Humor: 7
    }
  }

var carta11 = {
    nome:"Gato curioso",
    imagem: "https://c.tenor.com/bVbOPRZyQkUAAAAd/cat.gif",
    atributos:{
      Fofurômetro: 80,
      Beleza: 60,
      Humor: 7
    }
  }

var carta12 = {
    nome:"Gato novinho",
    imagem: "https://i.pinimg.com/originals/84/c8/ba/84c8bab01787f2ee1ebef1378e9e8444.gif",
    atributos:{
      Fofurômetro: 100,
      Beleza: 70,
      Humor: 6
    }
  }

var carta13 = {
    nome:"Gato dançante",
    imagem: "https://pa1.narvii.com/7056/ec68483d1ff79427eecc8db5ff9f5df4f5a2a93cr1-194-244_hq.gif",
    atributos:{
      Fofurômetro: 70,
      Beleza: 60,
      Humor: 9
    }
  }

var carta14 = {
    nome:"Gato home office",
    imagem: "https://c.tenor.com/29Ok5pc0ivAAAAAM/gatinho-gato.gif",
    atributos:{
      Fofurômetro: 90,
      Beleza: 80,
      Humor: 7
    }
  }

var carta15 = {
    nome:"Gato reggae",
    imagem: "https://thumbs.gfycat.com/LastingWellgroomedGharial-max-1mb.gif",
    atributos:{
      Fofurômetro: 70,
      Beleza: 90,
      Humor: 8
    }
  }

var carta16 = {
    nome:"Gato guloso",
    imagem: "https://i.redd.it/b6obebyda9171.gif",
    atributos:{
      Fofurômetro: 70,
      Beleza: 80,
      Humor: 9
    }
  }

var carta17 = {
    nome:"Gato faminto",
    imagem: "https://i.pinimg.com/originals/ee/aa/37/eeaa37684b58bd91135818fd4396785c.gif",
    atributos:{
      Fofurômetro: 70,
      Beleza: 60,
      Humor: 10
    }
  }

var carta18 = {
    nome:"Gatinho",
    imagem: "https://i.redd.it/3xomfp8qg3f71.gif",
    atributos:{
      Fofurômetro: 90,
      Beleza: 70,
      Humor: 6
    }
  }


var cartaMaquina
var cartaJogador
var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10, carta11, carta12, carta13, carta14, carta15, carta16, carta17, carta18];

var pontosJogador = 0
var pontosMaquina = 0



 updatePlacar()
 updateCartas()

function updatePlacar() {
    var divPlacar = document.getElementById("placar")
    var html = "Jogador= " + pontosJogador + "/" + "Máquina= " + pontosMaquina
  
    divPlacar.innerHTML = html
}
  
function updateCartas(){
    var divQuantCartas = document.getElementById("quantidade-cartas")
    var html = "Quantidade de Cartas no jogo: " + cartas.length
  
    divQuantCartas.innerHTML = html
}



function sortearCarta() {
 var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas[numeroCartaMaquina];
  cartas.splice(numeroCartaMaquina,1)
  
  
  var numeroCartaJogador = parseInt(Math.random() * cartas.length);
  
   cartaJogador = cartas[numeroCartaJogador];
  cartas.splice(numeroCartaJogador,1)
  
  
  
  // while (numeroCartaMaquina == numeroCartaJogador) {
  //   var numeroCartaJogador = parseInt(Math.random() * cartas.length);
  // }
  // cartaJogador = cartas[numeroCartaJogador];
  // console.log(cartaJogador);
  
  document.getElementById("btnSortear").disabled=true;
  document.getElementById("btnJogar").disabled=false;
  
  exibirCartaJogador()
}


function exibirCartaJogador() {
  var opcoesCartaJogador = document.getElementById ("carta-jogador")
  var modeloCarta = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  opcoesCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + "- " + cartaJogador.atributos[atributo] + "<br>"
    }
    var html = "<div id='opcoes' class='carta-status'>"
    opcoesCartaJogador.innerHTML =modeloCarta + nome + html + opcoesTexto + '</div>'
}




function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName('atributo'); 
  
  for(i = 0; i < radioAtributos.length; i++) {
    if(radioAtributos[i].checked){ 
     return radioAtributos[i].value; 
    }
  }
}


function jogar() {
   var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado")
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]
  if(atributoSelecionado != undefined) {
  if (valorCartaJogador > valorCartaMaquina) {
      htmlResultado = '<p class="resultado-final">Você venceu, parabéns</p>'
            pontosJogador++
    
  } else if (valorCartaJogador < valorCartaMaquina) {
  htmlResultado = '<p class="resultado-final">Você perdeu, o atributo da carta da máquina é maior </p>'
            pontosMaquina++   
    
  } else    htmlResultado = '<p class="resultado-final">Você empatou</p>'
    
    elementoResultado.innerHTML = htmlResultado
        exibeCartaMaquina() 
    
     document.getElementById("btnJogar").disabled = true
        updatePlacar()
        updateCartas()

        if (cartas.length == 0){
            alert ('Fim de jogo')
            if (pontosJogador > pontosMaquina){
                htmlResultado = '<p class="resultado-final">Você ganhou o jogo, parabéns !</p>'
                elementoResultado.innerHTML = htmlResultado
            }else if (pontosJogador < pontosMaquina) {
                htmlResultado = '<p class="resultado-final">Você perdeu o jogo, tente outra vez</p>'
                elementoResultado.innerHTML = htmlResultado
            }else {
                htmlResultado = '<p class="resultado-final">Você empatou o jogo </p>'
                elementoResultado.innerHTML = htmlResultado
            }
        }else document.getElementById('btnProximaRodada').disabled = false
    }
    else alert('Selecione um atributo')
}
   
function exibeCartaMaquina() {
    var elementoCartaMaquina = document.getElementById("carta-maquina")
    var modeloCarta = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    elementoCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""
    for (var atributo in cartaMaquina.atributos) {
      console.log(atributo)
      opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + "- " + cartaMaquina.atributos[atributo] + "<br>"
    }
  
    var html = "<div id='opcoes' class='carta-status --spacing'>"
    elementoCartaMaquina.innerHTML = modeloCarta + nome + html + opcoesTexto + '</div>'
}

function proximaRodada(){
    var elementoCartas = document.getElementById('cartas')
  
    elementoCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true
  
   var elementoResultado = document.getElementById("resultado")
    elementoResultado.innerHTML = ""




 
}