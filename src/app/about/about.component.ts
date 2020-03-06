import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  dev = {
    js: 80,
    angular: 50,
    react: 65,
    node: 40,
    php: 70,
    java: 40,
    c: 40,
    rest: 80,
    ajax: 80
  }

  ui = {
    html: 90,
    css: 75,
    sass: 75,
    design: 70,
    photoshop: 50,
    xd: 50
  }

  db = {
    oracle: 70,
    mysql: 70,
    postgre: 70,
    nosql: 50
  }
  
  constructor() { 
  }

  ngOnInit() {
  }

}
