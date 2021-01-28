const team = {
  _players: [
    {
    firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 11
    },
    {
    firstName: 'Kevin',
    lastName: 'Durt',
    age: 15
    },
    {
    firstName: 'Daniel',
    lastName: 'Smith',
    age: 16 
    }
  ],
  _games: [
   {
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27
   },
   {
  opponent: 'Eagles',
  teamPoints: 50,
  opponentPoints: 60
   },
   {
  opponent: 'Snakes',
  teamPoints: 20,
  opponentPoints: 45
   },  
  ],
  get players()
    {
    return this._players;
    },
  get games()
    {
    return this._games;
    },
  addPlayer(firstName, lastName, age){
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints){
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this._games.push(game);
  }
};
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);

team.addGame('Vipers', 70, 20);
team.addGame('Foxes', 55, 40);
team.addGame('Badgers', 30, 50);

console.log(team.games);