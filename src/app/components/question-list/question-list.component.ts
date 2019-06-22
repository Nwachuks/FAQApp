import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions: Object[];

  constructor() {
    this.questions = [
      {
        questiontext: 'What is your name?',
        questionanswer: 'My name is Nwachukwu Ejiofor.'
      },
      {
        questiontext: 'What is your favourite colour?',
        questionanswer: 'My favourite colour is blue.'
      },
      {
        questiontext: 'What is your favourite programming language?',
        questionanswer: 'My favourite programming language is Java.'
      }
    ];
  }

  ngOnInit() {
  }

}
