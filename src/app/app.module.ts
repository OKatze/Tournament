import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {OrderModule} from 'ngx-order-pipe';
import { AppComponent } from './app.component';
import { TableListingComponent } from './table-listing/table-listing.component';
import { SettingsComponent } from './settings/settings.component';
import {PlayerService} from './player.service';
import {GameService} from './game.service';
import { GameRegistrationComponent } from './game-registration/game-registration.component';
import { SortTablePipe } from './sort-table.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableListingComponent,
    SettingsComponent,
    GameRegistrationComponent,
    SortTablePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    OrderModule
  ],
  providers: [PlayerService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
