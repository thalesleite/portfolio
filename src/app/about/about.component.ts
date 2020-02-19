import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  dev = {
    js: 80,
    angular: 60,
    react: 65,
    node: 50,
    php: 70,
    java: 50,
    c: 50,
    rest: 80,
    ajax: 80
  }

  ui = {
    html: 85,
    css: 80,
    sass: 80,
    design: 80,
    photoshop: 50,
    xd: 50
  }

  db = {
    oracle: 70,
    mysql: 70,
    postgre: 60,
    nosql: 50
  }
  
  constructor() { 
  }

  ngOnInit() {
  }

}
