import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManobrasPage } from './manobras';

@NgModule({
  declarations: [
    ManobrasPage,
  ],
  imports: [
    IonicPageModule.forChild(ManobrasPage),
  ],
})
export class ManobrasPageModule {}
