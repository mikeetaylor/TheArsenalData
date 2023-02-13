import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  
  isHeader:boolean = false;

  images: string[] = [
  'action-dufour.jpg', 
  'action-van-der-linden.jpg', 
  'action-dufour-reckless.jpg', 
  'action-neves-reckless.jpg'];
  path: string = '../../assets/images/';
  backgroundImage!: string;

  constructor() { }

  ngOnInit(): void {
    let randomImage = Math.floor(Math.random() * this.images.length);
    this.backgroundImage = this.path + this.images[randomImage];
    console.log(this.backgroundImage);
  }
}
