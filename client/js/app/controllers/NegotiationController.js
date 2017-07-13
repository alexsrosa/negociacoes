class NegotiationController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._listanegociacoes = new NegotiationsList();

        this._negociacoesView = new NegotiationsView($('#negotiationsView'));
        this._negociacoesView.update(this._listanegociacoes);

        this._message = new Message();
        this._messageView = new MessageView($('#messageView'));
        this._messageView.update(this._message);

    }

    add(event) {
        event.preventDefault();
        this._listanegociacoes.add(this._criaNegociacao());

        this._message.text = 'Message successfully added';
        this._messageView.update(this._message);

        this._limpaFormulario();
        this._negociacoesView.update(this._listanegociacoes);
    }

    _criaNegociacao() {
        return new Negotiation(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario() {
        this._inputData.value = null;
        this._inputQuantidade.value = 0;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }
}