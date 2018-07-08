import { Component, ViewChild, ViewChildren, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';
import QuizData from './data';

@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.scss']
})
export class McqComponent implements OnInit {
  currentPageData: any;
  currentPageNo: number = 1;
  subRoundPageNumber: number = 1;
  attempNo: number = 0;
  quizData: Array<any> = QuizData.quizData;
  currentSet: number;
  nextSet: number;
  nextSetIndex: number;
  repeatQs: Boolean = false;
  highestSetValue: number;
  lastSet: Boolean = false;
  questionInQueue: Array<any> = [];
  roundLevel:number=1;
  currentSelectedOption: string;
  @ViewChildren('option') option: ElementRef;
  @ViewChildren('optionText') optionText: ElementRef;
  @Output() messageEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    this.messageEvent.emit(this.roundLevel);
    this.setAttemptedState();
    this.goToNextQuestion();
    this.highestSetValue = this.quizData[this.quizData.length - 1].set;
  };

  resetQuiz() {
    // initialize the values for reset
    this.currentPageNo = 1;
    this.subRoundPageNumber = 1;
    this.attempNo = 0;
    this.repeatQs = false;
    this.lastSet = false;
    this.questionInQueue = [];
    this.roundLevel=1;
    this.messageEvent.emit(this.roundLevel);
    //load the first page
    this.currentPageData = this.randomizeOptions(this.quizData[this.currentPageNo - 1], this.quizData[this.currentPageNo - 1].answer);
    this.currentSet = this.quizData[this.currentPageNo - 1].set;
    this.nextSet = this.quizData[this.currentPageNo].set;
    this.nextSetIndex = this.currentSet + 1;
    console.log(this.currentPageData);
    this.setAttemptedState();
  }

  setAttemptedState() {
    this.quizData.map((each, index) => {
      each.attemptState = "Not attempted";
    })
  }

  checkLastSet(): Boolean {

    if ((this.currentPageData.questionText.trim() === this.quizData[this.quizData.length - 1].questionText.trim()) && (this.currentSet === this.highestSetValue)) {
      return true;
    } else {
      return false;
    }

  }

  quizEndScreen() {
    if (this.nextSet === 0 && this.lastSet) {
      console.log('Finished');
      alert('Finished');
    }
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
    console.log('repeat q:', this.questionInQueue, this.subRoundPageNumber);
    this.currentPageData = this.randomizeOptions(this.questionInQueue[this.subRoundPageNumber - 1], this.questionInQueue[this.subRoundPageNumber - 1].answer);
    if (this.questionInQueue.length > 1) {
      this.currentSet = this.questionInQueue[this.subRoundPageNumber - 1].set;
      // for last element in question queue, nextset becomes nextsetindex
      if (this.subRoundPageNumber === this.questionInQueue.length) {
        this.nextSet = this.nextSetIndex;
      }
      else {
        this.nextSet = this.questionInQueue[this.subRoundPageNumber].set;
      }
    }

    else {
      this.currentSet = this.questionInQueue[this.subRoundPageNumber - 1].set;
      this.nextSet = this.nextSetIndex;
    }

    console.log(this.currentSet, this.nextSet);
  }

  roundComplete() {
    console.log('Round complete');
    this.roundLevel++;
    this.messageEvent.emit(this.roundLevel);
    alert('Round complete');
    // Move vault
  }

  goToNextQuestion() {
    if (this.lastSet) {
      console.log('Finished');
      alert('Finished');
      return;
    }
    this.attempNo = 0;
    console.log('repeat false');
    // console.log(this.quizData);
    this.currentPageData = this.randomizeOptions(this.quizData[this.currentPageNo - 1], this.quizData[this.currentPageNo - 1].answer);
    this.currentSet = this.quizData[this.currentPageNo - 1].set;
    if (this.currentSet === this.nextSetIndex) {
      this.roundComplete();
    }
    // (this.currentSet === this.highestSetValue) ? this.lastSet = true : this.lastSet = false;
    if (this.checkLastSet()) {
      this.lastSet = true;
      this.nextSet = 0;
    } else {
      this.nextSet = this.quizData[this.currentPageNo].set;
    }

    this.nextSetIndex = this.currentSet + 1;
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
    console.log('set:::', this.currentSet, this.nextSet);
    if (this.currentSet === this.nextSet) {
      if (this.repeatQs) {
        console.log('subround page:', this.subRoundPageNumber);
        // this.subRoundPageNumber = 0;
        if (this.subRoundPageNumber < this.questionInQueue.length) {
          this.subRoundPageNumber++;
        }
        else if (this.subRoundPageNumber === this.questionInQueue.length) {
          this.subRoundPageNumber = 1;
        }

        setTimeout(() => {
          this.repeatQuestion();
        }, 1200)
      } else {
        this.currentPageNo++;
        setTimeout(() => {
          this.goToNextQuestion();
        }, 1200)
      }


      console.log('same set, set:', this.currentSet)
    }
    // else if (this.nextSet === 0 && this.lastSet) {
    //   console.log('Finished');
    //   alert('Finished');
    // }
    else {
      console.log('Different set:', this.nextSet, this.questionInQueue);
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
        this.subRoundPageNumber = 1;
        setTimeout(() => {
          this.repeatQuestion();
        }, 1200)
        //again go to same set question one after one
      }
    }
  }

  submit() {
    let spliceIndex: number;
    let matchedFLag: Boolean = false;
    if (this.currentSelectedOption === this.currentPageData.options[this.currentPageData.answer]) {
      // when secondd time correct
      if (this.currentPageData.attemptState === 'incorrect') {
        this.currentPageData.attemptState = "correct";
        this.questionInQueue.map((each, idx) => {
          if (each.questionText === this.currentPageData.questionText) {
            spliceIndex = idx;
          }
        });
        // if (this.questionInQueue.length > 0) {
        this.questionInQueue.splice(spliceIndex, 1);
        console.log(this.questionInQueue);
        if (this.questionInQueue.length === 0) {
          console.log('empty question in queue:', this.questionInQueue);
          this.repeatQs = false;
          this.subRoundPageNumber = 1;
          // this.roundComplete();
        } else {
          this.repeatQs = true;
        }
        // }

        this.checkQuestionSet();
      }
      else {
        console.log('not attempted question made correct');
        this.currentPageData.attemptState = "correct";
        console.log('correct');
        this.checkQuestionSet();
      }
    } else {
      console.log('incorrect');
      if (this.attempNo < 2) {
        this.attempNo++;
        if (this.attempNo === 2) {
          if (this.currentPageData.attemptState === "Not attempted") {
            this.currentPageData.attemptState = "incorrect";
            this.questionInQueue.push(this.currentPageData);
            this.repeatQs = false;
          }
          else {
            this.repeatQs = true;
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
