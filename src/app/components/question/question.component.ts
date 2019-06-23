import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../models/Question';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {
  @Input('question') question: Question;
  isEdit = false;

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  showQuestion() {
    this.question.hide = !this.question.hide;
  }

  removeQuestion(question) {
    this.dataService.removeQuestion(question);
  }

  editQuestion(question) {
    this.isEdit = true;
    this.question = question;
  }

}
