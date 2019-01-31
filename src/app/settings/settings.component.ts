import { Component, OnInit, Input} from '@angular/core';
import {player} from '../player';
import {PlayerService} from '../player.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  Player: player;
  allPlayers = this.playerService.allPlayers;
  @Input() helpNumber: number;

  constructor(public playerService: PlayerService) { }

  ngOnInit() {
  }

  clickedEnter(event: KeyboardEvent, currentName: string) {
    if (event.keyCode === 13) {
      this.onClick(currentName);
    }
  }

  onClick(currentName: string) {
    if (this.validateName(currentName)) {
      this.Player = new player(currentName, 0);
    }
  }

  validateName(currentName: string) {
    return (!this.validateIfNameIsEmpty(currentName) && !this.validateIfNameIsTooLong(currentName) &&
      !this.validateIfNameAlreadyExists(currentName) && !this.validateIfNameContainsForbiddenCharacter(currentName) );
  }

  validateIfNameIsEmpty(currentName: string) {
    if (currentName === '') {
      alert('Bitte einen Spielernamen eingeben.');
      return true;
    } return false;
  }

  validateIfNameIsTooLong(currentName: string) {
    if (currentName.length > 25) {
      alert('Der Spielername darf maximal 25 Zeichen lang sein.');
      return true;
    } return false;
  }

  validateIfNameAlreadyExists(currentName: string) {
    let isExisting = false;
    this.allPlayers.forEach(function(element) {
      if (element.name === currentName) {
        alert('Spielername ist bereits vergeben.');
        return isExisting = true;
      }
    });
    return isExisting;
  }

  // TODO Lassen sich auch mehrere Konsequenzen zusammenfassen?
  validateIfNameContainsForbiddenCharacter(currentName: string) {
    for (let i = 0; i < currentName.length; i++) {
      if (currentName[i] === ',' || currentName[i] === '.' || currentName[i] === ' '
        || currentName[i] === '?' || currentName[i] === '"' || currentName[i] === '-'
        || currentName[i] === '<' || currentName[i] === '>') {
        alert('Name darf kein Sonderzeichen beinhalten.');
        return true;
      }
    }
    return false;
  }
}
