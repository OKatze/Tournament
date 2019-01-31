import {player} from './player';

export class game {
  id: number;
  playerOne: player;
  playerTwo: player;
  goalsPlayerOne: number;
  goalsPlayerTwo: number;

  constructor(id: number, playerOne: player, playerTwo: player, goalsPlayerOne: number, goalsPlayerTwo: number) {
    this.id = id;
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.goalsPlayerOne = goalsPlayerOne;
    this.goalsPlayerTwo = goalsPlayerTwo;
  }

}
