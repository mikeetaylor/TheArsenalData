import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  images: string[] = [
    'action-malen.jpg',
    'action-roldan.jpg', 
    'action-crowd2.jpg', 
    'action-community-shield.jpg',
    'action-lawton-celebrates-at-leeds.jpg',
    'action-silveira.jpg',
    'action-martinelli-at-liverpool.jpg',
    'action-odegaard.jpg',
    'action-odegaard2.jpg',
    'action-seidel.jpg',
    'action-seidel2.jpg',
    'action-goal-celebration.jpg',
    'action-goal-celebration2.jpg',
    'action-goal-celebration3.jpg',
    'action-goal-celebration4.jpg',
    'action-moussa.jpg',
    'action-bourgeois.jpg'];
    path: string = './assets/images/';
    backgroundImage!: string;

    constructor(){}

    ngOnInit(): void {
      let randomImage = Math.floor(Math.random() * this.images.length);
      this.backgroundImage = this.path + this.images[randomImage];
      console.log(this.backgroundImage);
    }
}
