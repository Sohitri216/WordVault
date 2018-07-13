import { Component, OnInit, ViewChild, ViewChildren, ElementRef, AfterViewInit } from '@angular/core';
import { VaultComponent } from "./vault/vault.component";
import { McqComponent } from "./mcq/mcq.component";

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  constructor() { }

  roundVal: number;
  footerElements: any;
  animDataObj: {
    start: number,
    stop: number
  }
  @ViewChild('footerRounds') footerRounds: ElementRef;
  @ViewChild(VaultComponent) vault: VaultComponent;
  @ViewChild(McqComponent) mcq: McqComponent;

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
  }

  rotationStatus($event) {
    // console.log('rotation status',$event);
    if ($event) {
      // console.log('Rotation done');
      this.mcq.checkForRepeat();
    }
  }

  receiveMessage($event) {
    this.roundVal = $event;
    console.log('message:', this.roundVal);
    this.footerRoundCompletion()
  }

  receiveAnimData($event) {
    console.log('Anim Data:', $event);
    // this.vault.animData=$event;
    this.vault.srcValue = $event.start;
    this.vault.stopRange = $event.stop;
    this.vault.changeSrc();
  }

}
