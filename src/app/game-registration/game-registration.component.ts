import {Component, OnInit, Output} from '@angular/core';
import {PlayerService} from '../player.service';
import {GameService} from '../game.service';
import { game} from '../game';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-registration',
  templateUrl: './game-registration.component.html',
  styleUrls: ['./game-registration.component.css']
})
export class GameRegistrationComponent implements OnInit {
  allPlayers = this.playerService.allPlayers;
  gameId = 1;
  allGames = this.gameService.allGames;
  @Output() newResults = new EventEmitter<number>();

  constructor(public playerService: PlayerService, public gameService: GameService) { }

  ngOnInit() {
  }

  validateRegistration(playerOneName: string, playerTwoName: string, goalsPlayerOne: number, goalsPlayerTwo: number) {
    if ( !(this.validateIfPlayersAreSimilar(playerOneName, playerTwoName)) &&
      !(this.validateIfPlayersArentSelected(playerOneName, playerTwoName)) &&
      !(this.validateIfGoalsArentSelected(goalsPlayerOne, goalsPlayerTwo)) ) {
      this.saveFinishedGameResults(playerOneName, playerTwoName, goalsPlayerOne, goalsPlayerTwo);
    }
  }

  validateIfPlayersAreSimilar(playerOneName: string, playerTwoName: string) {
    if (playerOneName === playerTwoName) {
      alert('Bitte verschiedene Spieler auswählen.');
      return true;
    }
    return false;
  }

  validateIfPlayersArentSelected(playerOneName: string, playerTwoName: string) {
    if (playerOneName === 'Spieler wählen' || playerTwoName === 'Spieler wählen') {
      alert('Bitte Spieler auswählen.');
      return true;
    }
    return false;
  }

  validateIfGoalsArentSelected(goalsPlayerOne: number, goalsPlayerTwo: number) {
    if (goalsPlayerOne.toString() === 'NaN' || goalsPlayerTwo.toString() === 'NaN') {
      alert('Bitte Tore angeben.');
      return true;
    }
    return false;
  }

  saveFinishedGameResults(playerOneName: string, playerTwoName: string, goalsPlayerOne: number, goalsPlayerTwo: number) {
    // Identify players
    // TODO Lassen sich per String-Interpolation auch Zahlen oder Objekte übertragen?
    const playerOne = this.playerService.identifyPlayerByName(playerOneName);
    const playerTwo = this.playerService.identifyPlayerByName(playerTwoName);

    // Create Game and save it, save results in table
    const unsavedGame: game = new game(this.gameId, playerOne, playerTwo, goalsPlayerOne, goalsPlayerTwo);

    this.gameService.saveGame(unsavedGame);
    this.playerService.updatePlayerValues(unsavedGame);
    this.newResults.emit(0);
    this.gameId++;
  }

}
