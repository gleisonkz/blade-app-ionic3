
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ReactiveFormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ManobrasPage } from './../pages/manobras/manobras';
import { BladePage } from '../pages/blade/blade';
import { DetalhesManobraPage } from '../pages/detalhes-manobra/detalhes-manobra';
import { ModalJogadoresPage } from './../pages/modal-jogadores/modal-jogadores';
import { ConfiguracoesPage } from './../pages/configuracoes/configuracoes';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BladePage,
    ManobrasPage,
    ConfiguracoesPage,
    DetalhesManobraPage,
    ModalJogadoresPage
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp,{mode: 'md'}),
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 500,
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BladePage,
    ManobrasPage,
    ConfiguracoesPage,
    DetalhesManobraPage,
    ModalJogadoresPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
