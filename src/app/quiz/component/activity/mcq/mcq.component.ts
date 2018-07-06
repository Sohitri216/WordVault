import { Component, ViewChild, ViewChildren, ElementRef, OnInit } from '@angular/core';
import QuizData from './data';

@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.scss']
})
export class McqComponent implements OnInit {
  currentPageData: any;
  currentPageNo: number = 1;
  attempNo:number=0;
  quizData: Array<any> = QuizData.quizData;
  currentSelectedOption: string;
  @ViewChildren('option') option: ElementRef;
  @ViewChildren('optionText') optionText: ElementRef;
  constructor() { }

  ngOnInit() {
    this.goToNextQuestion();
  };


  selectAnswer(selectedOption, idx) {
    this.currentSelectedOption = selectedOption;
    let option = this.option['_results'];
    option[idx].nativeElement.style = 'background-color:#fabf0f';
    option.map((each, index) => {
      if (index !== idx) {
        option[index].nativeElement.style = 'background-color:#fff';
      }
    })
  };

  goToNextQuestion(){
    this.attempNo=0;
    console.log(this.quizData);
    this.currentPageData = this.randomizeOptions(this.quizData[this.currentPageNo - 1], this.quizData[this.currentPageNo - 1].answer);
    console.log(this.currentPageData);
  };

  clearSelectedOption(){
    let option = this.option['_results']
    option.map((each, index) => {
        option[index].nativeElement.style = 'background-color:#fff';
    })
  };

  clearSelectedText(){
    let optionText = this.optionText['_results'];
    optionText.map((each, index) => {
        optionText[index].nativeElement.style = 'color:#111';
    });
  };

   showCorrectAnswer(){
    let correctAns=this.currentPageData.options[this.currentPageData.answer];
    let optionText = this.optionText['_results'];

    optionText.map((each, index) => {
      if (each.nativeElement.innerText.toString().trim() === correctAns.toString().trim()) {
        optionText[index].nativeElement.style = 'color:#58ff00';
      }
      if(each.nativeElement.innerText.toString().trim()=== this.currentSelectedOption.toString().trim()){
        optionText[index].nativeElement.style = 'color:#ed1c24';
      }
    });
    
    
    setTimeout(()=>{
      this.clearSelectedText();
      this.goToNextQuestion();
    },1000)
   }

  submit() {
    if (this.currentSelectedOption === this.currentPageData.options[this.currentPageData.answer]) {
      console.log('correct');
      this.currentPageNo++;
      this.goToNextQuestion();
    } else {
      console.log('incorrect');
      if(this.attempNo<2){
        this.attempNo++;
        if(this.attempNo===2){
          this.showCorrectAnswer();
          this.currentPageNo++;
          /**
           * store the incorrect question, to check for vault opening
           */
          
        }
        // this.getCurrentQuestion();
      }
      else{
        this.goToNextQuestion();
      }
    }
    this.clearSelectedOption();
   
  };

  randomizeOptions(eachObj, correctOption): any {
    let correctIndex: number;
    let optionArray: string[] = eachObj.options;
    let correctAns: string = eachObj.options[correctOption];
    let currentIndex = optionArray.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = optionArray[currentIndex];
      optionArray[currentIndex] = optionArray[randomIndex];
      optionArray[randomIndex] = temporaryValue;
    }

    eachObj.options.map((each, idx) => {
      if (each === correctAns) {
        correctIndex = idx;
      }
    });

    eachObj.answer = correctIndex;
    eachObj.options = optionArray;
    return eachObj;
  };

}
