import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  //myHost: string = 'https://thalesleite.github.io';

  projects = [
    {
      name: 'orlanda',
      description: `It's a volunteer project for a nursing home with some advices of care for elders. The website was created using AngularJS 2 and SASS.`,
      link: `https://orlanda.netlify.com`
    },
    {
      name: 'monsters roledex',
      description: `This project is just an study of ReactJS and its basics. It is get some monsters data and you can filter it by name.`,
      link: `https://thalesleite.github.io/monsters-roledex`
    },
    {
      name: 'be the hero',
      description: `It is a project to help to connecto ongs with people that want to make the difference. They wanna be a hero. It is a fullstack app, backend in NodeJS, frontend in ReactJS and a mobile app using React Native.`,
      link: `https://thales-be-the-hero.netlify.com`
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
