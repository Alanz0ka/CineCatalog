class Titulos{
    constructor(){
        this.id = null,
        this.tipo = "",
        this.titulo = "",
        this.diretor = "",
        this.elenco = "",
        this.genero = ""
    }

    getId(){
        return this.id;
    }
    setId(novo){
        this.id = novo;
    }

    getTipo(){
        return this.tipo;
    }
    setTipo(novo){
        this.tipo = novo;
    }

    getTitulo(){
        return this.titulo;
    }
    setTitulo(novo){
        this.titulo = novo;
    }

    getDiretor(){
        return this.diretor;
    }
    setDiretor(novo){
        this.diretor = novo
    }

    getElenco(){
        return this.elenco;
    }
    setElenco(novo){
        this.elenco = novo;
    }

    getGenero(){
        return this.genero;
    }
    setGenero(novo){
        this.genero = novo;
    }
}