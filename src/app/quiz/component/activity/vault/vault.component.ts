import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import { Subscription } from 'rxjs';
const ASSETS = "assests/sprite";

@Component({
  selector: 'app-vault',
  templateUrl: './vault.component.html',
  styleUrls: ['./vault.component.scss'],
  providers: []
})
export class VaultComponent implements OnInit {
  imgSrc: string;
  // srcValue: number = 2;
  srcValue: number;
  count: number = 1;
  stopRange: number;
  subscription: Subscription;
  receivedData: any;
  rotateDone: Boolean = false;
  animData: {
    start: number,
    stop: number
  }
  @Output() rotationComplete = new EventEmitter<object>();
  constructor() { }

  ngOnInit() {
    this.initVaultImage();
  }

  initVaultImage(){
    this.imgSrc = 'assets/sprite/lock0001.png';
  }



  changeSrc() {
    let sourceVal;
    let handle = setInterval(() => {
      sourceVal = this.appendSrc();
      this.imgSrc = 'assets/sprite/lock' + sourceVal + '.png';
      this.srcValue++;
      if (this.srcValue > this.stopRange) { 
        this.rotateDone = true;
        this.rotationComplete.emit(this.rotateDone);
        clearInterval(handle);
      }
    }, 100);


  }

  appendSrc() {
    let source: string;
    source = this.srcValue.toString();
    while (this.count < 4) {
      source = '0' + source;
      if (source.length === 4)
        break;
    }
    // console.log('sourceVal:', source);
    return source;
  }
}
