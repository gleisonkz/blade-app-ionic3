import { DetalhesManobraPage } from './../detalhes-manobra/detalhes-manobra';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { MANOBRAS } from '../blade/manobras';
import { Manobra } from '../blade/classes';
import { map, filter, debounceTime, distinctUntilChanged, switchMap,} from "rxjs/operators";
import { fromEvent } from 'rxjs/observable/fromEvent';
import { of } from 'rxjs/observable/of';


@IonicPage()
@Component({
  selector: 'page-manobras',
  templateUrl: 'manobras.html',
})
export class ManobrasPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController) {

  }

  @ViewChild('elementoInput') elementoInput: ElementRef

  ionViewDidLoad() {


    const inputElement = document.getElementById('inputElement');
    const typeahead = fromEvent(inputElement, 'input').pipe(

      map((e: KeyboardEvent) => (<HTMLTextAreaElement>e.target).value),
      filter(text => text.length > 2 || text.length === 0),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(value => of(MANOBRAS.filter(

        item => item.Nome.toLowerCase().indexOf(value.toLowerCase()) !== -1 || value.length === 0

      )))
    );

    typeahead.subscribe(c => {
      this.listaManobras = c;
    })
  }

  listaManobras: Array<Manobra> = MANOBRAS;

  exibirModalDetalhesManobra(manobra: Manobra) {

    this.navCtrl.push(DetalhesManobraPage, manobra);
  }

}
