import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { YearService } from '../services/year.service';

@Component({
  selector: 'roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {

  @Input() teamYear: string = this._yearService.teamYear;

  constructor(private _yearService: YearService) {}

  ngOnInit(): void {
    // this.sendValueIntoService(this.teamYear);
  }

  sendValueIntoService(value: string) {
    this._yearService.setTeamYear(value);
  }
}
