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
      link: `https://orlanda.netlify.app`
    },
    {
      name: 'monsters roledex',
      description: `This project is just an study of ReactJS and its basics. It is get some monsters 
                    data and you can filter it by name.`,
      link: `https://thalesleite.github.io/monsters-roledex`
    },
    {
      name: 'be the hero',
      description: `It will help connect ongs with people that want to make the difference. 
                    They wanna be a hero. It is a fullstack app, backend in NodeJS, frontend in ReactJS and a 
                    mobile app using React Native.`,
      link: `https://thales-be-the-hero.netlify.app`
    },
    {
      name: 'to do app',
      description: `With this web app you can put all your tasks that you wanna to complete.
                    It will help you to organise your day.
                    Technologies: Vanilla Javascript, HTML5 and CSS3`,
      link: `https://thales-todo.netlify.app`
    },
    {
      name: 'notes app',
      description: `You can put your notes here in this web app, easily and faster.
                    It is a regular notes apps to help you to remember things.
                    Technologies: Vanilla Javascript, HTML5 and CSS3`,
      link: `https://thales-notes.netlify.app`
    },
    {
      name: 'hangman',
      description: `It is funny game app. You try to find the hidden word within 5 guesses letters.
                    Technologies: Vanilla Javascript, HTML5 and CSS3`,
      link: `https://thales-hangman.netlify.app`
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
