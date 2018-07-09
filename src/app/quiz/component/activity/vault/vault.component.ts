import { Component, OnInit } from '@angular/core';
import { VaultDataService } from '../../../service/vault-data.service';
import { Subscription } from 'rxjs';
const ASSETS = "assests/sprite";

@Component({
  selector: 'app-vault',
  templateUrl: './vault.component.html',
  styleUrls: ['./vault.component.scss'],
  providers: [VaultDataService]
})
export class VaultComponent implements OnInit {
  imgSrc: string;
  srcValue: number = 2;
  count: number = 1;
  subscription: Subscription;
  constructor(private vaultDataService: VaultDataService) { }

  ngOnInit() {
    this.imgSrc = 'assets/sprite/lock0001.png';
    // this.changeSrc();
    this.subscription = this.vaultDataService.animTriggerObs.subscribe((res) => {
      console.log('from vault:', res);
    });
  }

  changeSrc() {
    let sourceVal;
    let handle = setInterval(() => {
      sourceVal = this.appendSrc();
      this.imgSrc = 'assets/sprite/lock' + sourceVal + '.png';
      this.srcValue++;
      console.log('imgSrc:', this.imgSrc);
      if (this.srcValue >= 10) {
        clearInterval(handle);
      }
    }, 500);


  }

  appendSrc() {
    let source: string;
    source = this.srcValue.toString();
    while (this.count < 4) {
      source = '0' + source;
      if (source.length === 4)
        break;
    }
    console.log('sourceVal:', source);
    return source;
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
