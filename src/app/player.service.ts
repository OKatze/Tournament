import {EventEmitter, Injectable, SimpleChange} from '@angular/core';
import {player} from './player';
import { game } from './game';

@Injectable()

export class PlayerService {
  allPlayers: player[] = new Array<player>();
  newPlayer: player;
  id = 0;
  pointsPlayerOne = 0;
  pointsPlayerTwo = 0;
  newGameRegistrated = new EventEmitter<player []>();

  constructor() {
  }

  addNewPlayer(changedPlayer: SimpleChange) {
    if (changedPlayer.currentValue !== undefined) {
      this.newPlayer = new player(changedPlayer.currentValue.name, this.id);
      this.allPlayers.push(this.newPlayer);
      this.id++;
      console.log('PlayerService: Player is added.');
    }
  }

  identifyPlayerByName(playerName: string): player {
    let identifiedPlayer: player;
    this.allPlayers.forEach(function (element) {
      if (element.name === playerName) {
        identifiedPlayer = element;
      }
    });
    return identifiedPlayer;
  }

  updatePlayerValues(unsavedGame: game) {
    this.calculatePoints(unsavedGame);
    const playerOne = unsavedGame.playerOne;
    const playerTwo = unsavedGame.playerTwo;
    const pointsPlayerOne = this.pointsPlayerOne;
    const pointsPlayerTwo = this.pointsPlayerTwo;

    this.allPlayers.forEach(function (element) {
      if (element.id === playerOne.id) {
        element.playedGames++;
        element.goalsOwned += unsavedGame.goalsPlayerOne;
        element.goalsAgainst += unsavedGame.goalsPlayerTwo;
        element.points += pointsPlayerOne;
        if (pointsPlayerOne === 3) {
          element.wonGames++;
        } else if (pointsPlayerOne === 1) {
          element.drawGames++;
        } else {
          element.lostGames++;
        }
        element.goalsDifference = element.goalsOwned - element.goalsAgainst;
      }

      if (element.id === playerTwo.id) {
        element.playedGames++;
        element.goalsOwned += unsavedGame.goalsPlayerTwo;
        element.goalsAgainst += unsavedGame.goalsPlayerOne;
        element.points += pointsPlayerTwo;
        if (pointsPlayerTwo === 3) {
          element.wonGames++;
        } else if (pointsPlayerTwo === 1) {
          element.drawGames++;
        } else {
          element.lostGames++;
        }
        element.goalsDifference = element.goalsOwned - element.goalsAgainst;
      }
    });
    console.log('PlayerService: Playervalues are updated.');
    this.newGameRegistrated.emit(this.allPlayers);
  }

  calculatePoints(unsavedGame: game) {
    this.pointsPlayerOne = 0;
    this.pointsPlayerTwo = 0;
    if (unsavedGame.goalsPlayerOne === unsavedGame.goalsPlayerTwo) {
      this.pointsPlayerOne = 1;
      this.pointsPlayerTwo = 1;
    } else if (unsavedGame.goalsPlayerOne > unsavedGame.goalsPlayerTwo) {
      this.pointsPlayerOne = 3;
    } else {
      this.pointsPlayerTwo = 3;
    }
  }

}


