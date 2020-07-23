import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesManobraPage } from './detalhes-manobra';

@NgModule({
  declarations: [
    DetalhesManobraPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesManobraPage),
  ],
})
export class DetalhesManobraPageModule {}
