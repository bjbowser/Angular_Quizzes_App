import { Component, OnInit, Input } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Question } from '../question.model';
import { LOTROCraft } from '../craft.model';

@Component({
  selector: 'app-craft-quiz',
  templateUrl: './craft-quiz.component.html',
  styleUrls: ['./craft-quiz.component.sass']
})
export class CraftQuizComponent implements OnInit {
  answers = '';
  craftAnswered: LOTROCraft;
  loadedQuestion: Question;
  constructor(private questionsService: QuestionsService) {  }

  ngOnInit() {
    this.loadedQuestion = this.questionsService.getCraftQuestion(0);
  }

  chooseOption(event: any) {
    this.answers += event.target.id;
    if (this.answers.length < 5) {
      this.loadedQuestion = this.questionsService.getCraftQuestion(this.answers.length);
    } else {
      this.craftAnswered = this.questionsService.getBestCraft(this.answers);
    }
  }
}
