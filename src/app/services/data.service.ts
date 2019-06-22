import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  questions: Question[];

  constructor() {
    this.questions = [
      {
        questiontext: 'What is your name?',
        questionanswer: 'My name is Nwachukwu Ejiofor.',
        hide: true
      },
      {
        questiontext: 'What is your favourite colour?',
        questionanswer: 'My favourite colour is blue.',
        hide: true
      },
      {
        questiontext: 'What is your favourite programming language?',
        questionanswer: 'My favourite programming language is Java.',
        hide: true
      }
    ];
  }

  getQuestions() {
    return this.questions;
  }

  addQuestion(question: Question) {
    this.questions.unshift(question);
  }
}
