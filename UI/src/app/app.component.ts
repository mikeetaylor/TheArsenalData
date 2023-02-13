import { Component, Input, OnInit, } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { YearService } from './services/year.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  hyphen: string = '-';
  title = 'UI';
  show: boolean;
  teamYear: string;

  constructor(private router: Router, private _yearChanged: YearService) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/' || 
            event.url === '/Home' || 
            event.url === '/PageNotFound' || 
            event.url === 'PageNotFound') {
          this.show= true;
          // console.log(this.show)
        } else {
          this.show= false;
          // console.log(this.show)
        }
      }
    });
  }

  ngOnInit(): void {
    // console.log(this.teamYear);
    this.teamYear = [this._yearChanged.teamYear.slice(0, 4), this.hyphen, this._yearChanged.teamYear.slice(4)].join('');
  //  this.campaignYear = [this.teamYear.slice(0, 4), this.hyphen, this.teamYear.slice(4)].join('');
  }
}
