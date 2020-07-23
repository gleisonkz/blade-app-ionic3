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

  pushPageBlade():void{

    this.navCtrl.push(ModalJogadoresPage);
  }

  pushPageManobras():void{

    this.navCtrl.push(ManobrasPage);
  }

  pushPageConfiguracoes():void{

    this.navCtrl.push(ConfiguracoesPage);
  }
}
