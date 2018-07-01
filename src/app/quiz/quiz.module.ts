import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityComponent } from './component/activity/activity.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ActivityComponent]
})
export class QuizModule {

  static forRoot(): ModuleWithProviders{
		return {
            ngModule: QuizModule,
            providers: []
        };
	}


 }
