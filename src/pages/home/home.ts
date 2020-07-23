import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ConfiguracoesPage } from '../configuracoes/configuracoes';
import { ManobrasPage } from './../manobras/manobras';
import { ModalJogadoresPage } from '../modal-jogadores/modal-jogadores';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  // objDadosJogadores = {

  //   nomeJogador1:'',
  //   nomeJogador2:''
  // };

  pushPageBlade():void{

    //this.exibirModal()
    this.navCtrl.push(ModalJogadoresPage);
  }

  pushPageManobras():void{

    this.navCtrl.push(ManobrasPage);
  }

  pushPageConfiguracoes():void{

    this.navCtrl.push(ConfiguracoesPage);
  }

  // exibirModal() {
  //   let profileModal = this.modalCtrl.create(ModalJogadoresPage);
  //   profileModal.present();

  //   profileModal.onDidDismiss(data => {
  //     this.objDadosJogadores.nomeJogador1 = data.nomeJogador1;
  //     this.objDadosJogadores.nomeJogador2 = data.nomeJogador2;
  //     this.navCtrl.push(BladePage,this.objDadosJogadores);
  //   });
  // }


}
