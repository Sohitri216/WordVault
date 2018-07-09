import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VaultDataService {

  animTriggerSub = new BehaviorSubject('sun');

  animTriggerObs = this.animTriggerSub.asObservable();
  constructor() { }

  // Service message commands
  triggerAnimation(animObj: string) {
    // setTimeout(() => {
      this.animTriggerSub.next(animObj);
    // });
  }

  initVaultService() {
    console.log('from vault service');
  }

}
