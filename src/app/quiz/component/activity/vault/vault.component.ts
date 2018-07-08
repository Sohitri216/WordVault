import { Component, OnInit } from '@angular/core';
const ASSETS = "assests/sprite";

@Component({
  selector: 'app-vault',
  templateUrl: './vault.component.html',
  styleUrls: ['./vault.component.scss']
})
export class VaultComponent implements OnInit {
  imgSrc: any;
  srcValue: number = 2;
  srcNo: any;
  imgNum: any;
  count: number = 1;
  constructor() { }

  ngOnInit() {
    let c=1;
    this.imgSrc = 'assets/sprite/lock0001.png';
    this.changeSrc();
    // let handle=setInterval(()=>{
    //   console.log('in set interval');
    //   c++;
    //   if(c===5){
    //     clearInterval(handle);
    //   }
    // },500);
    
  }

  changeSrc() {
    let sourceVal;
    let handle = setInterval(()=>{
      sourceVal = this.appendSrc();
      this.imgSrc = 'assets/sprite/lock' + sourceVal + '.png';
      // console.log('imgSrc:',this.imgSrc);
      this.srcValue++;
      // sourceVal=this.appendSrc();
      console.log('imgSrc:',this.imgSrc);
      if(this.srcValue>=10){
        clearInterval(handle);
      }
    }, 500);
    
    
  }

  doYourJob(){
    let sourceVal;
      console.log('in set interval');
      
     
  }

  appendSrc() {
    let source: string;
    // while (this.srcValue <= 10) {
      source = this.srcValue.toString();
      while (this.count < 4) {
        source = '0' + source;
        if (source.length === 4)
          break;
      }
      console.log('sourceVal:', source);
      return source;
    // }
  }

  

}
