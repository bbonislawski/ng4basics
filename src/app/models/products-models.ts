export class Product {
  name: string;
  cena: number;
  jednostka: string;
  special?: boolean;

  constructor(data: any = {}) {
        this.name = data.name;
        this.cena = data.cena;
        this.jednostka = data.jednostka;
        this.special = data.special || false;
    }
}
