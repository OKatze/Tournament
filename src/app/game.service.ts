import {Injectable} from '@angular/core';
import {game} from './game';

@Injectable()

export class GameService {
  allGames: game[] = new Array <game>();

  constructor() { }

  saveGame(newGame: game) {
    this.allGames.push(newGame);
    console.log('GameService: Game is saved.');
  }

}
