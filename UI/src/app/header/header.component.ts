import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  @Input() public headerDisplay = false;

  constructor(public _router: Router){}

  ngOnInit(): void {
  }
//Print Page
  printPage() {
    window.print();
  }
}
