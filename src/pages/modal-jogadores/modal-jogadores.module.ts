import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalJogadoresPage } from './modal-jogadores';

@NgModule({
  declarations: [
    ModalJogadoresPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalJogadoresPage),
  ],
})
export class ModalJogadoresPageModule {

}
