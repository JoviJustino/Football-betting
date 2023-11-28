'use sctrict';

/*
Estamos construindo um aplicativo de apostas em futebol (futebol para meus amigos americanos 😅)!

Suponha que obtenhamos dados de um serviço web sobre um determinado jogo (abaixo). Neste desafio vamos trabalhar com os dados. Então aqui estão
 suas tarefas:

1. Crie um array de jogadores para cada equipe (variáveis ​​‘players1’ e ‘players2’) ✅ 
2. O primeiro jogador em qualquer grupo de jogadores é o goleiro e os demais são os jogadores de campo. Para o Bayern de Munique (time 1)
 crie uma variável ('gk') com o nome do goleiro e uma matriz ('fieldPlayers') com todos os 10 jogadores de campo restantes
3. Crie um array 'allPlayers' contendo todos os jogadores de ambas as equipes (22 jogadores)
4. Durante o jogo, o Bayern de Munique (equipe 1) utilizou 3 jogadores substitutos. Então crie um novo array ('players1Final') contendo todos os jogadores originais do time1 mais 'Thiago', 'Coutinho' e 'Perisic'
5. Com base no objeto game.odds, crie uma variável para cada odd (chamada 'team1', 'draw' e 'team2')
6. Escreva uma função ('printGoals') que receba um número arbitrário de nomes de jogadores (NÃO um array) e imprima cada um deles no console, junto com o número de gols marcados no total (número de nomes de jogadores passados ​​em )
7. A equipe com a cotação mais baixa tem maior probabilidade de vencer. Imprima no console qual time tem maior probabilidade de vencer, SEM usar uma instrução if/else ou o operador ternário.

DADOS DE TESTE PARA 6: Use os jogadores 'Davies', 'Muller', 'Lewandowski' e 'Kimmich'. Em seguida, chame a função novamente com jogadores de game.scored

BOA SORTE 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
}

// 1: Crie um array de jogadores para cada equipe (variáveis ​​‘players1’ e ‘players2’) ✅
const [players1, players2] = game.players;
 
//2: (rest operator)  O primeiro jogador em qualquer grupo de jogadores é o goleiro e os demais são os jogadores de campo. Para o Bayern de Munique (time 1)
const [gk, ...fildPlayers] = players1;
console.log(gk, fildPlayers);

//3 : (spreed operator) Crie um array 'allPlayers' contendo todos os jogadores de ambas as equipes (22 jogadores)
const allPlayers = [...players1, ...players2]

//4 : Durante o jogo, o Bayern de Munique (equipe 1) utilizou 3 jogadores substitutos. Então crie um novo array ('players1Final') contendo todos os jogadores originais do time1 mais 'Thiago', 'Coutinho' e 'Perisic'
 const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];  

 //5:  Com base no objeto game.odds, crie uma variável para cada odd (chamada 'team1', 'draw' e 'team2')
 const { 
  odds: { team1, x: draw, team2 }
 } = game;

 console.log(team1, draw, team2);
 //6 : Escreva uma função ('printGoals') que receba um número arbitrário de nomes de jogadores (NÃO um array) e imprima cada um deles no console, junto com o número de gols marcados no total (número de nomes de jogadores passados ​​em )
  const printGoals = function(...players){
    console.log(`${players.length} gols foram marcados`)
  }

  // printGoals('Davies', 'Muller', 'Lewandowski','Kimmich');
  printGoals(...game.scored);

  //7 : A equipe com a cotação mais baixa tem maior probabilidade de vencer. Imprima no console qual time tem maior probabilidade de vencer, SEM usar uma instrução if/else ou o operador ternário.
  
  team1 < team2 && console.log("O time 1 tem mais chances de vencer");
  team1 > team2 && console.log("O time 2 tem mais chances de vencer");