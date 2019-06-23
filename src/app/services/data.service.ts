import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  questions: Question[];

  constructor() {
    // this.questions = [
    //   {
    //     questiontext: 'What is your name?',
    //     questionanswer: 'My name is Nwachukwu Ejiofor.',
    //     hide: true
    //   },
    //   {
    //     questiontext: 'What is your favourite colour?',
    //     questionanswer: 'My favourite colour is blue.',
    //     hide: true
    //   },
    //   {
    //     questiontext: 'What is your favourite programming language?',
    //     questionanswer: 'My favourite programming language is Java.',
    //     hide: true
    //   }
    // ];
  }

  // Get questions from local storage
  getQuestions() {
    if (localStorage.getItem('questions') === null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }

    return this.questions;
  }

  // Add questions to local storage
  addQuestion(question: Question) {
    this.questions.unshift(question);

    // Init local var
    let questions;

    if (localStorage.getItem('questions') === null) {
      questions = [];

      // Push new question
      questions.unshift(question);

      // Set new array to local storage
      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));

      // Add new question
      questions.unshift(question);

      // Reset local storage to updated array
      localStorage.setItem('questions', JSON.stringify(questions));
    }
  }

  removeQuestion(question: Question) {
    for (let i = 0; i < this.questions.length; i++) {
      if (question === this.questions[i]) {
        this.questions.splice(i, 1);

        // Reset local storage to updated array
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }
}
