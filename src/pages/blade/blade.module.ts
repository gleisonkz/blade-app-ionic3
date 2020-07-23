import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BladePage } from './blade';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    BladePage,
  ],
  imports: [
    IonicPageModule.forChild(BladePage),
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 500,
    })
  ],
})
export class BladePageModule {}
