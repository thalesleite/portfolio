import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  myHost: string = 'https://thalesleite.github.io';

  projects = [
    {
      name: 'orlanda',
      description: `It's a volunteer project for a nursing home with some advices of care for elders. The website was created using AngularJS 2 and SASS.`,
      link: `${this.myHost}/orlanda`
    },
    {
      name: 'monsters roledex',
      description: `This project is just an study of ReactJS and its basics. It is get some monsters data and you can filter it by name.`,
      link: `${this.myHost}/monsters-roledex`
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
