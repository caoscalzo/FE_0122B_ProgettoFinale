import { Comune } from "./comune";

export class Sede {
  id!: number;
  via!: string;
  civico!: string;
  cap!: string;
  localita!: string;
  comune: Comune = new Comune();
}
