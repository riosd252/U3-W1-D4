class Prodotto {
  id: number;
  codprod: number;
  collezione: string;
  capo: string;
  modello: number;
  quantita: number;
  colore: string;
  prezzoivaesclusa: number;
  prezzoivainclusa: number;
  disponibile: string;
  saldo: number;

  constructor(
    _id: number,
    _codprod: number,
    _collezione: string,
    _capo: string,
    _modello: number,
    _quantita: number,
    _colore: string,
    _prezzoIvaEsclusa: number,
    _prezzoIvaInclusa: number,
    _disponibile: string,
    _saldo: number
  ) {
    this.id = _id;
    this.codprod = _codprod;
    this.collezione = _collezione;
    this.capo = _capo;
    this.modello = _modello;
    this.quantita = _quantita;
    this.colore = _colore;
    this.prezzoivaesclusa = _prezzoIvaEsclusa;
    this.prezzoivainclusa = _prezzoIvaInclusa;
    this.disponibile = _disponibile;
    this.saldo = _saldo;
  }

  getSaldoCapo() {
    return this.prezzoivainclusa * (this.saldo / 100);
  }

  getAcquistoCapo() {
    console.log(
      `Il prezzo scontato dell'articolo denominato ${this.capo} è di ${
        this.prezzoivainclusa - this.getSaldoCapo()
      }€`
    );
  }
}

fetch("https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f")
  .then((resp) => resp.json())
  .then((arr) => {
    arr.forEach((obj): void => {
      const singoloCapo = new Prodotto(
        obj.id,
        obj.codprod,
        obj.collezione,
        obj.capo,
        obj.modello,
        obj.quantita,
        obj.colore,
        obj.prezzoivaesclusa,
        obj.prezzoivainclusa,
        obj.disponibile,
        obj.saldo
      );
      console.log(singoloCapo, singoloCapo.getAcquistoCapo());
    });
  });
