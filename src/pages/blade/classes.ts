export class Manobra {

  ID: number;
  Nome: string;
  Imagem: string;
  Descricao: string;
  Nivel: eNivel;
}

export enum eNivel {

  Estreante = 1,
  Iniciante = 2,
  Amador = 3,
  Elite = 4,
}

export var DicNiveis = new Map<eNivel,string>()
{
  DicNiveis.set(eNivel.Estreante,'Estreante');
  DicNiveis.set(eNivel.Iniciante,'Iniciante');
  DicNiveis.set(eNivel.Amador,'Amador');
  DicNiveis.set(eNivel.Elite,'Elite');
}
