import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Jogador } from './jogador';
import { MANOBRAS } from './manobras';
import { Manobra, eNivel, DicNiveis } from './classes';
import { ModalJogadoresPage } from '../modal-jogadores/modal-jogadores';

@IonicPage()
@Component({
  selector: 'page-blade',
  templateUrl: 'blade.html',
})
export class BladePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    let nomeJogador1 = navParams.get('nomeJogador1')
    let nomeJogador2 = navParams.get('nomeJogador2')
    let nivelSelecionado: eNivel = parseInt(navParams.get('nivelSelecionado'))
    this.nivelSelecionado = nivelSelecionado;

    console.log(this.nivelSelecionado);

    switch (nivelSelecionado) {
      case eNivel.Estreante:

        this.listaManobras = MANOBRAS.filter(c => c.Nivel == eNivel.Estreante);
        break;

      case eNivel.Iniciante:

        this.listaManobras = MANOBRAS.filter(c => c.Nivel == eNivel.Estreante || c.Nivel == eNivel.Iniciante);
        break;

      case eNivel.Amador:

        this.listaManobras = MANOBRAS.filter(c => c.Nivel == eNivel.Estreante || c.Nivel == eNivel.Iniciante || c.Nivel == eNivel.Amador);
        break;

      case eNivel.Elite:

        this.listaManobras = MANOBRAS;
        break;

      default:
        break;
    }

    this.jogadores = [new Jogador(nomeJogador1), new Jogador(nomeJogador2)]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BladePage');
  }

  jogadores: Jogador[] = [];
  jogadorSelecionado: number = 0;
  rodada: number = 1;
  circleVisibility: boolean = false;
  manobraEscolhida: Manobra = null;
  listaManobras: Array<Manobra>;
  listaManobrasExecutadas: Array<Manobra> = [];
  nivelSelecionado: eNivel;

  public get DicNivel(): Map<eNivel, string> {

    return DicNiveis;
  }

  public get JogadorSelecionado(): Jogador {

    return this.jogadores[this.jogadorSelecionado]
  }

  public get SortearNovamente(): boolean {

    return this.jogadorSelecionado === 0
  }

  public get BladeFinalizado(): boolean {

    return this.jogadores.filter(c => c.JogadasFinalizadas === true).length > 0
  }

  public get VencedorBlade(): Jogador {

    if (this.BladeFinalizado === false) {
      return null;
    }

    return this.jogadores.filter(c => c.JogadasFinalizadas === false)[0]
  }

  mudarJogador(): void {

    this.jogadorSelecionado++
    this.jogadorSelecionado = this.jogadorSelecionado >= this.jogadores.length ? 0 : this.jogadorSelecionado

    if (this.jogadorSelecionado === 0 && this.BladeFinalizado === false) {
      this.novaRodada();
    }
  }

  sortearManobra(): void {

    this.manobraEscolhida = null;
    let listaManobrasNaoRealizadas = this.listaManobras.filter(c => this.listaManobrasExecutadas.filter(a => a.ID === c.ID).length === 0)
    this.exibirComponenteCarregamento(() => this.manobraEscolhida = listaManobrasNaoRealizadas[Math.floor(Math.random() * listaManobrasNaoRealizadas.length)]);

  };

  exibirComponenteCarregamento(callback: any, time: number = 850): void {

    this.circleVisibility = true;

    setTimeout(() => {
      this.circleVisibility = false;

      if (callback) {
        callback();
      }

    }, time
    );

  }

  novaRodada(): void {

    this.listaManobrasExecutadas.push(this.manobraEscolhida);
    this.sortearManobra();
    this.rodada++
  }

  novoBlade(): void {

    this.rodada = 1;
    this.manobraEscolhida = null;
    this.listaManobrasExecutadas = [];
    this.jogadores.forEach(c => c.novoScore());
  }

  novoBladeNovosJogadores(): void {

    this.novoBlade();
    this.navCtrl.push(ModalJogadoresPage);
  }

  execucaoDeJogada(sucesso: boolean): void {

    this.JogadorSelecionado.registrarJogada(sucesso);
    this.mudarJogador();
  }

}
