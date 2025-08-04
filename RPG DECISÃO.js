let nome = 'Guarapinto';
let classe = 'Guerreiro';
let nivel = 12;
let vida = 50;
let moedas = 30;
let xp = 15000

const NOMEARMA = 'Pintoguara ';
const DANO = 50;
const RARIDADE = 'Épico';
const ELEMENTO = 'Terra';

moedas -= 15;

xp += 100

vida += 40


let forcaBase = 80
let defesaBase = 70
let agilidadeBase = 85

let bonusArmadura = 10;
let bonusEspada = 5;
let penalidadeEscudo = 5

let forcaTotal = forcaBase + bonusEspada;
let defesaTotal = defesaBase + bonusArmadura;
let agilidadeFinal = agilidadeBase - penalidadeEscudo;

let ataqueTotal = nivel + DANO;
let totalDefesa = defesaBase + (nivel/2);

let vidaSuficiente = vida >= 50;
let ataqueForte = ataqueTotal > 100;
let nivelAvancado = nivel >= 10;
let podeEnfrentarSerpente = vidaSuficiente &&(ataqueForte||nivelAvancado);

console.log("LORE DO HERÓI: GuaraPinto");
console.log("-------------------------------");
console.log(`${nome}, o Super Guerreiro Tupiniquim, caminha pela floresta assombrosa Olho de Serpente em busca de seu cachorrinho`);
console.log(`Com sua agilidade, sua atenção, e esperteza, fica muito dificil de seus inimigos encontrarem ele, e capturarem`);
console.log(`Sua maior força é seu grande ataque de ${ataqueTotal}, e seu ${ nivel}, ele é um Guerreiro muito dificil de ser derrotado`);
console.log(`Além de ser agil, é muito forte na sua força também, com ${defesaTotal} pontos de resistencia`);
console.log(`Depois de se preparar muito, conseguiu ${xp} pontos de XP, e carrega apenas ${moedas} moedas para fazer algumas negociações na vila ao lado da floresta, antes de ir para procura do seu cachorrinho`);
console.log(`Com ${vida} pontos de vida, ${nome}, promete ser uma das maiores promessas, entre os guerreiros mais jovens da região`);
console.log(`Está com sua vida suficiente? ${vidaSuficiente}. Está com seu ataque forte? ${ataqueForte}. Está com seu nivel avançado? ${nivelAvancado}`);
console.log(`Pode enfrentar a Serpente?${podeEnfrentarSerpente}. Ele vai em busca do seu cachorrinho, querendo derrotar a serpente`);
console.log(`Após uma grande Luta, conseguiu derrotar a Grande Serpente com sua ${NOMEARMA}, e todos da vila ao lado celebraram`);
console.log(`Com todos muito felizes pela vitoria do ${nome}, fizeram uma festa para comemorar`);



console.log("--------------------------------------------------------------------");




//Continuação da Jornada

let classeAtual = 'Guerreiro';
let nivelAtual = 12;
let vidaAtual = 100;
let vidaMaxima = 100;
let manaAtual = 300;
let manaMaxima = 300;
let moedasAtuais = 100;
let xpAtual = 15000;
let experiencia = 5;

//Novos atributos para baralha
let forcaAtual = 85;
let defesaAtual = 80;
let agilidadeAtual = 90;
let combatesVencidos = 1;

//Estado atual da história
let localAtual = 'Vila';
let missaoAtual = 'Salvar Reino';




//PRÓLOGO
console.log(`Após o evento ocorrido na ${localAtual}, nosso herói ${nome}`);
console.log(`da classe ${classe}, se depara com um novo desafio`);

console.log("--------------------------------------------------------------------");



//CAPÍTULO 1
console.log("CAPÍTLO 1: Aviso dos Anciões");

//Verificação baseada no nivel do personagem
if(nivelAtual > 10){
    console.log("Um ancião confia em você: 'Você está preparado para essa missão");
    console.log(`${nome} confia em si mesmo, e vai a luta`);
}

//Verificação de Recursos especiais
if(moedasAtuais >= 100){
    console.log(`Sua quantidade de ${moedasAtuais} preciosas no bolso, atraem alguns olharem cobiços`);
}

//Verificação de classe especifica
if(classe === "Guerreiro"){
    console.log("A força de Guerra flui entre as suas veias e artérias");
}

console.log("--------------------------------------------------------------------");

//CAPÍTULO 2
console.log("CAPÍTULO 2: O caminho ao Destino");

//Escolha dos Recursos
if(moedasAtuais >= 50){
    console.log(`com moedas suficientes ${nome} deve confiar nas suas incrveis habilidades`);
    forcaAtual += 2;
    defesaAtual +=2;
    moedasAtuais -=50;
    console.log(`Força e defesa aumentara. Sobraram ${moedasAtuais} moedas restantes`);
}else{
    console.log(`Sem moedas suficiente ${nome} deve confiar apenas em si mesmo`);
}

//SIstema de recompensas narrativo
if(experiencia >= 50){
    console.log(`A sabedoria que tem, começa a se acumular e se manifesta. ${nome} se sente mais poderoso`);
    nivelAtual++;
    experiencia = 0;
    vidaAtual = vidaMaxima; //Vida Restaurada
}else{
    console.log(`${nome} busca mais conhecimento e experiencia`);
    console.log(`Sabedoria atual; ${experiencia} /100`);
}

console.log("--------------------------------------------------------------------");

//CAPÍTULO 3
console.log("CAPÍTULO 3: Grande Batalha Final");
let poderinimigo = 80;

//Combate
if(vidaAtual <=80){
    console.log(`Com pouca vida ${nome} usa uma tatica inesperada para o seu adversario`);
    console.log("Ataque final com toda a força restante");
    poderinimigo -=(forcaAtual + 20);
    manaAtual -= 80;
}else if(agilidadeAtual >= 20){
    console.log("Com sua grande agilidade, consegue fazer um golpe certeiro");
    poderinimigo -= forcaAtual;
}else{
    console.log("Luta defensiva e calculada, com a cabeça fria e o coração quente");
    poderinimigo -= (forcaAtual/2);
    vidaAtual += 10; //Recupera um pouco de vida
}

console.log("--------------------------------------------------------------------");
console.log(`=== CONTINUAÇÃO DA JORNADA DE ${nome} ===`);
console.log("");

//EPÍLOGO - RESULTADO FINAL
if(poderinimigo <= 0){
    console.log(`No capricho ${nome} se torna um dos maiores guerreiros do mundo`);
    experiencia += 90;
    combatesVencidos++;
    console.log(`A lenda ${nome}, cresce...tanto mentalmente quanto fisicamente`);
}else{
    console.log(`A batalha foi dificil demais, mas ${nome} sobrevive para tentar lutar outro dia, se o reino ainda estiver nos seus altos`);
}

console.log("");
console.log("FIM DO CAPITULO - Aguarde o próximo nivel da aventura");
