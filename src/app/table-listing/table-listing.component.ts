import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { player} from '../player';
import {PlayerService} from '../player.service';

@Component({
  selector: 'app-table-listing',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './table-listing.component.html',
  styleUrls: ['./table-listing.component.css']
})
export class TableListingComponent implements OnInit, OnChanges {
  @Input() newPlayer: player;
  allPlayers = this.playerService.allPlayers;
  // helpNumber: helps update the table when game-registration updates Players values
  @Input() helpNumber: number;

  constructor(public playerService: PlayerService) { }

  ngOnInit() {
    // Sollte eigentlich für die Aktualisierung der Tabelle sorgen
    this.playerService.newGameRegistrated.subscribe(
      (allPlayers: player[]) => this.allPlayers = allPlayers
  );
  }

  ngOnChanges(changes: SimpleChanges) {
    // don't add player, if only playervalues had changed
    if (!changes['helpNumber']) {
      this.addNewPlayer(changes);
    } else {
      console.log('TableListingComponent: Table is updated.');
    }
  }

  addNewPlayer(changes: SimpleChanges) {
    if (changes['newPlayer'].currentValue !== undefined) {
      this.playerService.addNewPlayer(changes['newPlayer']);
    }
  }

}
