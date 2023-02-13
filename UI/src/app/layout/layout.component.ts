import { Component } from '@angular/core';
import { YearService } from '../services/year.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  teamYear: any;

  constructor(private yearService: YearService){}

  ngOnInit(){
    this.teamYear = this.yearService.teamYear;
    console.log(this.teamYear)
}
}
