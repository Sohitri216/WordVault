import { Component, OnInit } from '@angular/core';
import  QuizData  from './data';

@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.scss']
})
export class McqComponent implements OnInit {
  currentPageData: Array<any>;
  currentPageNo: number=1;
  quizData: Array<any>=QuizData.quizData;
  constructor() { }

  ngOnInit() {
    console.log(this.quizData);
    this.currentPageData = this.quizData[this.currentPageNo-1];
    console.log(this.currentPageData);
  }

}
