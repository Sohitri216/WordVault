import { Component, OnInit, ViewChild, ViewChildren, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  constructor() { }

  roundVal: number;
  footerElements: any;
  @ViewChild('footerRounds') footerRounds: ElementRef;

  ngOnInit() {
    // console.log('footer:', this.footerRounds.nativeElement.childNodes);
    this.footerElements = this.footerRounds.nativeElement.childNodes;
  }

  footerRoundCompletion() {

    this.footerElements[this.roundVal - 1].style = 'background-color: #fabf0f';
    console.log(this.footerElements[1]);
    for (var i = 0; i < this.footerElements.length; i++) {
      // console.log(this.footerElements[i]);
      if (i !== (this.roundVal - 1)) {
        this.footerElements[i].style = 'background-color: #fff';
      }
    }
    // this.footerElements.map((each,idx)=>{
    // console.log(each,idx);
    // if(idx!==this.roundVal-1){
    //   each[idx].style='background-color: #fff';
    // }
    // })
  }

  receiveMessage($event) {
    this.roundVal = $event;
    console.log('message:', this.roundVal);
    this.footerRoundCompletion()
  }

}
