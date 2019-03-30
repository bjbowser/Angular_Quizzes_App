import { Component, OnInit, Input } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Question } from '../question.model';
import { LOTROClass } from '../class.model';

@Component({
  selector: 'app-class-quiz',
  templateUrl: './class-quiz.component.html',
  styleUrls: ['./class-quiz.component.sass']
})
export class ClassQuizComponent implements OnInit {
  answers = '';
  classAnswered: LOTROClass;
  loadedQuestion: Question;
  constructor(private questionsService: QuestionsService) {  }

  ngOnInit() {
    this.loadedQuestion = this.questionsService.getClassQuestion(0);
  }

  chooseOption(event: any) {
    this.answers += event.target.id;
    if (this.answers.length < 6) {
      this.loadedQuestion = this.questionsService.getClassQuestion(this.answers.length);
    } else {
      this.classAnswered = this.questionsService.getBestClass(this.answers);
    }
  }
}
