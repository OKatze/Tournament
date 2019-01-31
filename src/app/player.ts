export class player {
  name: string;
  id: number;
  playedGames: number;
  wonGames: number;
  lostGames: number;
  drawGames: number;
  points: number;
  goalsOwned: number;
  goalsAgainst: number;
  goalsDifference: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
    this.playedGames = 0;
    this.wonGames = 0;
    this.lostGames = 0;
    this.drawGames = 0;
    this.points = 0;
    // this.points = this.wonGames * 3 + this.drawGames;
    this.goalsOwned = 0;
    this.goalsAgainst = 0;
    this.goalsDifference = 0;
    // this.goalsDifference = this.goalsOwned - this.goalsAgainst;
  }

}

