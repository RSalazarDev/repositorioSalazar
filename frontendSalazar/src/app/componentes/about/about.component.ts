import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  tabCarta() {
    window.open('http://localhost:4200/assets/public/Carta.png');
  }

  tabCv() {
    window.open('http://localhost:4200/assets/public/Curriculum.png');
  }
}
