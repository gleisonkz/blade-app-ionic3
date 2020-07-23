import { Letra } from "./letra";

export class Jogador {

  constructor(public nome: string) {

    this.novoScore();
  }

  score: Array<Letra>;
  private jogadasInvalidas: number = 0;
  private jogadasValidas: number = 0;

  public get JogadasInvalidas(): number {

    return this.jogadasInvalidas;
  }

  public get JogadasValidas(): number {

    return this.jogadasValidas;
  }

  public get Jogando(): boolean {

    return this.jogadasInvalidas > 0 || this.jogadasValidas > 0
  }

  public get JogadasFinalizadas(): boolean {

    return this.jogadasInvalidas >= 5;
  }

  novoScore(): void {

    this.jogadasInvalidas = 0;
    this.jogadasValidas = 0;

    this.score = [
      { letra: 'B.', visible: false },
      { letra: 'L.', visible: false },
      { letra: 'A.', visible: false },
      { letra: 'D.', visible: false },
      { letra: 'E',  visible: false }
    ];
  }

  registrarJogada(sucesso: boolean): void {

    if (this.JogadasFinalizadas) {
      throw new Error("Houve um erro ao registrar a jogada");
    }

    if (sucesso === false) {
      this.score[this.jogadasInvalidas++].visible = true;
    }
    else {
      this.jogadasValidas++
    }
  }

}
