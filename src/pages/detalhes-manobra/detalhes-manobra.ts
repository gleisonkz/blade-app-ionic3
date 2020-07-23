import { Manobra } from './../blade/classes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detalhes-manobra',
  templateUrl: 'detalhes-manobra.html',
})
export class DetalhesManobraPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.manobra.ID = this.navParams.get('ID');
    this.manobra.Nome = this.navParams.get('Nome');
    this.manobra.Imagem = this.navParams.get('Imagem');
    this.manobra.Descricao = this.navParams.get('Descricao');
  }

  manobra:Manobra = new Manobra();

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesManobraPage');

  };


}


