var Prodotto = /** @class */ (function () {
    function Prodotto(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoIvaEsclusa, _prezzoIvaInclusa, _disponibile, _saldo) {
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
    Prodotto.prototype.getSaldoCapo = function () {
        return this.prezzoivainclusa * (this.saldo / 100);
    };
    Prodotto.prototype.getAcquistoCapo = function () {
        console.log("Il prezzo scontato dell'articolo denominato ".concat(this.capo, " \u00E8 di ").concat(this.prezzoivainclusa - this.getSaldoCapo(), "\u20AC"));
    };
    return Prodotto;
}());
fetch("https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f")
    .then(function (resp) { return resp.json(); })
    .then(function (arr) {
    arr.forEach(function (obj) {
        var singoloCapo = new Prodotto(obj.id, obj.codprod, obj.collezione, obj.capo, obj.modello, obj.quantita, obj.colore, obj.prezzoivaesclusa, obj.prezzoivainclusa, obj.disponibile, obj.saldo);
        console.log(singoloCapo, singoloCapo.getAcquistoCapo());
    });
});
