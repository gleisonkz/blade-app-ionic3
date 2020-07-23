import { eNivel, DicNiveis } from './../blade/classes';
import { BladePage } from './../blade/blade';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-modal-jogadores',
  templateUrl: 'modal-jogadores.html',
})
export class ModalJogadoresPage {

  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    private alertCtrl: AlertController
  ) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalJogadoresPage');
  }


  nivelSelecionado: eNivel;

  get Nivel() {
    return eNivel;
  }


  get DicNivel() {
    return DicNiveis;
  }




  Submit(nomeJogador1: string, nomeJogador2: string) {

    console.log(this.nivelSelecionado);

    if (this.validarInputs(nomeJogador1, nomeJogador2, this.nivelSelecionado) === false) { return };
    this.navCtrl.push(BladePage, { nomeJogador1: nomeJogador1, nomeJogador2: nomeJogador2, nivelSelecionado: this.nivelSelecionado })
  }



  validarInputs(campo1: string, campo2: string, campo3: eNivel) {

    if (campo1.trim() == "" || campo2.trim() == "" || campo3 === undefined) {
      const alert = this.alertCtrl.create({
        title: "Atenção",
        subTitle: "Preencha todos os campos",
        buttons: ["OK"]
      });
      alert.present();
      return false;
    }
    else {
      return true;
    }

  }




}
