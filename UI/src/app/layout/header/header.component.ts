import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  ngOnInit(): void {
  }
//Print Page
  printPage() {
    window.print();
  }
}
