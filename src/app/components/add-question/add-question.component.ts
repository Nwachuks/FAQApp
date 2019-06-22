import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from '../../models/Question';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  @Output() questionAdded = new EventEmitter<Question>();
  newquestiontext: string;
  newquestionanswer: string;
  // question: Question

  constructor() { }

  ngOnInit() {
  }

  addQuestion() {
    this.questionAdded.emit({questiontext: this.newquestiontext, questionanswer: this.newquestionanswer, hide: true});
    this.newquestiontext = '';
    this.newquestionanswer = '';
  }

}
