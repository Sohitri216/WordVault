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
  subRoundPageNumber:number=1;
  attempNo: number = 0;
  quizData: Array<any> = QuizData.quizData;
  currentSet: number;
  nextSet: number;
  nextSetIndex:number;
  repeatQs: Boolean = false;
  questionInQueue: Array<any> = [];

  currentSelectedOption: string;
  @ViewChildren('option') option: ElementRef;
  @ViewChildren('optionText') optionText: ElementRef;
  constructor() { }

  ngOnInit() {
    this.setScreenNumber();
    this.goToNextQuestion();
  };

  setScreenNumber(){
    this.quizData.map((each,index)=>{
      each.screenNo=index+1;
      each.attemptState="Not attempted";
    })
  }

  selectAnswer(selectedOption, idx) {
    this.currentSelectedOption = selectedOption;
    let option = this.option['_results'];
    option[idx].nativeElement.style = 'background-color:#fefe00';
    option.map((each, index) => {
      if (index !== idx) {
        option[index].nativeElement.style = 'background-color: #ededed';
      }
    })
  };

  repeatQuestion() {
    this.attempNo = 0;
    // console.log('repeat true', this.currentPageNo);
    console.log('repeat q:',this.questionInQueue);
    this.currentPageData = this.randomizeOptions(this.questionInQueue[this.subRoundPageNumber - 1], this.questionInQueue[this.subRoundPageNumber - 1].answer);
    if(this.questionInQueue.length>1){
      this.currentSet = this.questionInQueue[this.subRoundPageNumber - 1].set;
      this.nextSet = this.questionInQueue[this.subRoundPageNumber].set;
    }
    else{
      this.currentSet = this.questionInQueue[this.subRoundPageNumber - 1].set;
      this.nextSet = this.nextSetIndex;
    }
    
    console.log(this.currentSet,this.nextSet);
  }

  roundComplete(){
    console.log('Round complete');
    // Move vault
  }

  goToNextQuestion() {
    this.attempNo=0;
    console.log('repeat false');
    console.log(this.quizData);
    this.currentPageData = this.randomizeOptions(this.quizData[this.currentPageNo - 1], this.quizData[this.currentPageNo - 1].answer);
    this.currentSet = this.quizData[this.currentPageNo - 1].set;
    if(this.currentSet===this.nextSetIndex){
      this.roundComplete();
    }
    this.nextSet = this.quizData[this.currentPageNo].set;
    this.nextSetIndex=this.currentSet+1;
    // if(this.currentSet=this)
    console.log(this.currentPageData);
  };

  clearSelectedOption() {
    let option = this.option['_results']
    option.map((each, index) => {
      option[index].nativeElement.style = 'background-color:#ededed';
    })
  };

  clearSelectedText() {
    let optionText = this.optionText['_results'];
    optionText.map((each, index) => {
      optionText[index].nativeElement.style = 'color:#111';
    });
  };

  showCorrectAnswer() {
    let correctAns = this.currentPageData.options[this.currentPageData.answer];
    let optionText = this.optionText['_results'];

    optionText.map((each, index) => {
      if (each.nativeElement.innerText.toString().trim() === correctAns.toString().trim()) {
        optionText[index].nativeElement.style = 'color:#58ff00';
      }
      if (each.nativeElement.innerText.toString().trim() === this.currentSelectedOption.toString().trim()) {
        optionText[index].nativeElement.style = 'color:#ed1c24';
      }
    });
    setTimeout(() => {
      this.clearSelectedText();
      // this.goToNextQuestion();

    }, 600);
    this.checkQuestionSet();
  }



  checkQuestionSet() {
    console.log('set:::',this.currentSet,this.nextSet);
    // if(repeatFlag){
    //   // if(this.currentSet===this.nextSetIndex)
    // }else{

    // }
    if (this.currentSet === this.nextSet) {
      this.currentPageNo++;
      setTimeout(() => {
        this.goToNextQuestion();
      }, 1200)

      console.log('same set, set:', this.currentSet)
    }
    else {
      console.log('Different set:', this.nextSet,this.questionInQueue);
      // For correct all correct set
      if (this.questionInQueue.length === 0) {
        this.currentPageNo++;
        // this.repeatQs = false;
        this.goToNextQuestion();
        //increase footer color count
      }
      else {
        // this.repeatQs = true;
        // this.currentPageNo = this.currentPageNo - this.questionInQueue.length;
        setTimeout(() => {
          this.repeatQuestion();
        }, 1200)
        //again go to same set question one after one
      }
    }
  }

  submit() {
    let spliceIndex:number;
    let matchedFLag:Boolean=false;
    if (this.currentSelectedOption === this.currentPageData.options[this.currentPageData.answer]) {
      if(this.currentPageData.attemptState==='incorrect'){
        
        this.questionInQueue.map((each,idx)=>{
          if(each.questionText===this.currentPageData.questionText){
            spliceIndex=idx;
          }
        });
        this.questionInQueue.splice(spliceIndex,1);
        console.log(this.questionInQueue);
        this.repeatQs=true;
        this.checkQuestionSet();
      }
      else{
        console.log('not attempted question made correct');
        this.checkQuestionSet();
      }
      this.currentPageData.attemptState = "correct";
      console.log('correct');
      // this.currentPageNo++;
     
      // this.goToNextQuestion();
    } else {
      console.log('incorrect');
      this.questionInQueue.map((each,idx)=>{
        if(each.questionText===this.currentPageData.questionText){
          matchedFLag=true;
        }
      });
      if (this.attempNo < 2) {
        this.attempNo++;
        if (this.attempNo === 2) {
         
          this.currentPageData.attemptState = "incorrect"
          if(!matchedFLag){
            this.questionInQueue.push(this.currentPageData);
          }
         
          this.showCorrectAnswer();


          /**
           * store the incorrect question, to check for vault opening
           */

        }
        // this.getCurrentQuestion();
      }
      else {
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
    // eachObj.attemptState = "Not attempted";
    return eachObj;
  };

}
