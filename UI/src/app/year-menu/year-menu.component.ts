import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { RosterService } from '../services/roster.service';
import { YearService } from '../services/year.service';

@Component({
  selector: 'year-menu',
  templateUrl: './year-menu.component.html',
  styleUrls: ['./year-menu.component.css']
})
export class YearMenuComponent implements OnInit {


  @Input() CompetitionYear! : string;
  @Input() CompetitionName! : string;
  @ViewChild('season') season!: ElementRef;

  teamYear: string = this._YearService.teamYear;
  hyphen: string = '-';
  campaignYear!: string;
  SeasonList = [];

  constructor(private rosterService: RosterService, private _YearService:YearService) { }

  ngOnInit(): void {
    // this.campaignYear = [this.CompetitionYear.slice(0, 4), this.hyphen, this.CompetitionYear.slice(4)].join('');
    this.refreshSeasonList();
    this.sendValueIntoService(this.teamYear);
  }

  refreshSeasonList(){
    this.rosterService.getSeasonList().subscribe((data)=>{
      this.SeasonList=data;
    });
  }

  sendValueIntoService(value: any) {
    this._YearService.setTeamYear(value);
    this.teamYear = value;
    console.log(value);
  }
}
