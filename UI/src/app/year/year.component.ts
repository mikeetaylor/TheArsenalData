import { Component, Input, OnInit } from '@angular/core';
import { YearService } from '../services/year.service';

@Component({
  selector: 'year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {

  @Input() campaignYear!: string;
  
  teamYear: string;
  hyphen: string = '-';

  constructor(public _year:YearService) { }

  ngOnInit(): void {
    this.campaignYear = this._year.teamYear;
    //  this.campaignYear = [this.teamYear.slice(0, 4), this.hyphen, this.teamYear.slice(4)].join('');
    }

}
