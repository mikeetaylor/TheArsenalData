import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { MainModule } from './main/main.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RosterComponent } from './roster/roster.component';

import { RosterService } from './services/roster.service';
import { CompetitionMenuComponent } from './competition-menu/competition-menu.component';
import { Menu3031Component } from './competition-menu/menu3031/menu3031.component';
import { Menu2930Component } from './competition-menu/menu2930/menu2930.component';
import { Menu2829Component } from './competition-menu/menu2829/menu2829.component';
import { TablesComponent } from './tables/tables.component';
import { AmericanChallengeCupTableComponent } from './tables/american-challenge-cup-table/american-challenge-cup-table.component';
import { AsiaEliteCupTableComponent } from './tables/asia-elite-cup-table/asia-elite-cup-table.component';
import { ChampionsTrophyTableComponent } from './tables/champions-trophy-table/champions-trophy-table.component';
import { CommunityShieldTableComponent } from './tables/community-shield-table/community-shield-table.component';
import { EplTableComponent } from './tables/epl-table/epl-table.component';
import { FaCupTableComponent } from './tables/fa-cup-table/fa-cup-table.component';
import { LeagueCupTableComponent } from './tables/league-cup-table/league-cup-table.component';
import { RosterTableComponent } from './tables/roster-table/roster-table.component';
import { SaContinentalCupTableComponent } from './tables/sa-continental-cup-table/sa-continental-cup-table.component';
import { SuperCupTableComponent } from './tables/super-cup-table/super-cup-table.component';
import { UclTableComponent } from './tables/ucl-table/ucl-table.component';

import { RosterTable20302031Component } from './tables/roster-table/20302031/roster-table20302031/roster-table20302031.component';

import { AddPlayerModalComponent } from './modals/add-player-modal/add-player-modal.component';
import { YearMenuComponent } from './year-menu/year-menu.component';
import { RosterPlayerModalComponent } from './modals/roster-player-modal/roster-player-modal.component';
import { HeightPipe } from './pipes/height.pipe';
import { YearService } from './services/year.service';
import { YearComponent } from './year/year.component';
import { EditPlayerModalComponent } from './modals/edit-player-modal/edit-player-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    // routingComponents,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    RosterComponent,
    RosterTable20302031Component,
    CompetitionMenuComponent,
    Menu3031Component,
    Menu2930Component,
    Menu2829Component,
    TablesComponent,
    AmericanChallengeCupTableComponent,
    AsiaEliteCupTableComponent,
    ChampionsTrophyTableComponent,
    CommunityShieldTableComponent,
    EplTableComponent,
    FaCupTableComponent,
    LeagueCupTableComponent,
    RosterTableComponent,
    SaContinentalCupTableComponent,
    SuperCupTableComponent,
    UclTableComponent,
    AddPlayerModalComponent,
    YearMenuComponent,
    RosterPlayerModalComponent,
    HeightPipe,
    YearComponent,
    EditPlayerModalComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    OrderModule,
    MainModule,
    ReactiveFormsModule
  ],
  providers: [RosterService, YearService],
  bootstrap: [AppComponent]
})
export class AppModule { }
